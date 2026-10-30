import BlogBreadcrumb from "@/components/breadcrumb/BlogBreadcrumb";
import BlogListSecondary from "@/components/blog/BlogListSecondary";
import BlogListPrimary from "@/components/blog/BlogListPrimary";
import PageBanner from "@/components/banner/PageBanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata() {
    return buildMetadata("/blog-list");
}

const page = () => {
    return (
        <main>
            <BreadcrumbJsonLd path="/blog-list" />
            <BlogBreadcrumb />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <BlogListPrimary />
            <BlogListSecondary />
        </main>
    );
};

export default page;
