import type { Where } from 'payload'

export type ResourceDefinition = {
  label: string
  isGlobal: boolean
  publicRead: boolean
  configurable?: boolean
  publicReadWhere?: () => Where
}

const publishedPostsWhere = (): Where => {
  const now = new Date().toISOString()
  return {
    and: [
      { _status: { equals: 'published' } },
      {
        or: [
          { publishedAt: { less_than_equal: now } },
          { publishedAt: { exists: false } },
        ],
      },
    ],
  }
}

export const resources = {
  users: { label: 'Users', isGlobal: false, publicRead: false, configurable: false },
  roles: { label: 'Roles', isGlobal: false, publicRead: false, configurable: false },
  media: { label: 'Media', isGlobal: false, publicRead: true },
  'faq-items': { label: 'FAQ', isGlobal: false, publicRead: false },
  plans: { label: 'Plans', isGlobal: false, publicRead: false },
  jobs: {
    label: 'Jobs',
    isGlobal: false,
    publicRead: true,
    publicReadWhere: () => ({ status: { equals: 'open' } }),
  },
  applications: { label: 'Applications', isGlobal: false, publicRead: false },
  authors: { label: 'Authors', isGlobal: false, publicRead: true },
  categories: { label: 'Categories', isGlobal: false, publicRead: true },
  posts: {
    label: 'Posts',
    isGlobal: false,
    publicRead: true,
    publicReadWhere: publishedPostsWhere,
  },
  'blog-comments': {
    label: 'Comments',
    isGlobal: false,
    publicRead: true,
    publicReadWhere: () => ({ status: { equals: 'approved' } }),
  },
  'page-seo': { label: 'Page SEO', isGlobal: false, publicRead: true },
  'career-page': { label: 'Career page', isGlobal: true, publicRead: false },
  'about-page': { label: 'About Us page', isGlobal: true, publicRead: false },
} as const satisfies Record<string, ResourceDefinition>

export type ResourceSlug = keyof typeof resources

export const roleResourceOptions = Object.entries(resources)
  .filter(([, resource]) => !('configurable' in resource) || resource.configurable !== false)
  .map(([value, resource]) => ({ label: resource.label, value }))

export function isGlobalResource(resource: unknown): boolean {
  return typeof resource === 'string'
    && Object.prototype.hasOwnProperty.call(resources, resource)
    && resources[resource as ResourceSlug].isGlobal
}

function getClientRole(user: unknown): Record<string, unknown> | null {
  if (!user || typeof user !== 'object') return null
  const role = (user as { role?: unknown }).role
  return role && typeof role === 'object' ? role as Record<string, unknown> : null
}

export function clientUserIsSuperAdmin(user: unknown): boolean {
  return getClientRole(user)?.isSuperAdmin === true
}

export function clientUserCanRead(user: unknown, resource: string): boolean {
  if (!Object.prototype.hasOwnProperty.call(resources, resource)) return false
  const definition = resources[resource as ResourceSlug]
  if ('configurable' in definition && definition.configurable === false) return false
  const role = getClientRole(user)
  if (role?.isSuperAdmin === true) return true
  const permissions = role?.permissions
  return Array.isArray(permissions) && permissions.some((permission) =>
    permission !== null
    && typeof permission === 'object'
    && (permission as { resource?: unknown }).resource === resource
    && (permission as { read?: unknown }).read === true,
  )
}
