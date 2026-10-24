import { getBlogPostById } from "@/lib/blog";
import { IdProps } from "@/types/custom-dt";

const BlogDetailsTopIntro = async ({ id }: IdProps) => {
    const post = id ? await getBlogPostById(id) : null;

    return (
        <div className="tp-blog-grid-area tp-pd-2-ptb pt-175 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pd-2-top">
                            <h3
                                className="tp-section-title tp-ff-sequel-bold-head fs-72 mb-20 tp_fade_anim"
                                data-delay=".3"
                            >
                                {post?.title ? (
                                    post.title
                                ) : (
                                    <>
                                        Innovative Strategies <br />
                                        and Concepts Inspired by <br />
                                        Market Research
                                    </>
                                )}
                            </h3>

                            <span
                                className="mp-blog-date mb-10 d-block tp_fade_anim"
                                data-delay=".4"
                            >
                                {post ? (
                                    // Post exists in DB — only render what it actually has
                                    <>
                                        {post.authorName && (
                                            <><span>By</span> {post.authorName} - </>
                                        )}
                                        {post.publishedAt
                                            ? new Date(post.publishedAt).getFullYear()
                                            : post.year ?? ''}
                                    </>
                                ) : (
                                    // No post at all — show template placeholder
                                    <><span>By</span> Cunnet - 2024</>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsTopIntro;
