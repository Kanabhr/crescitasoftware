import { blogComments } from "@/data/blog-comments";
import { BlogReplyArrowIcon } from "@/svg/ArrowIcons";
import Image from "next/image";
import Link from "next/link";

const BlogComments = () => {
    return (
        <ul>
            {blogComments.map((comment) => (
                <li key={comment.id} className={comment.isChild ? "children" : undefined}>
                    <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                            <div className="postbox__comment-avater mr-30">
                                <Image width={70} height={70} src={comment.avatar} alt={comment.author} />
                            </div>
                        </div>

                        <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                <h5>By {comment.author}</h5>
                                <span className="post-meta">{comment.date}</span>
                            </div>

                            <p>{comment.content}</p>

                            <div className="postbox__comment-reply">
                                <Link href="#">
                                    Reply
                                    <span>
                                        <BlogReplyArrowIcon/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BlogComments;
