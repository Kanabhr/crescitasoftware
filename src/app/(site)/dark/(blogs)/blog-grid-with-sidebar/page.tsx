import BlogStandardTopIntro from "@/components/blog/subComponents/BlogStandardTopIntro";
import BlogStandardGridArea from "@/components/blog/BlogStandardGridArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Grid With Sidebar - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <BlogStandardTopIntro title="The Core Insight" />
            <BlogStandardGridArea />
        </main>
    );
};

export default page;