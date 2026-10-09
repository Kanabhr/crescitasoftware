import Link from "next/link";

const BlogSidebarTag = () => {
    return (
        <div className="sidebar-widget-content">
            <div className="tagcloud">
                <Link href="#">Creative</Link>
                <Link href="#">Design Trends</Link>
                <Link href="#">Development</Link>
                <Link href="#">Lifestyle</Link>
                <Link href="#">Cunnet</Link>
            </div>
        </div>
    );
};

export default BlogSidebarTag;