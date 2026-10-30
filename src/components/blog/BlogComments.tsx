import { BlogComment } from "@/types/custom-dt";
import { BlogReplyArrowIcon } from "@/svg/ArrowIcons";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface BlogCommentsProps {
    comments: BlogComment[];
}

const BlogComments = ({ comments }: BlogCommentsProps) => {
    return (
        <ul>
            {comments.map((comment) => (
                <Fragment key={comment.id}>
                    <li>
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
                                            <BlogReplyArrowIcon />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>

                    {comment.replies?.map((reply) => (
                        <li key={reply.id} className="children">
                            <div className="postbox__comment-box d-flex">
                                <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater mr-30">
                                        <Image width={70} height={70} src={reply.avatar} alt={reply.author} />
                                    </div>
                                </div>

                                <div className="postbox__comment-text">
                                    <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                        <h5>By {reply.author}</h5>
                                        <span className="post-meta">{reply.date}</span>
                                    </div>

                                    <p>{reply.content}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </Fragment>
            ))}
        </ul>
    );
};

export default BlogComments;
