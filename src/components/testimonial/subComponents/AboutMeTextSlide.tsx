"use client";
import { about_me_text_slider_params } from "@/constant/swiper";
import { TestimonialStarIBig } from "@/svg/StarIcons";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialTextSlide {
    id: number;
    text: string;
};

const textSlides: TestimonialTextSlide[] = [
    { id: 1, text: "Our Testimonial" },
    { id: 2, text: "Our Testimonial" },
    { id: 3, text: "Our Testimonial" },
    { id: 4, text: "Our Testimonial" },
    { id: 5, text: "Our Testimonial" },
    { id: 6, text: "Our Testimonial" },
    { id: 7, text: "Our Testimonial" },
    { id: 8, text: "Our Testimonial" },
    { id: 9, text: "Our Testimonial" },
    { id: 10, text: "Our Testimonial" },
    { id: 11, text: "Our Testimonial" },
    { id: 12, text: "Our Testimonial" },
];

const AboutMeTextSlide = () => {
    return (
        <div className="tp-testimonial-text-slide pb-70">
            <div className="tp-testimonial-text-slide-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...about_me_text_slider_params}
                >
                    {textSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="tp-testimonial-text">
                                <h2 className="tp-testimonial-text-title fw-600 mb-0 tp-ff-inter text-uppercase">
                                    {slide.text}
                                    <span>
                                        <TestimonialStarIBig />
                                    </span>
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutMeTextSlide;