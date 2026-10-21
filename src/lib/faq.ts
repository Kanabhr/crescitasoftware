import { getPayload } from 'payload'
import config from '@payload-config'
import type { FaqItemDt } from '@/types/custom-dt'

async function fetchFaq(placement: 'general' | 'digital-studio') {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'faq-items',
    where: { placement: { equals: placement } },
    sort: 'order',
    pagination: false,
    depth: 0,
  })
  return docs
}

// DOM ids must not start with a digit, or Bootstrap's data-bs-target selector breaks.
export async function getGeneralFaq(): Promise<FaqItemDt[]> {
  const docs = await fetchFaq('general')
  return docs.map((d) => ({
    id: `item${d.id}`,
    title: d.question,
    content: d.answer,
    active: Boolean(d.defaultOpen),
  }))
}

export async function getDigitalStudioFaq(): Promise<FaqItemDt[]> {
  const docs = await fetchFaq('digital-studio')
  return docs.map((d) => ({
    id: `dsFaq${d.id}`,
    question: d.question,
    answer: d.answer,
    isOpen: Boolean(d.defaultOpen),
  }))
}