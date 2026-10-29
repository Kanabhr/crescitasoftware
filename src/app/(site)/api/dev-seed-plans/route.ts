import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isSuperAdminUser } from '@/access/routeAuth'
import { monthlyPlans, yearlyPlans } from '@/data/pricing-data'

const toAmount = (price: string) => parseFloat(price.replace(/[^0-9.]/g, '')) || 0

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

  const existing = await payload.count({ collection: 'plans' })
  if (existing.totalDocs > 0) {
    return NextResponse.json({ message: 'Already seeded', count: existing.totalDocs })
  }

  for (const [i, monthly] of monthlyPlans.entries()) {
    const yearly = yearlyPlans.find((p) => p.name === monthly.name)
    await payload.create({
      collection: 'plans',
      data: {
        name: monthly.name,
        description: monthly.description,
        order: i,
        popular: Boolean(monthly.popular),
        buttonBorder: monthly.buttonBorder,
        ctaLink: '/contact-us',
        features: monthly.features.map((feature) => ({ feature })),
        prices: [
          {
            currency: 'USD',
            billingCycle: 'monthly',
            amount: toAmount(monthly.price),
            periodLabel: monthly.period,
          },
          ...(yearly
            ? [{
                currency: 'USD',
                billingCycle: 'yearly',
                amount: toAmount(yearly.price),
                periodLabel: yearly.period,
              }]
            : []),
        ],
      },
    })
  }
  return NextResponse.json({ created: monthlyPlans.length })
}
