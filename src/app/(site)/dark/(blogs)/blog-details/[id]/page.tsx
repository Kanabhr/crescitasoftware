import BlogDetailsTopIntro from "@/components/blog/subComponents/BlogDetailsTopIntro";
import PostboxDetailsArea from "@/components/blog/PostboxDetailsArea";
import PageBanner from "@/components/banner/PageBanner";
import { PageParamsProps } from "@/types/custom-dt";

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    return (
        <main>
            <BlogDetailsTopIntro id={id} />
            <PageBanner src="/assets/img/banner/thumb-7.jpg" />
            <PostboxDetailsArea />
        </main>
    );
}