import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { hidden: ({ user }) => !clientUserCanRead(user, 'media') },
  access: collectionAccess('media'),
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
