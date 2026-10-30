import BlogStandardTopIntro from "@/components/blog/subComponents/BlogStandardTopIntro";
import BlogStandardArea from "@/components/blog/BlogStandardArea";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 300;

export async function generateMetadata() {
    return buildMetadata("/blog-standard");
}

const page = () => {
    return (
        <main>
            <BreadcrumbJsonLd path="/blog-standard" />
            <BlogStandardTopIntro title="Core Insight" />
            <BlogStandardArea />
        </main>
    );
};

export default page;
