import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'

const revalidateBlogDetailsPages = () => {
  revalidatePath('/blog-details')
  revalidatePath('/dark/blog-details')
  revalidatePath('/blog-details/[id]', 'page')
  revalidatePath('/dark/blog-details/[id]', 'page')
}

export const Authors: CollectionConfig = {
  slug: 'authors',
  labels: { singular: 'Author', plural: 'Authors' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'photo'],
    hidden: ({ user }) => !clientUserCanRead(user, 'authors'),
  },
  access: collectionAccess('authors'),
  hooks: {
    afterChange: [({ doc }) => { revalidateBlogDetailsPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateBlogDetailsPages(); return doc }],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'bio', type: 'textarea' },
    { name: 'photo', type: 'relationship', relationTo: 'media' },
  ],
}