import { getPayload } from 'payload'
import { cache } from 'react'
import type { Where } from 'payload'
import config from '@payload-config'
import type { BlogItemDt, BlogPostDt, BlogComment } from '@/types/custom-dt'
import { blogData } from '@/data/blog-data'

/* ------------------------------------------------------------------ */
/*  Hand-cast document shapes (no generated Payload types exist)       */
/* ------------------------------------------------------------------ */

type MediaDoc = { id: number; url?: string; alt?: string }

type AuthorDoc = {
  id: number
  name: string
  bio?: string
  photo?: MediaDoc | null
}

type CategoryDoc = { id: number; name: string; slug: string }

type PostDoc = {
  id: number
  title: string
  slug?: string
  excerpt?: string
  coverImage?: MediaDoc | number | null
  body?: unknown
  author?: AuthorDoc | number | null
  categories?: (CategoryDoc | number)[] | null
  publishedAt?: string | null
  mediaType?: string | null
  videoUrl?: string | null
  gallery?: { image: MediaDoc | number }[] | null
  _status?: string
  seo?: {
    metaTitle?: string | null
    metaDescription?: string | null
    shareImage?: MediaDoc | number | null
    canonicalUrl?: string | null
    noIndex?: boolean | null
  } | null
}

type CommentDoc = {
  id: number
  post?: number | PostDoc
  authorName: string
  authorEmail: string
  body: string
  status: string
  parent?: number | CommentDoc | null
  createdAt: string
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

const DEFAULT_AVATAR = '/assets/img/blog/details/blog-details-sm-2.jpg'

const nowISO = () => new Date().toISOString()

/**
 * Extract a YouTube video ID from either a full URL or a bare ID.
 * Handles youtu.be/<id>, youtube.com/watch?v=<id>, youtube.com/embed/<id>.
 */
function extractYoutubeId(raw: string): string {
  if (!raw) return raw
  // Already a bare ID (no slashes, no dots in the expected URL patterns)
  const urlPatterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /\/embed\/([A-Za-z0-9_-]{11})/,
    /\/shorts\/([A-Za-z0-9_-]{11})/,
  ]
  for (const re of urlPatterns) {
    const m = raw.match(re)
    if (m) return m[1]
  }
  return raw // already an ID or unrecognized format — pass through
}

/**
 * Where-clause that restricts results to published, non-future-dated posts.
 * The access-control stub returns read: true for everyone, so this filter
 * is what keeps drafts and scheduled posts off the public site.
 */
export const publishedFilter = (): Where => ({
  and: [
    { _status: { equals: 'published' } } as Where,
    {
      or: [
        { publishedAt: { less_than_equal: nowISO() } } as Where,
        { publishedAt: { exists: false } } as Where,
      ],
    } as Where,
  ],
})

/** Compose a Where filter for a single post that is also published. */
const singlePublishedPost = (id: number): Where => ({
  and: [
    { id: { equals: id } } as Where,
    { _status: { equals: 'published' } } as Where,
    {
      or: [
        { publishedAt: { less_than_equal: nowISO() } } as Where,
        { publishedAt: { exists: false } } as Where,
      ],
    } as Where,
  ],
})

function resolveMediaUrl(media: unknown): string {
  if (!media || typeof media === 'number') return ''
  return (media as MediaDoc).url ?? ''
}

const fmtDate = (iso?: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric',
      })
    : ''

function resolveCategoryNames(cats: unknown): string[] {
  if (!Array.isArray(cats)) return []
  return cats
    .map((c) => (typeof c === 'number' ? '' : (c as CategoryDoc).name ?? ''))
    .filter(Boolean)
}

/* ------------------------------------------------------------------ */
/*  Post â†’ BlogItemDt mapping (for listing pages)                       */
/* ------------------------------------------------------------------ */

