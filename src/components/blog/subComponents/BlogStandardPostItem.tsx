"use client";
import { BlogNextPrevIcon, ButtonArrowIconThree } from "@/svg/ArrowIcons";
import { postbox_slider_params } from "@/constant/swiper";
import { useVideoModal } from "@/provider/VideoProvider";
import SmartLink from "@/components/common/SmartLink";
import { VideoPlayIcon } from "@/svg/VideoPlayIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogItemDt } from "@/types/custom-dt";
import { Navigation } from "swiper/modules";
import Image from "next/image";

interface blogPropsDt {
    post: BlogItemDt;
}

const BlogStandardPostItem = ({ post }: blogPropsDt) => {
    const { playVideo } = useVideoModal();

    return (
        <article className="postbox-item">
            {/* IMAGE */}
            {post.type === "image" && (
                <div className="postbox-thumb mb-20">
                    <SmartLink href={`/blog-details/${post.id}`}>
                        <Image style={{ width: "100%", height: "auto" }} width={1137} height={668} className="w-100" src={post.image} alt="blog image" />
                    </SmartLink>
                </div>
            )}

            {/* VIDEO */}
            {post.type === "video" && (
                <div className="postbox-thumb postbox-thumb-overlay p-relative mb-20">
                    <SmartLink href={`/blog-details/${post.id}`}>
                        <Image style={{ width: "100%", height: "auto" }} width={1137} height={668} className="w-100" src={post.image} alt="video image" />
                    </SmartLink>
                    <div className="postbox-play-btn z-index-1">
                        <a onClick={() => post?.videoId && playVideo(post.videoId)} className="popup-video">
                            <span><VideoPlayIcon /></span>
                        </a>
                    </div>
                </div>
            )}

            {/* SLIDER */}
            {post.type === "slider" && (
                <div className="postbox-slider-thumb mb-20">
                    <div className="postbox-slider p-relative">
                        <div className="postbox-slider-active fix">
                            <Swiper
                                modules={[Navigation]}
                                {...postbox_slider_params}
                            >
                                {post?.images?.map((img: string, i: number) => (
                                    <SwiperSlide key={i}>
                                        <div className="postbox-slider-item">
                                            <Image style={{ width: "100%", height: "auto" }} width={1137} height={668} className="w-100" src={img} alt="image" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="postbox-arrow">
                            <button className="postbox-arrow-prev">
                                <span><BlogNextPrevIcon direction="right" /></span>
                            </button>
                            <button className="postbox-arrow-next">
                                <span><BlogNextPrevIcon direction="left" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CONTENT */}
            <div className="postbox-content">
                <span className="mp-blog-date mb-10 d-block">
                    <span>By</span> Cunnet - {post.year}
                </span>

                <h3 className="postbox-title mb-15 tp-ff-sequel-semi-bold">
                    <SmartLink href={`/blog-details/${post.id}`} className="common-underline">
                        {post.title}
                    </SmartLink>
                </h3>

                <p className="mb-30">{post.desc}</p>

                <SmartLink className="tp-btn tp-btn-grey" href={`/blog-details/${post.id}`}>
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
    );
};

export default BlogStandardPostItem;
