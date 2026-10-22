import { getPayload } from 'payload'
import config from '@payload-config'
import type { CareerDT } from '@/types/career-dt'
import { CalenderIcon, ClockIcon, EditIcon, ExperienceIcon } from '@/svg/BenefitIcons'

type JobDoc = {
  id: number
  title: string
  department: string
  openRoles?: number | null
  location: string
  jobType: string
  postedDate: string
  deadline?: string | null
  summary: string
  keyResponsibilities?: { item: string }[] | null
  qualifications?: { item: string }[] | null
  perks?: { item: string }[] | null
  experience?: string | null
  workingHours?: string | null
  jobCategory?: string | null
  workingDays?: string | null
  salaryMin?: number | null
  salaryMax?: number | null
  salaryCurrency?: string | null
  salaryPeriod?: 'yearly' | 'monthly' | null
}

const LOCALES: Record<string, string> = { INR: 'en-IN' }

const fmtDate = (iso?: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC',
      })
    : ''

const money = (n: number, currency: string) =>
  new Intl.NumberFormat(LOCALES[currency] ?? 'en-US', {
    style: 'currency',
    currency,
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(n)

function formatSalary(doc: JobDoc) {
  const cur = doc.salaryCurrency || 'USD'
  const { salaryMin: min, salaryMax: max } = doc
  const period = doc.salaryPeriod === 'monthly' ? 'Monthly' : 'Yearly'
  if (min && max) return `${money(min, cur)} - ${money(max, cur)} (${period})`
  if (min) return `${money(min, cur)}+ (${period})`
  if (max) return `Up to ${money(max, cur)} (${period})`
  return ''
}

const toList = (rows?: { item: string }[] | null) => (rows ?? []).map((r) => r.item)

function toCareer(d: unknown): CareerDT {
  const doc = d as JobDoc
  const n = doc.openRoles ?? 0
  return {
    id: doc.id,
    topInfo: {
      subtitle: doc.department,
      title: doc.title,
      info: [
        { label: 'Location', value: doc.location },
        { label: 'Date', value: fmtDate(doc.postedDate) },
        { label: 'Job Type', value: doc.jobType },
      ],
    },
    summary: doc.summary,
    keyResponsibilities: toList(doc.keyResponsibilities),
    qualifications: toList(doc.qualifications),
    perks: toList(doc.perks),
    sidebar: [
      { icon: ExperienceIcon, label: 'Experience', value: doc.experience ?? '' },
      { icon: ClockIcon, label: 'Working Hours', value: doc.workingHours ?? '' },
      { icon: EditIcon, label: 'Job Category', value: doc.jobCategory ?? '' },
      { icon: CalenderIcon, label: 'Working Days', value: doc.workingDays ?? '' },
      { icon: ClockIcon, label: 'Deadline', value: fmtDate(doc.deadline) },
    ].filter((s) => s.value),
    salary: formatSalary(doc),
    // Step 2 will change this to /job-application-form/<id>.
    applyLink: '/job-application-form',
    roles: `${String(n).padStart(2, '0')} Open Role${n === 1 ? '' : 's'}`,
  }
}

export async function getJobs(): Promise<CareerDT[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'jobs',
    where: { status: { equals: 'open' } },
    sort: 'id',
    pagination: false,
    depth: 0,
  })
  return docs.map(toCareer)
}

export async function getJobById(id?: number | string): Promise<CareerDT | null> {
  const numericId = Number(id)
  if (!Number.isInteger(numericId)) return null
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'jobs',
    where: { and: [{ id: { equals: numericId } }, { status: { equals: 'open' } }] },
    limit: 1,
    depth: 0,
  })
  return docs[0] ? toCareer(docs[0]) : null
}

export async function getFirstOpenJobId(): Promise<number | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'jobs',
    where: { status: { equals: 'open' } },
    sort: 'id',
    limit: 1,
    depth: 0,
  })
  return docs[0] ? (docs[0] as unknown as JobDoc).id : null
}