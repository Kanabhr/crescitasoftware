import { BlogSearchIcon } from "@/svg/SearchIcons";

const BlogSidebarSearchForm = () => {
    return (
        <form action="#">
            <div className="sidebar-search-input">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <BlogSearchIcon />
                </button>
            </div>
        </form>
    );
};

export default BlogSidebarSearchForm;