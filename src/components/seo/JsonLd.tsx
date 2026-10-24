import {
  buildBreadcrumbList,
  buildOrganizationAndWebsiteData,
} from '@/lib/structuredData'

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

export function BreadcrumbJsonLd({ path }: { path: string }) {
  return <JsonLd data={buildBreadcrumbList(path)} />
}

export function OrganizationAndWebsiteJsonLd() {
  return (
    <>
      {buildOrganizationAndWebsiteData().map((data) => (
        <JsonLd key={String(data['@type'])} data={data} />
      ))}
    </>
  )
}
