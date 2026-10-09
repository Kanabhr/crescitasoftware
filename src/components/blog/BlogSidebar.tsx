import BlogSidebarCategory from "./subComponents/BlogSidebarCategory";
import BlogSidebarSearchForm from "../form/BlogSidebarSearchForm";
import BlogSidebarAuthor from "./subComponents/BlogSidebarAuthor";
import SidebarLatestPost from "./subComponents/SidebarLatestPost";
import BlogSidebarTag from "./subComponents/BlogSidebarTag";

const BlogSidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-widget mb-10">
                <div className="sidebar-search">
                    <BlogSidebarSearchForm />
                </div>
            </div>
            <div className="sidebar-widget mb-45">
                <BlogSidebarAuthor />
            </div>
            <div className="sidebar-widget mb-45">
                <h3 className="sidebar-widget-title">Categories</h3>
                <BlogSidebarCategory />
            </div>
            <div className="sidebar-widget mb-45">
                <h3 className="sidebar-widget-title">Latest Posts</h3>
                <SidebarLatestPost />
            </div>
            <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Tags</h3>
                <BlogSidebarTag />
            </div>
        </div>
    );
};

export default BlogSidebar;