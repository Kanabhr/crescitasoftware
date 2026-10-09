import BlogStandardPostItem from "./subComponents/BlogStandardPostItem";
import BlogPagination from "./subComponents/BlogPagination";
import { blogData } from "@/data/blog-data";
import BlogSidebar from "./BlogSidebar";

const BlogStandardArea = () => {
    // display blog items
    const displayBlogData = blogData.slice(39, 43);

    return (
        <div className="tp-blog-standard-area pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="postbox-wrapper mb-40">
                            {displayBlogData.map((post) => (
                                <BlogStandardPostItem key={post.id} post={post} />
                            ))}
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

export default BlogStandardArea;
