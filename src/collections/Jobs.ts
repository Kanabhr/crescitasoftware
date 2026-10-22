import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

const revalidateCareerPages = () => {
  for (const path of ['/career', '/dark/career', '/career-details', '/dark/career-details']) {
    revalidatePath(path)
  }
  revalidatePath('/career-details/[id]', 'page')
  revalidatePath('/dark/career-details/[id]', 'page')
}

const textList = (name: string, label: string) => ({
  name,
  label,
  type: 'array' as const,
  required: true,
  minRows: 1,
  fields: [{ name: 'item', type: 'text' as const, required: true }],
})

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job', plural: 'Jobs' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'status', 'openRoles'],
  },
  defaultSort: 'id',
  hooks: {
    afterChange: [({ doc }) => { revalidateCareerPages(); return doc }],
    afterDelete: [({ doc }) => { revalidateCareerPages(); return doc }],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'department',
      type: 'text',
      required: true,
      admin: { description: 'Small label above the title (for example Design, Development).' },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'open',
      options: [
        { label: 'Open (shown on the site)', value: 'open' },
        { label: 'Closed (hidden)', value: 'closed' },
      ],
    },
    { name: 'openRoles', type: 'number', required: true, defaultValue: 1, min: 0 },
    { name: 'location', type: 'text', required: true },
    {
      name: 'jobType',
      type: 'text',
      required: true,
      admin: { description: 'For example "Full time (Remote)".' },
    },
    {
      name: 'postedDate',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayOnly', displayFormat: 'dd MMM yyyy' } },
    },
    {
      name: 'deadline',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayOnly', displayFormat: 'dd MMM yyyy' } },
    },
    { name: 'summary', type: 'textarea', required: true },
    textList('keyResponsibilities', 'Key responsibilities'),
    textList('qualifications', 'Qualifications'),
    textList('perks', 'Perks and benefits'),
    { name: 'experience', type: 'text', admin: { description: 'For example "4+ Years Experience".' } },
    { name: 'workingHours', type: 'text', admin: { description: 'For example "08 AM to 05 PM".' } },
    { name: 'jobCategory', type: 'text' },
    { name: 'workingDays', type: 'text' },
    { name: 'salaryMin', type: 'number', min: 0 },
    { name: 'salaryMax', type: 'number', min: 0 },
    {
      name: 'salaryCurrency',
      type: 'select',
      defaultValue: 'USD',
      options: ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CAD', 'AUD', 'SGD'],
    },
    {
      name: 'salaryPeriod',
      type: 'select',
      defaultValue: 'yearly',
      options: [
        { label: 'Yearly', value: 'yearly' },
        { label: 'Monthly', value: 'monthly' },
      ],
    },
  ],
}