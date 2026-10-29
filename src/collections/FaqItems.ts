import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'

// Every route that renders FAQ content. Extra paths are harmless.
const FAQ_PATHS = [
  '/', '/digital-studio', '/faq', '/pricing', '/portfolio-2',
  '/dark', '/dark/digital-studio', '/dark/faq', '/dark/pricing', '/dark/portfolio-2',
]

const revalidateFaqPages = () => {
  for (const path of FAQ_PATHS) revalidatePath(path)
}

export const FaqItems: CollectionConfig = {
  slug: 'faq-items',
  labels: { singular: 'FAQ item', plural: 'FAQ items' },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'placement', 'order', 'defaultOpen'],
    hidden: ({ user }) => !clientUserCanRead(user, 'faq-items'),
  },
  access: collectionAccess('faq-items'),
  defaultSort: 'order',
  hooks: {
    afterChange: [({ doc }) => { revalidateFaqPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateFaqPages(); return doc }],
  },
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'textarea', required: true },
    {
      name: 'placement',
      type: 'select',
      required: true,
      defaultValue: 'general',
      options: [
        { label: 'FAQ page, Pricing and Portfolio 2', value: 'general' },
        { label: 'Digital Studio home page', value: 'digital-studio' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: { description: 'Lower numbers appear first.' },
    },
    { name: 'defaultOpen', type: 'checkbox', defaultValue: false },
  ],
}