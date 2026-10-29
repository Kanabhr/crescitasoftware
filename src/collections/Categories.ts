import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { slugify } from '../lib/slugify'

const BLOG_PATHS = [
  '/blog', '/dark/blog',
  '/blog-list', '/dark/blog-list',
  '/blog-grid-with-sidebar', '/dark/blog-grid-with-sidebar',
  '/blog-standard', '/dark/blog-standard',
  '/blog-details', '/dark/blog-details',
]

const revalidateBlogPages = () => {
  for (const path of BLOG_PATHS) revalidatePath(path)
  revalidatePath('/blog-details/[id]', 'page')
  revalidatePath('/dark/blog-details/[id]', 'page')
}

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Category', plural: 'Categories' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
    hidden: ({ user }) => !clientUserCanRead(user, 'categories'),
  },
  access: collectionAccess('categories'),
  hooks: {
    afterChange: [({ doc }) => { revalidateBlogPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateBlogPages(); return doc }],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [({ data, originalDoc }) => {
          const incoming = (data?.slug as string | undefined)?.trim()
          if (incoming) return incoming
          const title = (data?.name ?? (originalDoc as { name?: string })?.name ?? '') as string
          return slugify(title)
        }],
      },
    },
  ],
}
