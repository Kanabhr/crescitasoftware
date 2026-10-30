import Link from "next/link";
import { getBlogCategories } from "@/lib/blog";

const BlogSidebarCategory = async () => {
    const categories = await getBlogCategories();

    return (
        <div className="sidebar-widget-category">
            <ul>
                {categories.map(({ id, name, count }) => (
                    <li key={id}>
                        <Link
                            href="/blog-grid-with-sidebar"
                            className="d-flex align-items-center justify-content-between"
                        >
                            {name}
                            <span>{count.toString().padStart(2, "0")}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogSidebarCategory;
