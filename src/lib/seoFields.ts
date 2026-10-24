import type { Field } from 'payload'

export const seoFields: Field = {
  name: 'seo',
  label: 'SEO',
  type: 'group',
  fields: [
    { name: 'metaTitle', type: 'text', admin: { description: 'Around 50 to 60 characters.' } },
    { name: 'metaDescription', type: 'textarea', admin: { description: 'Around 150 to 160 characters.' } },
    { name: 'shareImage', type: 'upload', relationTo: 'media' },
    { name: 'canonicalUrl', type: 'text' },
    { name: 'noIndex', type: 'checkbox', defaultValue: false },
  ],
}
