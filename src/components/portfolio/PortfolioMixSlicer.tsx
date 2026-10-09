"use client";

import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import PhotoProviderWrapper from "@/provider/PhotoProviderWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioData from "@/data/portfolio-data";
import { PhotoView } from "react-photo-view";
import { SwiperGL } from "@/plugin";
import Image from "next/image";
import Link from "next/link";

const PortfolioMixSlider = () => {
    //display portfolio item
    const displayPortfolioItem = portfolioData.slice(27, 32);

    return (
        <div className="tp-portfolio-mix-slider-wrap mix p-relative">
            <PhotoProviderWrapper>
                <Swiper
                    className="tp-portfolio-mix-slider"
                    modules={[Navigation, Pagination, Mousewheel, SwiperGL]}
                    slidesPerView={1}
                    loop={false}
                    speed={1200}
                    mousewheel
                    navigation={{
                        nextEl: ".tp-portfolio-mix-button-next",
                        prevEl: ".tp-portfolio-mix-button-prev",
                    }}
                    pagination={{
                        el: ".tp-portfolio-mix-pagination",
                        clickable: true,
                    }}
                >
                    {displayPortfolioItem.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="tp-portfolio-mix-slider-item">
                                <div className="tp-portfolio-mix-slider-image">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        style={{ objectFit: "cover" }}
                                        width={1920}
                                        height={930}
                                        className="swiper-gl-image"
                                        priority
                                    />
                                    <PhotoView src={item.image}>
                                        <Link href="#" className="popup-image">
                                            <i className="fa-regular fa-arrows-maximize" />
                                        </Link>
                                    </PhotoView>
                                </div>

                                <div className="tp-portfolio-mix-slider-content">
                                    <span className="tp-portfolio-mix-slide-text">
                                        {item.tags?.join(", ")}
                                    </span>
                                    <h2 className="tp-portfolio-mix-slide-heading">
                                        <Link href={`/portfolio-details/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PhotoProviderWrapper>
            {/* Navigation */}
            <div className="tp-portfolio-mix-slider-navigation overflow-hidden">
                <div className="container">
                    <div className="slider-nav">
                        <button className="tp-portfolio-mix-button-prev nav-icon">
                            <i className="fa-solid fa-angle-left" />
                            Prev
                        </button>
                        <button className="tp-portfolio-mix-button-next nav-icon">
                            Next
                            <i className="fa-solid fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="tp-portfolio-mix-pagination has_fade_anim" />
        </div>
    );
};

export default PortfolioMixSlider;
