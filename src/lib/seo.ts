import type { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { STATIC_SEO_ROUTES } from "./seoRoutes";
import { getSiteUrl } from "./structuredData";

const ROOT_TITLE = "Cunnet - Creative Portfolio Agency Nextjs Template";

export type SeoFieldsData = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  shareImage?: { url?: string | null; alt?: string | null } | number | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
};

type PageSeoDocument = {
  path: string;
  seo?: SeoFieldsData | null;
};

type BuildMetadataOptions = {
  fallbackTitle?: string;
  fallbackDescription?: string;
  seo?: SeoFieldsData | null;
  lookupPageSeo?: boolean;
};

export function getLightPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/dark") return "/";
  return normalized.startsWith("/dark/") ? normalized.slice("/dark".length) : normalized;
}

export async function getPageSeo(path: string): Promise<PageSeoDocument | null> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "page-seo",
    where: { path: { equals: getLightPath(path) } },
    limit: 1,
    depth: 1,
  });
  return docs[0] ? (docs[0] as unknown as PageSeoDocument) : null;
}

export async function buildMetadata(path: string, options: BuildMetadataOptions = {}): Promise<Metadata> {
  const canonicalPath = getLightPath(path);
  const route = STATIC_SEO_ROUTES.find((item) => item.path === canonicalPath);
  const pageSeo = options.lookupPageSeo === false ? null : await getPageSeo(path);
  const seo = options.seo ?? pageSeo?.seo;
  const title = seo?.metaTitle || options.fallbackTitle || route?.title || ROOT_TITLE;
  const description = seo?.metaDescription || options.fallbackDescription;
  const siteUrl = getSiteUrl();
  let canonical: URL;
  try {
    canonical = seo?.canonicalUrl ? new URL(seo.canonicalUrl, siteUrl) : new URL(canonicalPath, siteUrl);
  } catch {
    canonical = new URL(canonicalPath, siteUrl);
  }
  const image = seo?.shareImage && typeof seo.shareImage === "object" && seo.shareImage.url ? [{ url: new URL(seo.shareImage.url, siteUrl), alt: seo.shareImage.alt || title }] : undefined;

  return {
    metadataBase: siteUrl,
    title,
    ...(description ? { description } : {}),
    alternates: { canonical: canonical.toString() },
    openGraph: {
      title,
      ...(description ? { description } : {}),
      url: canonical,
      type: "website",
      ...(image ? { images: image } : {}),
    },
    ...(seo?.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
