import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getBlogPostForComment } from '@/lib/blog'
import { rateLimited } from '@/lib/rateLimit'
import {
  MAX_COMMENT_BODY_LENGTH,
  MAX_COMMENT_EMAIL_LENGTH,
  MAX_COMMENT_NAME_LENGTH,
} from '@/lib/blogRules'

const EMAIL_RE = /^\S+@\S+\.\S+$/

export async function POST(request: Request) {
  // 1) rate limit by IP
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  // 2) reject oversized payloads early
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > 512 * 1024) {
    return NextResponse.json({ error: 'The submission is too large.' }, { status: 413 })
  }

  // 3) parse FormData
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  // 4) honeypot: real visitors never see or fill this field. Bots do.
  if (String(form.get('website') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  // 5) resolve the parent post (must be published and not future-dated)
  const post = await getBlogPostForComment(String(form.get('postId') ?? ''))
  if (!post) {
    return NextResponse.json({ error: 'This post is no longer available.' }, { status: 404 })
  }

  // 6) validate fields
  const fieldErrors: Record<string, string> = {}

  const name = String(form.get('name') ?? '').trim()
  if (!name) {
    fieldErrors.name = 'Name is required'
  } else if (name.length > MAX_COMMENT_NAME_LENGTH) {
    fieldErrors.name = `Please keep this under ${MAX_COMMENT_NAME_LENGTH} characters.`
  }

  const email = String(form.get('email') ?? '').trim()
  if (!email) {
    fieldErrors.email = 'Email is required'
  } else if (email.length > MAX_COMMENT_EMAIL_LENGTH) {
    fieldErrors.email = `Please keep this under ${MAX_COMMENT_EMAIL_LENGTH} characters.`
  } else if (!EMAIL_RE.test(email)) {
    fieldErrors.email = 'Invalid email address'
  }

  const body = String(form.get('comment') ?? '').trim()
  if (!body) {
    fieldErrors.comment = 'Comment is required'
  } else if (body.length < 5) {
    fieldErrors.comment = 'Comment must be at least 5 characters'
  } else if (body.length > MAX_COMMENT_BODY_LENGTH) {
    fieldErrors.comment = `Please keep this under ${MAX_COMMENT_BODY_LENGTH} characters.`
  }

  // optional parent for replies
  const parentIdRaw = String(form.get('parentId') ?? '').trim()
  let parent: number | undefined
  if (parentIdRaw) {
    const n = Number(parentIdRaw)
    if (Number.isInteger(n)) parent = n
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: 'Please check the highlighted fields.', fieldErrors },
      { status: 400 },
    )
  }

  // 7) if a parentId was supplied, verify it belongs to the same post and is approved
  if (parent !== undefined) {
    try {
      const payload = await getPayload({ config })
      const { docs: parentDocs } = await payload.find({
        collection: 'blog-comments',
        where: {
          and: [
            { id: { equals: parent } },
            { post: { equals: post.id } },
            { status: { equals: 'approved' } },
          ],
        },
        limit: 1,
        depth: 0,
        overrideAccess: true,
      })
      if (!parentDocs[0]) {
        return NextResponse.json(
          { error: 'The comment you are replying to is not available.' },
          { status: 400 },
        )
      }
    } catch {
      return NextResponse.json(
        { error: 'Could not validate parent comment.' },
        { status: 500 },
      )
    }
  }

  // 8) create the comment
  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'blog-comments',
      data: {
        post: post.id,
        authorName: name,
        authorEmail: email,
        body,
        status: 'pending',
        ...(parent ? { parent } : {}),
      },
      overrideAccess: true,
    })
  } catch (err) {
    console.error('Comment save failed:', err instanceof Error ? err.message : 'unknown error')
    return NextResponse.json(
      { error: 'We could not submit your comment. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
