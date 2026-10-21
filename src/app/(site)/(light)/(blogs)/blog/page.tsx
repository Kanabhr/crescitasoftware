import BlogSingleCard from "@/components/blog/subComponents/BlogSingleCard";
import BlogTopIntro from "@/components/blog/BlogTopIntro";
import { BlogItemDt } from "@/types/custom-dt";
import { blogData } from "@/data/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Creative Portfolio Agency Nextjs Template",
};
const page = () => {
    //   display blog data items
    const displayBlogItem = blogData.slice(10, 22);

    return (
        <main>
            {/* blog top intro */}
            <BlogTopIntro />

            {/* blog area */}
            <div className="mp-blog-area pb-95">
                <div className="container">
                    <div className="row">
                        {displayBlogItem.map((item: BlogItemDt) => (
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