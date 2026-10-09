"use client";
import { about_me_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type AboutUsSlide = {
    id: number;
    image: string;
};

const aboutUsSlides: AboutUsSlide[] = [
    { id: 1, image: "/assets/img/about/us/thumb.jpg" },
    { id: 2, image: "/assets/img/about/us/thumb-2.jpg" },
    { id: 3, image: "/assets/img/about/us/thumb-3.jpg" },
    { id: 4, image: "/assets/img/about/us/thumb.jpg" },
    { id: 5, image: "/assets/img/about/us/thumb-2.jpg" },
    { id: 6, image: "/assets/img/about/us/thumb-3.jpg" },
];

const AboutUsSlider = () => {
    return (
        <div className="about-me-slider-area tp-item-anime-area pt-140 p-relative">
            <div className="about-me-slider-active">
                <Swiper
                    {...about_me_slider_params}
                >
                    {aboutUsSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="about-me-slider-thumb tp-item-anime marque">
                                <Image
                                    style={{width:"100%", height:"auto"}}
                                    width={938}
                                    height={561}
                                    className="w-100"
                                    src={slide.image}
                                    alt={`about-us-slide-${slide.id}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUsSlider;