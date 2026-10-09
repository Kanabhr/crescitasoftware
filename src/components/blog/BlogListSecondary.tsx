import BlogListSecondaryCard from "./subComponents/BlogListSecondaryCard";
import BlogPagination from "./subComponents/BlogPagination";
import { blogData } from "@/data/blog-data";

const BlogListSecondary = () => {
    // display blog items
    const displayBlogData = blogData.slice(24, 28);

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
