import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '../access/collectionAccess'
import {
  clientUserIsSuperAdmin,
  isGlobalResource,
  roleResourceOptions,
} from '../access/resources'
import { hasOtherActiveSuperAdmin, throwAccessError } from '../access/roleSafety'
import { slugify } from '../lib/slugify'

const ADMIN_ROLE_SLUG = 'admin'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: { singular: 'Role', plural: 'Roles' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'isSuperAdmin'],
    hidden: ({ user }) => !clientUserIsSuperAdmin(user),
  },
  access: {
    create: async ({ req }) => isSuperAdmin(req),
    read: async ({ req }) => isSuperAdmin(req),
    update: async ({ req }) => isSuperAdmin(req),
    delete: async ({ req }) => isSuperAdmin(req),
  },
  hooks: {
    beforeValidate: [
      ({ data, originalDoc }) => {
        const incomingSlug = typeof data?.slug === 'string' ? data.slug.trim() : ''
        if (incomingSlug) return { ...data, slug: incomingSlug }
        if (originalDoc
          && !Object.prototype.hasOwnProperty.call(data, 'slug')
          && data?.name === undefined) {
          return data
        }
        const name = data?.name ?? originalDoc?.name ?? ''
        return { ...data, slug: slugify(String(name)) }
      },
    ],
    beforeChange: [
      async ({ data, originalDoc, req, operation }) => {
        if (operation === 'update' && originalDoc) {
          if (originalDoc.isSuperAdmin
            && Object.prototype.hasOwnProperty.call(data, 'isSuperAdmin')
            && data.isSuperAdmin === false
            && !(await hasOtherActiveSuperAdmin(req, undefined, originalDoc.id))) {
            throwAccessError('At least one active super admin must remain.')
          }

          const repairingAdminFlag = originalDoc.slug === ADMIN_ROLE_SLUG
            && !originalDoc.isSuperAdmin
            && data.isSuperAdmin === true
          if (Object.prototype.hasOwnProperty.call(data, 'isSuperAdmin')
            && data.isSuperAdmin !== originalDoc.isSuperAdmin
            && !repairingAdminFlag) {
            throwAccessError('A role super-admin flag cannot be changed after creation.')
          }
          if (originalDoc.slug === ADMIN_ROLE_SLUG
            && Object.prototype.hasOwnProperty.call(data, 'slug')
            && data.slug !== ADMIN_ROLE_SLUG) {
            throwAccessError('The built-in Admin role slug cannot be changed.')
          }
        }

        const permissions = data.permissions
        if (permissions !== undefined && permissions !== null) {
          if (!Array.isArray(permissions)) {
            throwAccessError('Role permissions must be a list.')
          }
          const seen = new Set<string>()
          for (const permission of permissions as {
            resource?: unknown
            create?: boolean
            read?: boolean
            update?: boolean
            delete?: boolean
          }[]) {
            const resource = permission.resource
            if (typeof resource !== 'string'
              || !roleResourceOptions.some((option) => option.value === resource)) {
              throwAccessError('Role permissions contain an unconfigurable resource.')
            }
            if (seen.has(resource)) throwAccessError('Each role can list a resource only once.')
            seen.add(resource)
            if (isGlobalResource(resource) && (permission.create || permission.delete)) {
              throwAccessError('Global permissions support read and update only.')
            }
          }
        }
        return data
      },
    ],
    beforeDelete: [
      async ({ id, req }) => {
        const { docs } = await req.payload.find({
          collection: 'roles',
          where: { id: { equals: id } },
          limit: 1,
          depth: 0,
          overrideAccess: true,
          req,
        })
        const role = docs[0] as { slug?: string; isSuperAdmin?: boolean } | undefined
        if (role?.slug === ADMIN_ROLE_SLUG) {
          throwAccessError('The built-in Admin role cannot be deleted.')
        }
        if (role?.isSuperAdmin && !(await hasOtherActiveSuperAdmin(req, undefined, id))) {
          throwAccessError('At least one active super admin must remain.')
        }
      },
    ],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    { name: 'description', type: 'textarea' },
    {
      name: 'isSuperAdmin',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        condition: (_data, _siblingData, { operation }) => operation === 'create',
      },
    },
    {
      name: 'permissions',
      type: 'array',
      fields: [
        {
          name: 'resource',
          type: 'select',
          required: true,
          options: roleResourceOptions,
        },
        {
          name: 'create',
          type: 'checkbox',
          defaultValue: false,
          admin: { condition: (_data, siblingData) => !isGlobalResource(siblingData?.resource) },
        },
        { name: 'read', type: 'checkbox', defaultValue: false },
        { name: 'update', type: 'checkbox', defaultValue: false },
        {
          name: 'delete',
          type: 'checkbox',
          defaultValue: false,
          admin: { condition: (_data, siblingData) => !isGlobalResource(siblingData?.resource) },
        },
      ],
    },
  ],
}
