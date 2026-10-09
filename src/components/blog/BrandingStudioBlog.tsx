import { BlogItemDt } from "@/types/custom-dt";
import { blogData } from "@/data/blog-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: BlogItemDt }) => (
    <div className="col-lg-4 col-md-6">
        <div
            className="cs-blog-item mb-40 tp_fade_anim"
            data-delay=".4"
            data-fade-from={blog.fadeFrom}
            data-ease="bounce"
        >
            <div className="cs-blog-thumb fix p-relative mb-25">
                <Image width={553} height={527} className="img-fluid w-100" src={blog.image} alt={blog.tag || "blog image"} />
                <Link href="#" className="cs-blog-tag">{blog.tag}</Link>
            </div>
            <h4 className="cs-blog-title tp-ff-sequel-semi-bold">
                <SmartLink
                    href={`/blog-details/${blog.id}`}
                    className="common-underline">
                    {blog.title}
                </SmartLink>
            </h4>
        </div>
    </div>
);

const BrandingStudioBlog = () => {
    // display blog data
    const displayBlogItem = blogData.slice(4, 7);

    return (
        <div className="cs-blog-thumb-area pt-135 pb-115">
            <div className="container">
                <div className="row align-items-end">
                    {/* Section Title */}
                    <div className="col-lg-9">
                        <div className="cs-blog-title-wrap mb-60">
                            <h2 className="cs-section-title tp-ff-sequel-semi-bold reveal-text">
                                Related Articles
                            </h2>
                        </div>
                    </div>

                    {/* See All Button */}
                    <div className="col-lg-3">
                        <div
                            className="cs-blog-btn-wrap text-lg-end mb-80 tp_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <SmartLink className="tp-btn tp-ff-inter text-uppercase" href="blog">
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
                    {displayBlogItem.map((blog, index) => (
                        <BlogItem key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandingStudioBlog;
