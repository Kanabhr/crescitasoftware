import BlogListPrimaryCard from "./subComponents/BlogListPrimaryCard";
import { blogData } from "@/data/blog-data";
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

const BlogListPrimary = () => {
    // display blog items
    const displayBlogData = blogData.slice(22, 24);

    return (
        <div className="tp-blog-area pt-100">
            <div className="container">
                <div className="row gx-50">
                    {displayBlogData.map((item) => (
                        <BlogListPrimaryCard key={item.id} {...item} />
                    ))}

                    <div className="col-12">
                        <div className="tp-blog-tag tp-blog-tag-2 mb-80 mt-90">
                            {blogTags.map((tag) => (
                                <Link key={tag} href="#">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListPrimary;