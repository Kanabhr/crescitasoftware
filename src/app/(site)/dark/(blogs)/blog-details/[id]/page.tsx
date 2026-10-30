import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import JsonLd, { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getBlogPostById } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { buildArticleData } from "@/lib/structuredData";
import { PageParamsProps } from "@/types/custom-dt";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: PageParamsProps): Promise<Metadata> {
    const { id } = await props.params;
    const numericId = Number(id);
    if (!Number.isInteger(numericId) || numericId <= 0) {
        return { title: "Not Found" };
    }
    const post = await getBlogPostById(numericId);

    return buildMetadata(`/dark/blog-details/${numericId}`, {
        fallbackTitle: post?.title || "Blog Details - Crescita",
        fallbackDescription: post?.description,
        lookupPageSeo: false,
        seo: post
            ? {
                metaTitle: post.seo?.metaTitle,
                metaDescription: post.seo?.metaDescription,
                shareImage: post.seo?.shareImageUrl || post.image
                    ? { url: post.seo?.shareImageUrl || post.image }
                    : undefined,
                canonicalUrl: post.seo?.canonicalUrl,
                noIndex: post.seo?.noIndex,
            }
            : undefined,
    });
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const numericId = Number(id);

    if (!Number.isInteger(numericId) || numericId <= 0) {
        notFound();
    }
    const post = await getBlogPostById(numericId);

    return (
        <main>
            <BreadcrumbJsonLd path={`/blog-details/${numericId}`} />
            {post && <JsonLd data={buildArticleData(post, `/blog-details/${numericId}`)} />}
            <BlogDetailsTopIntro id={numericId} />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea postId={numericId} />
        </main>
    );
}