function toBlogItem(doc: unknown): BlogItemDt {
  const post = doc as PostDoc
  const coverUrl = resolveMediaUrl(post.coverImage)
  const galleryUrls = (post.gallery ?? [])
    .map((g) => resolveMediaUrl(g.image))
    .filter(Boolean)
  const catNames = resolveCategoryNames(post.categories)

  return {
    id: post.id,
    title: post.title,
    image: coverUrl,
    delay: '.3',
    description: post.excerpt ?? '',
    desc: post.excerpt ?? '',
    year: post.publishedAt ? new Date(post.publishedAt).getFullYear() : 2024,
    date: fmtDate(post.publishedAt),
    type: post.mediaType ?? 'image',
    videoId: post.videoUrl ? extractYoutubeId(post.videoUrl) : undefined,
    images: galleryUrls.length > 0 ? galleryUrls : undefined,
    tag: catNames.length > 0 ? catNames[0] : undefined,
  }
}

/* ------------------------------------------------------------------ */
/*  Post â†’ BlogPostDt mapping (for details page)                        */
/* ------------------------------------------------------------------ */

function toBlogPost(doc: unknown): BlogPostDt {
  const post = doc as PostDoc
  const item = toBlogItem(doc)
  const author =
    post.author && typeof post.author !== 'number' ? (post.author as AuthorDoc) : null

  const seo = post.seo ?? null
  const shareImageUrl = seo?.shareImage
    ? resolveMediaUrl(seo.shareImage)
    : undefined

  return {
    ...item,
    slug: post.slug,
    body: post.body,
    authorName: author?.name,
    authorBio: author?.bio,
    authorPhoto: resolveMediaUrl(author?.photo),
    authorId: author?.id,
    categoryNames: resolveCategoryNames(post.categories),
    publishedAt: post.publishedAt ?? undefined,
    seo: seo
      ? {
          metaTitle: seo.metaTitle ?? undefined,
          metaDescription: seo.metaDescription ?? undefined,
          shareImageUrl,
          canonicalUrl: seo.canonicalUrl ?? undefined,
          noIndex: seo.noIndex ?? false,
        }
      : undefined,
  }
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

/**
 * Newest N published posts, sorted by publishedAt desc (falls back to
 * createdAt when publishedAt is empty).  Omit limit to get all posts.
 * Falls back to static blogData only when the posts collection is empty.
 */
export async function getBlogPosts(limit?: number): Promise<BlogItemDt[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: publishedFilter(),
    sort: '-publishedAt',
    ...(limit ? { limit } : { pagination: false }),
    depth: 1,
  })
  if (docs.length === 0 && (await payload.count({ collection: 'posts' })).totalDocs === 0) {
    // Fallback: static data sorted newest-first by id (proxy for insertion order)
    const sorted = [...blogData].sort((a, b) => b.id - a.id)
    return limit ? sorted.slice(0, limit) : sorted
  }
  return docs.map(toBlogItem)
}

/** Single post by numeric id, with body/author/categories populated.
 *  Falls back to static blogData ONLY when the posts collection has no
 *  documents at all (i.e. the DB has never been seeded).
 *  Wrapped in React.cache so generateMetadata and the page share one fetch.
 */
export const getBlogPostById = cache(async (id?: number | string): Promise<BlogPostDt | null> => {
  const numericId = Number(id)
  if (!Number.isInteger(numericId)) return null
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: singlePublishedPost(numericId),
    limit: 1,
    depth: 2,
  })
  if (docs[0]) return toBlogPost(docs[0])
  // Only fall back to static data when the collection is completely empty
  const { totalDocs } = await payload.count({ collection: 'posts' })
  if (totalDocs > 0) return null
  const staticPost = blogData.find((p) => p.id === numericId)
  return staticPost ? { ...staticPost } : null
})

/** Minimal post info for the comments POST route.
 *  Never falls back to static data: creating a comment against a static id
 *  that does not exist in the DB would cause a 500 on save.
 */
