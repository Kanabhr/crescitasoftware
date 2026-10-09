import SmartLink from "@/components/common/SmartLink";
import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";

const SidebarLatestPost = () => {
    // display sidebar blog items
    const displayBlogData = blogData.slice(36, 39);

    return (
        <div className="rc-post-wrap">
            {displayBlogData.map((post) => (
                <div key={post.id} className="rc-post d-flex align-items-center">
                    <div className="rc-post-thumb">
                        <SmartLink href={`/blog-details/${post.id}`}>
                            <Image width={140} height={140} src={post.image} alt={post.title} />
                        </SmartLink>
                    </div>

                    <div className="rc-post-content">
                        <div className="rc-post-category">
                            <Link href="#">{post.tag}</Link>
                        </div>

                        <h3 className="rc-post-title">
                            <SmartLink href={`/blog-details/${post.id}`} className="common-underline">
                                {post.title}
                            </SmartLink>
                        </h3>

                        <div className="rc-post-meta">
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SidebarLatestPost;
