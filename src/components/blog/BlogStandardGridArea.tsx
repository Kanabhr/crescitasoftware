import BlogSecondarySingleCard from "./subComponents/BlogSecondarySingleCard";
import BlogPagination from "./subComponents/BlogPagination";
import { blogData } from "@/data/blog-data";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";

const blogTags = [
    "All News",
    "Design",
    "Motion design",
    "Branding",
    "AI Tools",
    "UX",
    "Midjourney",
    "Web experience",
    "3d modeling",
];

const BlogStandardGridArea = () => {
    //display blog items
    const displayBlogData = blogData.slice(28, 36);

    return (
        <div className="tp-blog-masonary-area tp-animate-tab pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-blog-tag mb-80">
                            {blogTags.map((tag) => (
                                <Link key={tag} href="#">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-7">
                        <div className="tp-blog-masonary-content">
                            <div className="row gx-60">
                                {/* Blog Items */}
                                {displayBlogData.map((item) => (
                                    <div key={item.id} className="col-xl-6 col-lg-12 col-md-6">
                                        <BlogSecondarySingleCard {...item} spacingCls="mb-70" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-5">
                        <div className="sidebar-blog-grid-wrap mb-40 ml-115">
                            <BlogSidebar />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="basic-pagination-wrap">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="basic-pagination mb-0">
                                        <BlogPagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardGridArea;