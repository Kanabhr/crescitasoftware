import BlogStandardTopIntro from "@/components/blog/subComponents/BlogStandardTopIntro";
import BlogStandardArea from "@/components/blog/BlogStandardArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Standard - Creative Portfolio Agency Nextjs Template",
};
const page = () => {
    return (
        <main>
            <BlogStandardTopIntro title="Core Insight" />
            <BlogStandardArea />
        </main>
    );
};

export default page;