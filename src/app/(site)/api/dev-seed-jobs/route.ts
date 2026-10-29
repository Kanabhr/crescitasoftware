import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'
import { careerData } from '@/data/career-data'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// "03 Feb 2025" -> ISO at 12:00 UTC (avoids timezone day shifts)
function parseDate(s?: string) {
  if (!s) return undefined
  const [d, m, y] = s.split(' ')
  const month = MONTHS.indexOf(m)
  if (month < 0 || !d || !y) return undefined
  return new Date(Date.UTC(Number(y), month, Number(d), 12)).toISOString()
}

export async function GET(request: Request) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Disabled' }, { status: 404 })
  }
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })
  if (!user) {
    return NextResponse.json({ error: 'Log in at /admin first' }, { status: 401 })
  }
  if (!(await isSuperAdminUser(payload, user))) {
    return NextResponse.json({ error: 'Super admin access required' }, { status: 403 })
  }

  const existing = await payload.count({ collection: 'jobs' })
  if (existing.totalDocs > 0) {
    return NextResponse.json({ message: 'Already seeded', count: existing.totalDocs })
  }

  for (const job of careerData) {
    const info = (label: string) => job.topInfo.info.find((i) => i.label === label)?.value
    const side = (label: string) => job.sidebar.find((s) => s.label === label)?.value
    const salary = job.salary.match(/\$(\d+)k\s*-\s*(\d+)k\s*\((\w+)\)/i)
    const list = (arr: string[]) => arr.map((item) => ({ item }))

    await payload.create({
      collection: 'jobs',
      data: {
        title: job.topInfo.title,
        department: job.topInfo.subtitle,
        status: 'open',
        openRoles: parseInt(job.roles, 10) || 1,
        location: info('Location') ?? '',
        jobType: info('Job Type') ?? '',
        postedDate: parseDate(info('Date')) ?? new Date().toISOString(),
        deadline: parseDate(side('Deadline')),
        summary: job.summary.replace(/\s*\n\s*/g, ' ').trim(),
        keyResponsibilities: list(job.keyResponsibilities),
        qualifications: list(job.qualifications),
        perks: list(job.perks),
        experience: side('Experience'),
        workingHours: side('Working Hours'),
        jobCategory: side('Job Category'),
        workingDays: side('Working Days'),
        salaryMin: salary ? Number(salary[1]) * 1000 : undefined,
        salaryMax: salary ? Number(salary[2]) * 1000 : undefined,
        salaryCurrency: 'USD',
        salaryPeriod: salary?.[3]?.toLowerCase() === 'monthly' ? 'monthly' : 'yearly',
      },
    })
  }
  return NextResponse.json({ created: careerData.length })
}