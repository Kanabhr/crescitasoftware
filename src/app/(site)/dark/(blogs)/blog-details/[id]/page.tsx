import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import { getBlogPostById } from "@/lib/blog";
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

    const title = post?.seo?.metaTitle || post?.title || "Blog Details - Creative Portfolio Agency Nextjs Template";
    const description = post?.seo?.metaDescription || post?.description || undefined;
    const canonical = post?.seo?.canonicalUrl || undefined;
    const noIndex = post?.seo?.noIndex ?? false;
    const ogImage = post?.seo?.shareImageUrl || post?.image || undefined;

    return {
        title,
        ...(description && { description }),
        ...(canonical && { alternates: { canonical } }),
        ...(noIndex && { robots: { index: false, follow: false } }),
        ...(ogImage && {
            openGraph: {
                title,
                ...(description && { description }),
                images: [{ url: ogImage }],
            },
        }),
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const numericId = Number(id);

    if (!Number.isInteger(numericId) || numericId <= 0) {
        notFound();
    }

    return (
        <main>
            <BlogDetailsTopIntro id={numericId} />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea postId={numericId} />
        </main>
    );
}
