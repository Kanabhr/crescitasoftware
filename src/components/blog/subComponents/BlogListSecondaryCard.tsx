import { ButtonArrowIconThree } from "@/svg/ArrowIcons";
import SmartLink from "@/components/common/SmartLink";
import { BlogItemDt } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";

const BlogListSecondaryCard = ({ id, title, image, delay, year, description }: BlogItemDt) => (
    <div className="tp-blog-list-item mb-60 tp_fade_anim" data-delay={delay}>
        <div className="row align-items-center">
            <div className="col-xl-6">
                <div className="tp-blog-list-thumb fix mr-35 mb-30">
                    <Link href={`/blog-details/${id}`}>
                        <Image style={{ width: "100%", height: "auto" }} width={778} height={415} className="w-100" src={image} alt={title} />
                    </Link>
                </div>
            </div>

            <div className="col-xl-6">
                <div className="tp-blog-list-content ml-15 mb-30">
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
                            <span className="text-1">Read More</span>
                            <span className="text-2">Read More</span>
                        </span>
                        <i>
                            <ButtonArrowIconThree />
                            <ButtonArrowIconThree />
                        </i>
                    </SmartLink>
                </div>
            </div>
        </div>
    </div>
);
export default BlogListSecondaryCard;