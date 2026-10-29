import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { seoFields } from '../lib/seoFields'
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
  revalidatePath('/sitemap.xml')
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Posts' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', '_status'],
    hidden: ({ user }) => !clientUserCanRead(user, 'posts'),
  },
  defaultSort: '-publishedAt',
  access: collectionAccess('posts'),
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [({ doc }) => { revalidateBlogPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateBlogPages(); return doc }],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [({ data, originalDoc }) => {
          const incoming = (data?.slug as string | undefined)?.trim()
          if (incoming) return incoming
          const title = (data?.title ?? (originalDoc as { title?: string })?.title ?? '') as string
          return slugify(title)
        }],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: { description: 'Short summary shown on listing pages.' },
    },
    { name: 'coverImage', type: 'upload', relationTo: 'media', required: true },
    { name: 'body', type: 'richText' },
    { name: 'author', type: 'relationship', relationTo: 'authors' },
    { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd MMM yyyy HH:mm' } },
    },
    // Extra fields to keep the blog-standard page identical to the original design.
    {
      name: 'mediaType',
      type: 'select',
      defaultValue: 'image',
      admin: { description: 'Controls how the post media is displayed on the blog-standard page.' },
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
        { label: 'Gallery', value: 'gallery' },
      ],
    },
    { name: 'videoUrl', type: 'text', admin: { description: 'YouTube video ID or full URL (e.g. https://youtu.be/dQw4w9WgXcQ or https://www.youtube.com/watch?v=dQw4w9WgXcQ). A full URL will be converted to just the ID automatically.' } },
    {
      name: 'gallery',
      type: 'array',
      admin: { description: 'Images for gallery posts (blog-standard slider).' },
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
    seoFields,
  ],
}
