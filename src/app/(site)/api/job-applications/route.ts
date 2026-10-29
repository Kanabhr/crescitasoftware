import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getJobForm } from '@/lib/careers'
import { rateLimited } from '@/lib/rateLimit'
import {
  ALLOWED_EXTENSIONS,
  ALLOWED_FILE_TYPES,
  MAX_FILE_BYTES,
  MAX_TEXT_LENGTH,
  MAX_TEXTAREA_LENGTH,
} from '@/lib/applicationRules'

const EMAIL_RE = /^\S+@\S+\.\S+$/

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_FILE_BYTES + 512 * 1024) {
    return NextResponse.json({ error: 'The upload is too large.' }, { status: 413 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field. Bots do.
  // Pretend it worked so the bot learns nothing.
  if (String(form.get('website') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const job = await getJobForm(String(form.get('jobId') ?? ''))
  if (!job) {
    return NextResponse.json({ error: 'This position is no longer open.' }, { status: 404 })
  }

  const fieldErrors: Record<string, string> = {}
  const answers: { key: string; label: string; value: string }[] = []
  let upload: { data: Buffer; mimetype: string; name: string; size: number } | undefined

  // Only the fields defined for this job are read. Anything else is ignored.
  for (const f of job.fields) {
    if (f.type === 'file') {
      const entry = form.get(f.key)
      const file = entry instanceof File && entry.size > 0 ? entry : null
      if (!file) {
        if (f.required) fieldErrors[f.key] = `${f.label} is required`
        continue
      }
      const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        fieldErrors[f.key] = 'Upload a PDF or DOCX file.'
        continue
      }
      if (file.size > MAX_FILE_BYTES) {
        fieldErrors[f.key] = 'File must be 5 MB or smaller.'
        continue
      }
      upload = {
        data: Buffer.from(await file.arrayBuffer()),
        mimetype: ALLOWED_FILE_TYPES[ext],
        name: `${randomUUID()}.${ext}`, // the applicant's own filename is never used
        size: file.size,
      }
      continue
    }

    const raw = form.get(f.key)
    const value = typeof raw === 'string' ? raw.trim() : ''
    if (!value) {
      if (f.required) fieldErrors[f.key] = `${f.label} is required`
      continue
    }
    const max = f.type === 'textarea' ? MAX_TEXTAREA_LENGTH : MAX_TEXT_LENGTH
    if (value.length > max) {
      fieldErrors[f.key] = `Please keep this under ${max} characters.`
      continue
    }
    if (f.type === 'email' && !EMAIL_RE.test(value)) {
      fieldErrors[f.key] = 'Invalid email address'
      continue
    }
    if (f.type === 'select' && !f.options.includes(value)) {
      fieldErrors[f.key] = 'Choose one of the listed options.'
      continue
    }
    answers.push({ key: f.key, label: f.label, value })
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: 'Please check the highlighted fields.', fieldErrors },
      { status: 400 },
    )
  }

  const typeByKey = new Map(job.fields.map((f) => [f.key, f.type]))
  const applicantName = answers.find((a) => a.key === 'name')?.value ?? ''
  const applicantEmail = answers.find((a) => typeByKey.get(a.key) === 'email')?.value ?? ''

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'applications',
      data: {
        job: job.id,
        jobTitle: job.title,
        applicantName,
        applicantEmail,
        status: 'new',
        answers,
      },
      overrideAccess: true,
      ...(upload ? { file: upload } : {}),
    })
  } catch (err) {
    console.error('Application save failed:', err instanceof Error ? err.message : 'unknown error')
    return NextResponse.json(
      { error: 'We could not submit your application. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}