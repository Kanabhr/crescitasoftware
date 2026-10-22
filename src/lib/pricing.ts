import { getPayload } from 'payload'
import config from '@payload-config'
import type { PricingPlanDT } from '@/types/custom-dt'

// Change this when the currency-detection task arrives.
export const DEFAULT_CURRENCY = 'USD'

// Number grouping per currency (INR uses lakh grouping: 1,00,000).
const LOCALES: Record<string, string> = { INR: 'en-IN' }

type PriceRow = {
  currency: string
  billingCycle: 'monthly' | 'yearly'
  amount?: number | null
  label?: string | null
  periodLabel?: string | null
}

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat(LOCALES[currency] ?? 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

export async function getPricingPlans(currency: string = DEFAULT_CURRENCY) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'plans',
    sort: 'order',
    pagination: false,
    depth: 0,
  })

  const build = (cycle: 'monthly' | 'yearly'): PricingPlanDT[] =>
    docs.flatMap((doc) => {
      const rows = (doc.prices ?? []) as PriceRow[]
      // Prefer the default currency; otherwise use any row for this cycle.
      const price =
        rows.find((p) => p.currency === currency && p.billingCycle === cycle) ??
        rows.find((p) => p.billingCycle === cycle)
      if (!price) {
        console.warn(`[pricing] "${doc.name}" skipped: no ${cycle} price row at all`)
        return []
      }
      return [{
        name: doc.name,
        description: doc.description ?? '',
        price: price.label || formatAmount(price.amount ?? 0, price.currency),
        period: price.periodLabel || (cycle === 'monthly' ? '/monthly' : '/Yearly'),
        popular: Boolean(doc.popular),
        buttonBorder: Boolean(doc.buttonBorder),
        features: ((doc.features ?? []) as { feature: string }[]).map((f) => f.feature),
        ctaLink: doc.ctaLink || '/contact-us',
      }]
    })

  return { monthly: build('monthly'), yearly: build('yearly') }
}