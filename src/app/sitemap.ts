import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { STATIC_SEO_ROUTES } from "@/lib/seoRoutes";
import { absoluteSiteUrl } from "@/lib/structuredData";
import { publishedFilter } from "@/lib/blog";
export const revalidate = 300;
type SeoRecord = {
  path: string;
  seo?: { noIndex?: boolean | null; canonicalUrl?: string | null } | null;
};

type JobRecord = {
  id: number;
  seo?: { noIndex?: boolean | null; canonicalUrl?: string | null } | null;
};

type PostRecord = {
  id: number;
  seo?: { noIndex?: boolean | null } | null;
};

function canonicalUrlOrPath(canonicalUrl: string | null | undefined, path: string) {
  try {
    return canonicalUrl ? absoluteSiteUrl(canonicalUrl) : absoluteSiteUrl(path);
  } catch {
    return absoluteSiteUrl(path);
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });
  const [seoRecords, jobs, posts] = await Promise.all([
    payload.find({ collection: "page-seo", pagination: false, depth: 0 }),
    payload.find({
      collection: "jobs",
      where: { status: { equals: "open" } },
      pagination: false,
      depth: 0,
    }),
    payload.find({
      collection: "posts",
      where: publishedFilter(),
      pagination: false,
      depth: 0,
    }),
  ]);
  const seoByPath = new Map((seoRecords.docs as unknown as SeoRecord[]).map((record) => [record.path, record.seo]));
  const pages: MetadataRoute.Sitemap = STATIC_SEO_ROUTES.flatMap(({ path }) => {
    const seo = seoByPath.get(path);
    if (path === "/404" || path === "/blog-details" || seo?.noIndex) return [];
    return [{ url: canonicalUrlOrPath(seo?.canonicalUrl, path) }];
  });
  const jobPages: MetadataRoute.Sitemap = (jobs.docs as unknown as JobRecord[])
    .filter((job) => !job.seo?.noIndex)
    .map((job) => ({
      url: canonicalUrlOrPath(job.seo?.canonicalUrl, `/career-details/${job.id}`),
    }));
  const postPages: MetadataRoute.Sitemap = (posts.docs as unknown as PostRecord[]).filter((post) => !post.seo?.noIndex).map((post) => ({ url: absoluteSiteUrl(`/blog-details/${post.id}`) }));

  return [...pages, ...jobPages, ...postPages];
}
