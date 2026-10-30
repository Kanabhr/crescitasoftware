import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { hasResourcePermission } from '../access/collectionAccess'

const revalidateBlogDetailsPages = () => {
  revalidatePath('/blog-details')
  revalidatePath('/dark/blog-details')
  revalidatePath('/blog-details/[id]', 'page')
  revalidatePath('/dark/blog-details/[id]', 'page')
}

export const Comments: CollectionConfig = {
  slug: 'blog-comments',
  labels: { singular: 'Comment', plural: 'Comments' },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'post', 'status', 'createdAt'],
    hidden: ({ user }) => !clientUserCanRead(user, 'blog-comments'),
  },
  defaultSort: '-createdAt',
  access: collectionAccess('blog-comments'),
  hooks: {
    afterChange: [({ doc }) => { revalidateBlogDetailsPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateBlogDetailsPages(); return doc }],
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      admin: { position: 'sidebar' },
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Spam', value: 'spam' },
      ],
    },
    {
      name: 'authorEmail',
      type: 'text',
      required: true,
      admin: { readOnly: true },
      access: { read: ({ req }) => hasResourcePermission(req, 'blog-comments', 'read') },
    },
    { name: 'post', type: 'relationship', relationTo: 'posts', admin: { readOnly: true } },
    { name: 'authorName', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'body', type: 'textarea', required: true, admin: { readOnly: true } },
    { name: 'parent', type: 'relationship', relationTo: 'blog-comments', admin: { readOnly: true } },
  ],
}
