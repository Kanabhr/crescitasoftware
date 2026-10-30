import BlogListSecondaryCard from "./subComponents/BlogListSecondaryCard";
import BlogPagination from "./subComponents/BlogPagination";
import { getBlogPosts } from "@/lib/blog";

const BlogListSecondary = async () => {
    // Newest 4 posts (matches the original 4-card secondary layout)
    const displayBlogData = await getBlogPosts(4);

    return (
        <div className="tp-list-area pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-blog-list-item-wrap">
                            {displayBlogData.map((item) => (
                                <BlogListSecondaryCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="basic-pagination-wrap">
                            <div className="basic-pagination mb-0">
                                <BlogPagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListSecondary;
