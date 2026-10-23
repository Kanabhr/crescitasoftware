import type { Access } from 'payload'

type Action = 'create' | 'read' | 'update' | 'delete'

export function collectionAccess(_slug: string): Record<Action, Access> {
  void _slug
  const loggedIn: Access = ({ req }) => Boolean(req.user)
  const anyone: Access = () => true
  return { create: loggedIn, read: anyone, update: loggedIn, delete: loggedIn }
}
