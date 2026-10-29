import path from 'node:path'
import fs from 'node:fs/promises'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'
import { blogData } from '@/data/blog-data'
import { blogComments } from '@/data/blog-comments'

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

const MIME: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  svg: 'image/svg+xml',
}

/** Build a minimal Lexical document with one paragraph. */
function lexicalBody(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text: text || '', format: 0, version: 1 }],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export async function GET(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Disabled' }, { status: 404 })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })
  if (!user) {
    return NextResponse.json({ error: 'Log in at /admin first' }, { status: 401 })
  }
  if (!(await isSuperAdminUser(payload, user))) {
    return NextResponse.json({ error: 'Super admin access required' }, { status: 403 })
  }

  const existing = await payload.count({ collection: 'posts' })
  if (existing.totalDocs > 0) {
    return NextResponse.json({ message: 'Already seeded', count: existing.totalDocs })
  }

  /* ---------------------------------------------------------- */
  /*  Media cache: upload each unique image only once             */
  /* ---------------------------------------------------------- */

  const mediaCache = new Map<string, number>()

  async function uploadMedia(imagePath: string): Promise<number | undefined> {
    if (!imagePath) return undefined
    if (mediaCache.has(imagePath)) return mediaCache.get(imagePath)
    try {
      const filePath = path.join(process.cwd(), 'public', imagePath)
      const buffer = await fs.readFile(filePath)
      const ext = (path.extname(imagePath).slice(1) || 'jpg').toLowerCase()
      const created = await payload.create({
        collection: 'media',
        data: { alt: path.basename(imagePath, path.extname(imagePath)) },
        file: {
          data: buffer,
          mimetype: MIME[ext] ?? 'image/jpeg',
          name: path.basename(imagePath),
          size: buffer.length,
        },
      })
      mediaCache.set(imagePath, Number(created.id))
      return Number(created.id)
    } catch (err) {
      console.error(
        `Failed to upload ${imagePath}:`,
        err instanceof Error ? err.message : 'unknown error',
      )
      return undefined
    }
  }

  /* ---------------------------------------------------------- */
  /*  Authors                                                    */
  /* ---------------------------------------------------------- */

  // Helper to find or create an author by name
  async function findOrCreateAuthor(
    name: string,
    bio: string,
    photoPath: string,
  ): Promise<{ id: number }> {
    const { docs } = await payload.find({
      collection: 'authors',
      where: { name: { equals: name } },
      limit: 1,
      depth: 0,
    })
    if (docs[0]) return { id: Number(docs[0].id) }
    const photo = await uploadMedia(photoPath)
    const created = await payload.create({
      collection: 'authors',
      data: { name, bio, ...(photo ? { photo } : {}) },
    })
    return { id: Number(created.id) }
  }

  const kate = await findOrCreateAuthor(
    'Kate Johnson',
    'Crafting Digital Experiences with Purpose!',
    '/assets/img/blog/blog-standard/av-1.png',
  )

  const peter = await findOrCreateAuthor(
    'Peter Bowman',
    'Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis.',
    '/assets/img/blog/details/user.png',
  )

  /* ---------------------------------------------------------- */
  /*  Categories                                                */
  /* ---------------------------------------------------------- */

  const categoryNames = ['Branding', 'Web Design', 'Development', 'Design', 'Articles', 'Business']
  const categoryMap = new Map<string, number>()
  for (const name of categoryNames) {
    const { docs } = await payload.find({
      collection: 'categories',
      where: { name: { equals: name } },
      limit: 1,
      depth: 0,
    })
    if (docs[0]) {
      categoryMap.set(name, Number(docs[0].id))
    } else {
      const created = await payload.create({ collection: 'categories', data: { name } })
      categoryMap.set(name, Number(created.id))
    }
  }
  // Also map the exact tag strings used in blogData
  const tagToCategory = new Map<string, number>(categoryMap)

  /* ---------------------------------------------------------- */
  /*  Posts                                                      */
  /* ---------------------------------------------------------- */

  const sortedBlogData = [...blogData].sort((a, b) => a.id - b.id)
  let createdCount = 0
  for (const item of sortedBlogData) {
    const coverImage = await uploadMedia(item.image)
    if (!coverImage) {
      console.warn(`Skipping post ${item.id}: cover image "${item.image}" not found`)
      continue
    }

    // Gallery images for slider posts
    const galleryMedia: { image: number }[] = []
    for (const img of item.images ?? []) {
      const mediaId = await uploadMedia(img)
      if (mediaId) galleryMedia.push({ image: mediaId })
    }

    // Categories from the tag field (fallback: Design)
    const catIds: number[] = []
    if (item.tag && tagToCategory.has(item.tag)) {
      catIds.push(tagToCategory.get(item.tag)!)
    } else {
      catIds.push(categoryMap.get('Design')!)
    }

    // Alternate authors so the admin shows variety
    const authorId = item.id % 2 === 0 ? Number(peter.id) : Number(kate.id)

    await payload.create({
      collection: 'posts',
      data: {
        title: item.title,
        excerpt: item.description ?? item.desc ?? '',
        coverImage,
        body: lexicalBody(item.description ?? item.desc ?? ''),
        author: authorId,
        categories: catIds,
        publishedAt: new Date(Date.UTC(2024, 0, 1 + item.id)).toISOString(),
        mediaType: (item.type as string) ?? 'image',
        videoUrl: item.videoId ?? undefined,
        gallery: galleryMedia.length > 0 ? galleryMedia : undefined,
        _status: 'published',
      },
    })
    createdCount++
  }

  /* ---------------------------------------------------------- */
  /*  Sample comments on the first post                          */
  /* ---------------------------------------------------------- */

  const firstPost = await payload.find({
    collection: 'posts',
    sort: 'id',
    limit: 1,
    depth: 0,
  })

  if (firstPost.docs[0]) {
    const postId = firstPost.docs[0].id

    // Top-level comment by Harun
    const c1 = await payload.create({
      collection: 'blog-comments',
      data: {
        post: postId,
        authorName: 'Harun Rashid',
        authorEmail: 'harun@example.com',
        body: blogComments[0]?.content ?? '',
        status: 'approved',
      },
    })

    // Reply by Oliver (child of Harun)
    await payload.create({
      collection: 'blog-comments',
      data: {
        post: postId,
        authorName: 'Oliver Williams',
        authorEmail: 'oliver@example.com',
        body: blogComments[1]?.content ?? '',
        status: 'approved',
        parent: c1.id,
      },
    })

    // Top-level comment by James
    await payload.create({
      collection: 'blog-comments',
      data: {
        post: postId,
        authorName: 'James Taylor',
        authorEmail: 'james@example.com',
        body: blogComments[2]?.content ?? '',
        status: 'approved',
      },
    })
  }

  return NextResponse.json({
    created: createdCount,
    authors: 2,
    categories: categoryNames.length,
  })
}
