"use client";
import { about_me_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const sliderImages = [
    "/assets/img/about/me/thumb.jpg",
    "/assets/img/about/me/thumb-2.jpg",
    "/assets/img/about/me/thumb-3.jpg",
    "/assets/img/about/me/thumb.jpg",
    "/assets/img/about/me/thumb-2.jpg",
    "/assets/img/about/me/thumb-3.jpg",
];

const AboutMeSlider = () => {
    return (
        <div className="about-me-slider-area pt-120 p-relative">
            {/* Awards */}
            <div className="about-me-slider-awards">
                <div className="mp-hero-awards mg-hero-awards pp-about-awards mb-40 p-relative d-inline-block">
                    <Image
                        width={136}
                        height={136}
                        className="rotate-infinite"
                        src="/assets/img/hero/mg/text.png"
                        alt="award"
                    />
                    <Image
                        width={52}
                        height={52}
                        className="mp-hero-w-logo"
                        src="/assets/img/hero/mg/shap.png"
                        alt="shape"
                    />
                </div>
            </div>

            {/* Slider */}
            <div className="about-me-slider-active">
                <Swiper
                    {...about_me_slider_params}
                >
                    {sliderImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="about-me-slider-thumb tp-item-anime marque">
                                <Image width={938} height={561} className="img-fluid w-100 h-100" src={img} alt="about image" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutMeSlider;