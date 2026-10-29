import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { collectionAccess } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { DEFAULT_FORM_FIELDS } from '../lib/defaultFormFields'
import { seoFields } from '../lib/seoFields'
const revalidateCareerPages = () => {
  for (const path of ['/career', '/dark/career', '/career-details', '/dark/career-details']) {
    revalidatePath(path)
  }
  revalidatePath('/career-details/[id]', 'page')
  revalidatePath('/dark/career-details/[id]', 'page')
  revalidatePath('/sitemap.xml')
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
    hidden: ({ user }) => !clientUserCanRead(user, 'jobs'),
  },
  access: collectionAccess('jobs'),
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
        {
      name: 'formFields',
      label: 'Application form fields',
      type: 'array',
      defaultValue: DEFAULT_FORM_FIELDS,
      admin: {
        description:
          'The fields applicants fill in for this job. Drag to reorder, add, remove or edit.',
      },
          validate: (value: unknown) => {
        if (!Array.isArray(value)) return true
        const rows = value as { key?: string; type?: string }[]
        const keys = rows.map((r) => r.key)
        if (new Set(keys).size !== keys.length) return 'Each field needs a unique key.'
        if (keys.some((k) => k === 'website' || k === 'jobId')) {
          return '"website" and "jobId" are reserved keys. Pick another.'
        }
        if (rows.filter((r) => r.type === 'file').length > 1) {
          return 'Only one file upload field is supported per job.'
        }
        return true
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'key',
          type: 'text',
          required: true,
          admin: {
            description:
              'Short id used to store the answer, for example "portfolio". Letters, numbers and underscores only.',
          },
          validate: (value: string | null | undefined) =>
            /^[a-zA-Z][a-zA-Z0-9_]*$/.test(value ?? '')
              ? true
              : 'Use letters, numbers and underscores only, starting with a letter.',
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'text',
          options: [
            { label: 'Short text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Long text', value: 'textarea' },
            { label: 'Dropdown', value: 'select' },
            { label: 'File upload', value: 'file' },
          ],
        },
        {
          name: 'width',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'Full width', value: 'full' },
            { label: 'Half width', value: 'half' },
          ],
        },
        { name: 'required', type: 'checkbox', defaultValue: false },
        {
          name: 'options',
          type: 'array',
          admin: {
            description: 'Choices shown in the dropdown.',
            condition: (_, siblingData) => siblingData?.type === 'select',
          },
          fields: [{ name: 'option', type: 'text', required: true }],
        },
      ],
    },
    seoFields,
  ],
}