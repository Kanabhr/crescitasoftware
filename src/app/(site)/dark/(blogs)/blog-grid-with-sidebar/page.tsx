import BlogStandardGridArea from "@/components/blog/BlogStandardGridArea";
import BlogStandardTopIntro from "@/components/blog/subComponents/BlogStandardTopIntro";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata() {
    return buildMetadata("/blog-grid-with-sidebar");
}

const page = () => {
    return (
        <main>
            <BreadcrumbJsonLd path="/blog-grid-with-sidebar" />
            <BlogStandardTopIntro title="The Core Insight" />
            <BlogStandardGridArea />
        </main>
    );
};

export default page;
