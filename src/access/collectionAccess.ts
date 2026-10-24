import type { Access, Where } from 'payload'

type Action = 'create' | 'read' | 'update' | 'delete'

// Stopgap: any logged-in user may write. Public read is limited to
// published posts and approved comments. The RBAC work replaces the inside
// of this function. Keep the signature.
export function collectionAccess(slug: string): Record<Action, Access> {
  const loggedIn: Access = ({ req }) => Boolean(req.user)

  const read: Access = ({ req }) => {
    if (req.user) return true
    if (slug === 'blog-comments') return { status: { equals: 'approved' } } as Where
    if (slug === 'posts') return { _status: { equals: 'published' } } as Where
    return true
  }

  return { create: loggedIn, read, update: loggedIn, delete: loggedIn }
}