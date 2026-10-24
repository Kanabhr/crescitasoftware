import { NextResponse, type NextRequest } from 'next/server'
import { isSupportedCountry, SUPPORTED_COUNTRIES } from './lib/currency'

const supportedCountrySet = new Set<string>(SUPPORTED_COUNTRIES)

export function getCountry(headers: Headers): string | undefined {
  const vercelCountry = headers.get('x-vercel-ip-country')?.toUpperCase()
  if (vercelCountry && supportedCountrySet.has(vercelCountry)) return vercelCountry

  const cloudflareCountry = headers.get('cf-ipcountry')?.toUpperCase()
  if (cloudflareCountry && supportedCountrySet.has(cloudflareCountry)) return cloudflareCountry

  return undefined
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.has('geo_country')) {
    const override = process.env.NODE_ENV !== 'production'
      ? request.nextUrl.searchParams.get('country')?.toUpperCase()
      : undefined
    const country = override && isSupportedCountry(override)
      ? override
      : getCountry(request.headers)

    if (country) {
      response.cookies.set('geo_country', country, {
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    }
  }

  return response
}

export const config = {
  matcher: ['/pricing', '/service', '/dark/pricing', '/dark/service'],
}
