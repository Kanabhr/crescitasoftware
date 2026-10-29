import type { Payload } from 'payload'

type RouteUser = {
  role?: number | string | { id?: number | string } | null
}

export async function isSuperAdminUser(payload: Payload, user: unknown): Promise<boolean> {
  if (!user || typeof user !== 'object') return false
  const relation = (user as RouteUser).role
  const roleID = relation && typeof relation === 'object' ? relation.id : relation
  if (roleID === undefined || roleID === null || roleID === '') return false

  const { docs } = await payload.find({
    collection: 'roles',
    where: { id: { equals: roleID } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  return (docs[0] as { isSuperAdmin?: boolean } | undefined)?.isSuperAdmin === true
}
