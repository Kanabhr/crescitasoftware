import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import { getLatestPostId } from "@/lib/blog";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata() {
    return buildMetadata("/blog-details");
}

const page = async () => {
    // Show the most-recent post; falls back cleanly when DB is empty
    const latestId = await getLatestPostId();

    return (
        <main>
            <BreadcrumbJsonLd path="/blog-details" />
            <BlogDetailsTopIntro id={latestId ?? undefined} />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea postId={latestId ?? undefined} />
        </main>
    );
};

export default page;
