"use client";
import { career_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Slide images data
const careerSlides = [
    "/assets/img/career/career-slide-1.jpg",
    "/assets/img/career/career-slide-2.jpg",
    "/assets/img/career/career-slide-3.jpg",
    "/assets/img/career/career-slide-4.jpg",
    "/assets/img/career/career-slide-5.jpg",
    "/assets/img/career/career-slide-1.jpg",
    "/assets/img/career/career-slide-2.jpg",
    "/assets/img/career/career-slide-3.jpg",
    "/assets/img/career/career-slide-4.jpg",
    "/assets/img/career/career-slide-5.jpg",
];

const CareerSliderArea = () => {
    return (
        <div className="tp-career-slider-ptb pb-180">
            <div className="tp-career-slider-wrapper">
                <div className="tp-career-slider-active">
                    <div className="align-items-center slide-transtion">
                        <Swiper
                            modules={[Autoplay]}
                            {...career_slider_params}
                        >
                            {careerSlides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="tp-career-slider-thumb">
                                        <Image
                                            style={{ width: "100%", height: "auto" }}
                                            src={slide}
                                            alt={`Career Slide ${index + 1}`}
                                            width={350}
                                            height={255}
                                            className="w-100"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerSliderArea;
