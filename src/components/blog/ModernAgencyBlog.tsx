"use client";
import BlogSingleCard from "./subComponents/BlogSingleCard";
import { ArrowIconFive } from "@/svg/ArrowIcons";
import { BlogItemDt } from "@/types/custom-dt";
import { blogData } from "@/data/blog-data";
import SmartLink from "../common/SmartLink";

const ModernAgencyBlog = () => {
    //   display blog data items
    const displayBlogItem = blogData.slice(0, 4);

    return (
        <div className="mp-blog-area pt-145 pb-125">
            <div className="container">
                {/* Header */}
                <div className="row align-items-end mb-15">
                    <div className="col-lg-8">
                        <div className="mp-blog-title-wrap mb-30">
                            <h2 className="tp-section-title tp-ff-sequel-roman reveal-text">
                                Creating award-worthy <br /> work isn&apos;t the ultimate.
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="d-flex justify-content-lg-end mb-40">
                            <div
                                className="tp-btn-group tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                            >
                                <SmartLink className="tp-btn-circle" href="/blog">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" href="/blog">
                                    See All Blog
                                </SmartLink>
                                <SmartLink className="tp-btn-circle" href="/blog">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row">
                    {displayBlogItem.map((item: BlogItemDt) => (
                        <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                            <BlogSingleCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyBlog;
