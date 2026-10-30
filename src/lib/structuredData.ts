import type { BlogPostDt } from '@/types/custom-dt'

const siteName = 'Cunnet'
const defaultSiteUrl = 'http://localhost:3000'

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!configuredUrl && process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_SITE_URL must be configured in production.')
  }
  return new URL(configuredUrl || defaultSiteUrl)
}

export function absoluteSiteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString()
}

export function buildBreadcrumbList(path: string) {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs = [{ name: 'Home', path: '/' }]

  segments.forEach((segment, index) => {
    breadcrumbs.push({
      name: segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      path: `/${segments.slice(0, index + 1).join('/')}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path),
    })),
  }
}

export function buildOrganizationAndWebsiteData() {
  const url = getSiteUrl().toString()
  return [
    { '@context': 'https://schema.org', '@type': 'Organization', name: siteName, url },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: siteName, url },
  ]
}

export function buildFaqPageData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function buildArticleData(post: BlogPostDt, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.image ? { image: absoluteSiteUrl(post.image) } : {}),
    ...(post.authorName
      ? { author: { '@type': 'Person', name: post.authorName } }
      : {}),
    url: absoluteSiteUrl(path),
  }
}

export type JobPostingData = {
  id: number
  title: string
  summary: string
  postedDate: string
  deadline?: string | null
  jobType: string
  location: string
  salaryMin?: number | null
  salaryMax?: number | null
  salaryCurrency?: string | null
  salaryPeriod?: 'yearly' | 'monthly' | null
}

function employmentType(jobType: string) {
  const type = jobType.toLowerCase()
  if (type.includes('part')) return 'PART_TIME'
  if (type.includes('contract') || type.includes('freelance')) return 'CONTRACTOR'
  if (type.includes('temporary')) return 'TEMPORARY'
  if (type.includes('intern')) return 'INTERN'
  return 'FULL_TIME'
}

export function buildJobPostingData(job: JobPostingData, path: string) {
  const salary =
    job.salaryMin != null || job.salaryMax != null
      ? {
          '@type': 'MonetaryAmount',
          currency: job.salaryCurrency || 'USD',
          value: {
            '@type': 'QuantitativeValue',
            ...(job.salaryMin != null ? { minValue: job.salaryMin } : {}),
            ...(job.salaryMax != null ? { maxValue: job.salaryMax } : {}),
            unitText: job.salaryPeriod === 'monthly' ? 'MONTH' : 'YEAR',
          },
        }
      : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary,
    datePosted: job.postedDate,
    ...(job.deadline ? { validThrough: job.deadline } : {}),
    employmentType: employmentType(job.jobType),
    hiringOrganization: {
      '@type': 'Organization',
      name: siteName,
      sameAs: getSiteUrl().toString(),
    },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: job.location },
    },
    ...(salary ? { baseSalary: salary } : {}),
    directApply: true,
    url: absoluteSiteUrl(path),
  }
}
