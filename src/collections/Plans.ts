import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { SUPPORTED_CURRENCIES } from '../lib/currency'

const PRICING_PATHS = ['/pricing', '/service', '/dark/pricing', '/dark/service']

const revalidatePricingPages = () => {
  for (const path of PRICING_PATHS) revalidatePath(path)
}

export const Plans: CollectionConfig = {
  slug: 'plans',
  labels: { singular: 'Plan', plural: 'Plans' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'popular'],
    hidden: ({ user }) => !clientUserCanRead(user, 'plans'),
  },
  access: collectionAccess('plans'),
  defaultSort: 'order',
  hooks: {
    afterChange: [({ doc }) => { revalidatePricingPages(); return doc }],
    afterDelete: [({ doc }) => { revalidatePricingPages(); return doc }],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: { description: 'Lower numbers appear first.' },
    },
    { name: 'popular', type: 'checkbox', defaultValue: false },
    {
      name: 'buttonBorder',
      type: 'checkbox',
      defaultValue: false,
      label: 'Solid (highlighted) button',
      admin: { description: 'Checked = solid button. Unchecked = outlined button.' },
    },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact-us', label: 'Button link' },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'feature', type: 'text', required: true }],
    },
    {
      name: 'prices',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'One row per currency and billing cycle. Add a row for each new currency or country.',
      },
      fields: [
        {
          name: 'currency',
          type: 'select',
          required: true,
          defaultValue: 'USD',
          options: [...SUPPORTED_CURRENCIES],
        },
        {
          name: 'countries',
          type: 'text',
          hasMany: true,
          admin: { description: 'Optional ISO country codes (for example US, IN). Used by the later currency-detection task.' },
        },
        {
          name: 'billingCycle',
          type: 'select',
          required: true,
          defaultValue: 'monthly',
          options: [
            { label: 'Monthly', value: 'monthly' },
            { label: 'Yearly', value: 'yearly' },
          ],
        },
        { name: 'amount', type: 'number', required: true, min: 0 },
        {
          name: 'label',
          type: 'text',
          admin: { description: 'Optional. Shown instead of the formatted amount (for example "Free").' },
        },
        {
          name: 'periodLabel',
          type: 'text',
          admin: { description: 'Optional. Text after the price. Leave empty for "/monthly" or "/Yearly".' },
        },
      ],
    },
  ],
}