import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'

const editorPermissions = [
  { resource: 'faq-items', create: true, read: true, update: true, delete: true },
  { resource: 'plans', create: true, read: true, update: true, delete: true },
  { resource: 'career-page', read: true, update: true },
  { resource: 'about-page', read: true, update: true },
  { resource: 'page-seo', create: true, read: true, update: true, delete: true },
  { resource: 'media', create: true, read: true, update: true, delete: true },
]

const recruiterPermissions = [
  { resource: 'jobs', read: true, update: true },
  { resource: 'applications', read: true, update: true },
]

const blogAuthorPermissions = [
  { resource: 'posts', create: true, read: true, update: true },
  { resource: 'categories', create: true, read: true, update: true },
  { resource: 'authors', create: true, read: true, update: true },
  { resource: 'blog-comments', create: true, read: true, update: true },
  { resource: 'media', create: true, read: true, update: true },
]

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

  const existing = await payload.find({
    collection: 'roles',
    where: { slug: { in: ['editor', 'recruiter', 'blog-author'] } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  if (existing.docs.length > 0) {
    return NextResponse.json({ message: 'Example roles already exist' })
  }

  for (const role of [
    { name: 'Editor', slug: 'editor', description: 'Example content editor role.', permissions: editorPermissions },
    { name: 'Recruiter', slug: 'recruiter', description: 'Example recruiting role.', permissions: recruiterPermissions },
    { name: 'Blog author', slug: 'blog-author', description: 'Example blog publishing role.', permissions: blogAuthorPermissions },
  ]) {
    await payload.create({
      collection: 'roles',
      data: { ...role, isSuperAdmin: false },
      overrideAccess: true,
    })
  }

  return NextResponse.json({ created: ['editor', 'recruiter', 'blog-author'] })
}
