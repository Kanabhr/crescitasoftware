import { ButtonArrowIconThree } from "@/svg/ArrowIcons";
import SmartLink from "@/components/common/SmartLink";
import { BlogItemDt } from "@/types/custom-dt";
import Image from "next/image";

const BlogListCard = ({ id, title, image, delay, description, year }: BlogItemDt) => (
    <div className="col-lg-6">
        <article className="postbox-item mb-30 tp_fade_anim" data-delay={delay}>
            <div className="postbox-thumb mb-20">
                <SmartLink href={`/blog-details/${id}`}>
                    <Image style={{ width: "100%", height: "auto" }} width={835} height={686} className="w-100" src={image} alt={title} />
                </SmartLink>
            </div>

            <div className="postbox-content">
                <span className="mp-blog-date mb-10 d-block">
                    <span>By</span> Cunnet - {year}
                </span>

                <h3 className="postbox-title mb-15 tp-ff-sequel-semi-bold">
                    <SmartLink href={`/blog-details/${id}`} className="common-underline">
                        {title}
                    </SmartLink>
                </h3>

                <p className="mb-30">
                    {description}
                </p>

                <SmartLink className="tp-btn tp-btn-grey" href={`/blog-details/${id}`}>
                    <span>
                        <span className="text-1">View More</span>
                        <span className="text-2">View More</span>
                    </span>
                    <i>
                        <ButtonArrowIconThree />
                        <ButtonArrowIconThree />
                    </i>
                </SmartLink>
            </div>
        </article>
    </div>
);
export default BlogListCard;