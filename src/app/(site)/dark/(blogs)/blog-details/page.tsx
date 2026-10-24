import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import { getLatestPostId } from "@/lib/blog";
import { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
    title: "Blog Details - Creative Portfolio Agency Nextjs Template",
};

const page = async () => {
    // Show the most-recent post; falls back cleanly when DB is empty
    const latestId = await getLatestPostId();

    return (
        <main>
            <BlogDetailsTopIntro id={latestId ?? undefined} />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea postId={latestId ?? undefined} />
        </main>
    );
};

export default page;