export async function getBlogPostForComment(
  id?: number | string,
): Promise<{ id: number; title: string } | null> {
  const numericId = Number(id)
  if (!Number.isInteger(numericId)) return null
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: singlePublishedPost(numericId),
    limit: 1,
    depth: 0,
  })
  const doc = docs[0] as unknown as PostDoc | undefined
  if (doc) return { id: doc.id, title: doc.title }
  return null
}

/** Latest post id (for the blog-details page without an [id] segment). */
export async function getLatestPostId(): Promise<number | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: publishedFilter(),
    sort: '-publishedAt',
    limit: 1,
    depth: 0,
  })
  if (docs[0]) return (docs[0] as unknown as PostDoc).id
  const { totalDocs } = await payload.count({ collection: 'posts' })
  return totalDocs === 0 && blogData.length > 0 ? blogData[0].id : null
}

/** Latest n posts for the sidebar widget. */
export async function getLatestPosts(n: number = 3): Promise<BlogItemDt[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: publishedFilter(),
    sort: '-publishedAt',
    limit: n,
    depth: 1,
  })
  if (docs.length > 0) return docs.map(toBlogItem)
  const { totalDocs } = await payload.count({ collection: 'posts' })
  return totalDocs === 0 ? blogData.slice(-n) : []
}

/* ------------------------------------------------------------------ */
/*  Comments                                                           */
/* ------------------------------------------------------------------ */

function toBlogComment(doc: CommentDoc, allReplies: CommentDoc[]): BlogComment {
  const childReplies = allReplies.filter((r) => {
    if (r.parent && typeof r.parent === 'object') return (r.parent as CommentDoc).id === doc.id
    return r.parent === doc.id
  })

  return {
    id: String(doc.id),
    author: doc.authorName,
    avatar: DEFAULT_AVATAR,
    date: fmtDate(doc.createdAt),
    content: doc.body,
    // Recurse so replies-to-replies are shown to any depth
    replies:
      childReplies.length > 0 ? childReplies.map((r) => toBlogComment(r, allReplies)) : undefined,
  }
}

/** Approved comments for a post, built into a parent/child tree. */
export async function getApprovedComments(postId: number): Promise<BlogComment[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'blog-comments',
    where: {
      and: [
        { post: { equals: postId } } as Where,
        { status: { equals: 'approved' } } as Where,
      ],
    },
    sort: 'createdAt',
    pagination: false,
    depth: 1,
  })

  const all = docs as unknown as CommentDoc[]
  const topLevel = all.filter((c) => !c.parent)
  const replies = all.filter((c) => c.parent)

  return topLevel.map((c) => toBlogComment(c, replies))
}

/* ------------------------------------------------------------------ */
/*  Categories                                                         */
/* ------------------------------------------------------------------ */

export async function getBlogCategories(): Promise<
  { id: number; name: string; count: number }[]
> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'categories',
    pagination: false,
    depth: 0,
  })

  if (docs.length === 0) {
    // Fallback to the static sidebar categories
    return [
      { id: 1, name: 'Articles', count: 8 },
      { id: 2, name: 'Business', count: 4 },
      { id: 3, name: 'Family & Divorce', count: 12 },
      { id: 4, name: 'Web Design', count: 16 },
    ]
  }

  const result: { id: number; name: string; count: number }[] = []
  for (const cat of docs) {
    const catId = (cat as unknown as { id: number }).id
    const catName = (cat as unknown as { name: string }).name
    const { totalDocs } = await payload.count({
      collection: 'posts',
      where: {
        and: [
          { categories: { equals: catId } } as Where,
          { _status: { equals: 'published' } } as Where,
          {
            or: [
              { publishedAt: { less_than_equal: nowISO() } } as Where,
              { publishedAt: { exists: false } } as Where,
            ],
          } as Where,
        ],
      },
    })
    result.push({ id: catId, name: catName, count: totalDocs })
  }
  return result
}
