import path from 'node:path'
import type { CollectionConfig } from 'payload'
import { collectionAccess, hasResourcePermission } from '../access/collectionAccess'
import { clientUserCanRead } from '../access/resources'
import { ALLOWED_FILE_TYPES } from '../lib/applicationRules'

export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: { singular: 'Application', plural: 'Applications' },
  admin: {
    useAsTitle: 'applicantName',
    defaultColumns: ['applicantName', 'applicantEmail', 'jobTitle', 'status', 'createdAt'],
    hidden: ({ user }) => !clientUserCanRead(user, 'applications'),
  },
  defaultSort: '-createdAt',
  access: {
    ...collectionAccess('applications'),
    create: () => false, // only the site's endpoint creates applications
  },
  upload: {
    // Outside /public, so resumes are never served as plain static files.
    staticDir: path.resolve(process.cwd(), 'resumes'),
    mimeTypes: Object.values(ALLOWED_FILE_TYPES),
    filesRequiredOnCreate: false,
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      admin: { position: 'sidebar' },
      options: [
        { label: 'New', value: 'new' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Shortlisted', value: 'shortlisted' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    { name: 'job', type: 'relationship', relationTo: 'jobs', admin: { readOnly: true } },
    { name: 'jobTitle', type: 'text', admin: { readOnly: true } },
    { name: 'applicantName', type: 'text', admin: { readOnly: true } },
    {
      name: 'applicantEmail',
      type: 'text',
      admin: { readOnly: true },
      access: { read: ({ req }) => hasResourcePermission(req, 'applications', 'read') },
    },
    {
      name: 'answers',
      type: 'array',
      admin: { readOnly: true },
      access: { read: ({ req }) => hasResourcePermission(req, 'applications', 'read') },
      fields: [
        { name: 'label', type: 'text', admin: { readOnly: true } },
        { name: 'key', type: 'text', admin: { readOnly: true } },
        { name: 'value', type: 'textarea', admin: { readOnly: true } },
      ],
    },
  ],
}