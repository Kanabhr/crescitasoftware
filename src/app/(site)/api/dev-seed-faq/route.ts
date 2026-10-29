import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'
import { faqItems, digitalStudioFaq } from '@/data/faq-data'

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

  const existing = await payload.count({ collection: 'faq-items' })
  if (existing.totalDocs > 0) {
    return NextResponse.json({ message: 'Already seeded', count: existing.totalDocs })
  }

  for (const [i, item] of faqItems.entries()) {
    await payload.create({
      collection: 'faq-items',
      data: {
        question: item.title ?? '',
        answer: item.content ?? '',
        placement: 'general',
        order: i,
        defaultOpen: Boolean(item.active),
      },
    })
  }
  for (const [i, item] of digitalStudioFaq.entries()) {
    await payload.create({
      collection: 'faq-items',
      data: {
        question: item.question ?? '',
        answer: item.answer ?? '',
        placement: 'digital-studio',
        order: i,
        defaultOpen: Boolean(item.isOpen),
      },
    })
  }
  return NextResponse.json({ created: faqItems.length + digitalStudioFaq.length })
}