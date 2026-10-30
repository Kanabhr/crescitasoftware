import { getPayload } from 'payload'
import config from '@payload-config'
import type { PricingPlanSourceDT, PricingPriceRowDT } from '@/types/custom-dt'

export async function getPricingPlans(): Promise<PricingPlanSourceDT[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'plans',
    sort: 'order',
    pagination: false,
    depth: 0,
  })

  return docs.map((doc) => ({
    name: doc.name,
    description: doc.description ?? '',
    popular: Boolean(doc.popular),
    buttonBorder: Boolean(doc.buttonBorder),
    features: ((doc.features ?? []) as { feature: string }[]).map((feature) => feature.feature),
    ctaLink: doc.ctaLink || '/contact-us',
    prices: (doc.prices ?? []) as PricingPriceRowDT[],
  }))
}