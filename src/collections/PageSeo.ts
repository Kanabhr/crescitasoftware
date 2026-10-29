import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { seoFields } from '../lib/seoFields'

function revalidateSeoPath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const darkPath = normalizedPath === '/' ? '/dark' : `/dark${normalizedPath}`

  revalidatePath(normalizedPath)
  revalidatePath(darkPath)
  revalidatePath('/sitemap.xml')
}

export const PageSeo: CollectionConfig = {
  slug: 'page-seo',
  labels: { singular: 'Page SEO', plural: 'Page SEO' },
  admin: {
    useAsTitle: 'path',
    defaultColumns: ['path', 'seo.metaTitle', 'seo.noIndex'],
    hidden: ({ user }) => !clientUserCanRead(user, 'page-seo'),
  },
  access: collectionAccess('page-seo'),
  hooks: {
    afterChange: [({ doc, previousDoc }) => {
      revalidateSeoPath(doc.path)
      if (previousDoc?.path && previousDoc.path !== doc.path) revalidateSeoPath(previousDoc.path)
      return doc
    }],
    afterDelete: [({ doc }) => { revalidateSeoPath(doc.path); return doc }],
  },
  fields: [
    {
      name: 'path',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Canonical light-mode route path, for example /about-us.' },
      validate: (value: string | null | undefined) =>
        value?.startsWith('/') && !value.startsWith('/dark/')
          ? true
          : 'Enter a light-mode path beginning with /.',
    },
    seoFields,
  ],
}
