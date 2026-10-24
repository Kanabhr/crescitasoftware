import BlogSingleCard from "@/components/blog/subComponents/BlogSingleCard";
import BlogTopIntro from "@/components/blog/BlogTopIntro";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Creative Portfolio Agency Nextjs Template",
};

const page = async () => {
    // Newest 12 posts (matches the original 12-card layout)
    const posts = await getBlogPosts(12);

    return (
        <main>
            {/* blog top intro */}
            <BlogTopIntro />

            {/* blog area */}
            <div className="mp-blog-area pb-95">
                <div className="container">
                    <div className="row">
                        {posts.map((item) => (
                            <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                                <BlogSingleCard item={item} spacingCls="mb-55" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
