import type { Access, PayloadRequest } from 'payload'
import { resources, type ResourceSlug } from './resources'

type Action = 'create' | 'read' | 'update' | 'delete'

type RolePermission = {
  resource?: string
  create?: boolean
  read?: boolean
  update?: boolean
  delete?: boolean
}

type RoleDocument = {
  id: number | string
  isSuperAdmin?: boolean
  permissions?: RolePermission[] | null
}

type UserWithRole = NonNullable<PayloadRequest['user']> & {
  role?: number | string | { id?: number | string } | null
}

export async function getRoleForRequest(req: PayloadRequest): Promise<RoleDocument | null> {
  if (!req.user) return null
  if (req.context.rbacRoleResolved === true) {
    return req.context.rbacRole as RoleDocument | null
  }

  const user = req.user as UserWithRole
  const relation = user.role
  const roleID = relation && typeof relation === 'object' ? relation.id : relation
  let role: RoleDocument | null = null

  if (roleID !== undefined && roleID !== null && roleID !== '') {
    const result = await req.payload.find({
      collection: 'roles',
      where: { id: { equals: roleID } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
      req,
    })
    role = (result.docs[0] as RoleDocument | undefined) ?? null
  }

  req.context.rbacRole = role
  req.context.rbacRoleResolved = true
  return role
}

export async function isSuperAdmin(req: PayloadRequest): Promise<boolean> {
  return (await getRoleForRequest(req))?.isSuperAdmin === true
}

export async function hasAnyPermission(req: PayloadRequest): Promise<boolean> {
  const role = await getRoleForRequest(req)
  if (role?.isSuperAdmin) return true
  return Boolean(role?.permissions?.some((permission) => {
    if (typeof permission.resource !== 'string'
      || !Object.prototype.hasOwnProperty.call(resources, permission.resource)) return false
    const resource = resources[permission.resource as ResourceSlug]
    if ('configurable' in resource && resource.configurable === false) return false
    return permission.create || permission.read || permission.update || permission.delete
  }))
}

export async function hasResourcePermission(
  req: PayloadRequest,
  slug: string,
  action: Action,
  expectedGlobal = false,
): Promise<boolean> {
  if (!Object.prototype.hasOwnProperty.call(resources, slug)) return false
  const resource = resources[slug as ResourceSlug]
  if (resource.isGlobal !== expectedGlobal) return false

  const role = await getRoleForRequest(req)
  if (role?.isSuperAdmin) return true
  return Boolean(role?.permissions?.some((permission) =>
    permission.resource === slug && permission[action] === true,
  ))
}

const accessFor = (slug: string, action: Action, expectedGlobal = false): Access => async ({ req }) => {
  if (!Object.prototype.hasOwnProperty.call(resources, slug)) return false
  const resource = resources[slug as ResourceSlug]
  if (resource.isGlobal !== expectedGlobal) return false

  if (!req.user) {
    if (expectedGlobal || action !== 'read' || !resource.publicRead) return false
    return 'publicReadWhere' in resource ? resource.publicReadWhere() : true
  }

  return hasResourcePermission(req, slug, action, expectedGlobal)
}

export function collectionAccess(slug: string): Record<Action, Access> {
  return {
    create: accessFor(slug, 'create'),
    read: accessFor(slug, 'read'),
    update: accessFor(slug, 'update'),
    delete: accessFor(slug, 'delete'),
  }
}

export function globalAccess(slug: string): Pick<Record<Action, Access>, 'read' | 'update'> {
  return {
    read: accessFor(slug, 'read', true),
    update: accessFor(slug, 'update', true),
  }
}