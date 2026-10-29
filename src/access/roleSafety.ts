import { APIError, type PayloadRequest, type Where } from 'payload'

export type RoleReference = number | string | { id?: number | string } | null | undefined

export function relationID(value: RoleReference): number | string | null {
  if (typeof value === 'number') return value
  if (typeof value === 'string') return value.length > 0 ? value : null
  if (value && (typeof value.id === 'number' || typeof value.id === 'string')) return value.id
  return null
}

export async function isSuperAdminRole(req: PayloadRequest, roleID: RoleReference): Promise<boolean> {
  const id = relationID(roleID)
  if (id === null) return false
  const { docs } = await req.payload.find({
    collection: 'roles',
    where: { id: { equals: id } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
    req,
  })
  return (docs[0] as { isSuperAdmin?: boolean } | undefined)?.isSuperAdmin === true
}

export async function hasOtherActiveSuperAdmin(
  req: PayloadRequest,
  excludedUserID?: number | string,
  excludedRoleID?: number | string,
): Promise<boolean> {
  const { docs: superAdminRoles } = await req.payload.find({
    collection: 'roles',
    where: { isSuperAdmin: { equals: true } },
    pagination: false,
    depth: 0,
    overrideAccess: true,
    req,
  })
  const roleIDs = superAdminRoles
    .map((role) => (role as { id: number | string }).id)
    .filter((id) => excludedRoleID === undefined || String(id) !== String(excludedRoleID))

  if (roleIDs.length === 0) return false

  const conditions: Where[] = [{ role: { in: roleIDs } }]
  if (excludedUserID !== undefined) conditions.push({ id: { not_equals: excludedUserID } })
  const { docs: users } = await req.payload.find({
    collection: 'users',
    where: { and: conditions },
    limit: 1,
    depth: 0,
    overrideAccess: true,
    req,
    select: { id: true },
  })
  return users.length > 0
}

export function throwAccessError(message: string): never {
  throw new APIError(message, 403)
}
