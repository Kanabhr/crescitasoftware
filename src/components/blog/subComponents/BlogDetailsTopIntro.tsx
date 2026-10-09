import { blogData } from "@/data/blog-data";
import { IdProps } from "@/types/custom-dt";

const BlogDetailsTopIntro = ({ id }: IdProps) => {
    const blog = blogData.find((item) => item.id == id);

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
                                {blog?.title ? (
                                    blog.title
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
                                <span>By</span> Cunnet - {blog?.year ? blog.year : 2024}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsTopIntro;
