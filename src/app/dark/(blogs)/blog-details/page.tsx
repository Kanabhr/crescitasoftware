import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BlogDetailsTopIntro />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea />
        </main>
    );
};

export default page;