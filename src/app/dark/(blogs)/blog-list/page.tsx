import BlogListSecondary from "@/components/blog/BlogListSecondary";
import BlogBreadcrumb from "@/components/breadcrumb/BlogBreadcrumb";
import BlogListPrimary from "@/components/blog/BlogListPrimary";
import PageBanner from "@/components/banner/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog List - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BlogBreadcrumb />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <BlogListPrimary />
            <BlogListSecondary />
        </main>
    );
};

export default page;