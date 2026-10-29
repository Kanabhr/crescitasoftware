import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'
import { DEFAULT_FORM_FIELDS } from '@/lib/defaultFormFields'

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

  const { docs } = await payload.find({
    collection: 'jobs',
    pagination: false,
    depth: 0,
  })

  let updated = 0
  for (const job of docs) {
    const rows = (job as { formFields?: unknown[] | null }).formFields
    if (rows && rows.length > 0) continue
    await payload.update({
      collection: 'jobs',
      id: job.id,
      data: { formFields: DEFAULT_FORM_FIELDS },
    })
    updated++
  }
  return NextResponse.json({ updated, total: docs.length })
}