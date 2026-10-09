import Link from "next/link";

const categories = [
    { id: 1, name: "Articles", count: 8 },
    { id: 2, name: "Business", count: 4 },
    { id: 3, name: "Family & Divorce", count: 12 },
    { id: 4, name: "Web Design", count: 16 },
];

const BlogSidebarCategory = () => {
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
