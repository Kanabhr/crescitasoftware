import BlogSecondarySingleCard from "./subComponents/BlogSecondarySingleCard";
import { blogData } from "@/data/blog-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

const AboutMeBlog = () => {
    //display blog items
    const displayBlogData = blogData.slice(7, 10);

    return (
        <div className="cs-blog-thumb-area pt-155 pb-115">
            <div className="container">
                <div className="row align-items-end">
                    {/* Header */}
                    <div className="col-lg-9">
                        <div className="cs-blog-title-wrap mb-60">
                            <span className="tp-about-subtitle text-uppercase mb-10 d-inline-block">
                                [ Our Blog ]
                            </span>
                            <h2 className="about-me-resume-maintitle text-uppercase reveal-text">
                                Related Articles
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div
                            className="cs-blog-btn-wrap text-lg-end mb-80 tp_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <SmartLink
                                className="tp-btn tp-ff-inter text-uppercase"
                                href="/blog"
                            >
                                <span>
                                    <span className="text-1">all Articles</span>
                                    <span className="text-2">all Articles</span>
                                </span>
                                <i>
                                    <ButtonArrowIcon />
                                    <ButtonArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>

                    {/* Blog Items */}
                    {displayBlogData.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <BlogSecondarySingleCard
                                {...item}
                                animation={{
                                    delay: ".4",
                                    ease: "bounce",
                                    fadeFrom: item.fadeFrom,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMeBlog;