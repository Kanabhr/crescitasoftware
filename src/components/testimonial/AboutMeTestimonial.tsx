"use client";
import { shop_testimonial_slider_params } from "@/constant/swiper";
import AboutMeTextSlide from "./subComponents/AboutMeTextSlide";
import AboutMeTestiItem from "./subComponents/AboutMeTestiItem";
import { aboutMeTestimonials } from "@/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const AboutMeTestimonial = () => {
    return (
        <div className="tp-testimonial-area pt-160 pb-130">
            {/* Text Slides */}
            <AboutMeTextSlide />

            {/* Shop Testimonials */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="text-center">
                            {/* Awards */}
                            <div className="mp-hero-awards mb-50 p-relative d-inline-block">
                                <Image
                                    width={146}
                                    height={146}
                                    className="rotate-infinite"
                                    src="/assets/img/testimonial/shop/text·png.png"
                                    alt="award"
                                />
                                <Image
                                    width={26}
                                    height={28}
                                    className="mp-hero-w-logo"
                                    src="/assets/img/testimonial/shop/qoute.png"
                                    alt="quote"
                                />
                            </div>

                            {/* Slider */}
                            <div className="shop-testimonial-slider-wrap p-relative mb-30">
                                <div className="shop-testimonial-slider-active">
                                    <Swiper
                                        modules={[Navigation]}
                                        {...shop_testimonial_slider_params}
                                    >
                                        {aboutMeTestimonials.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <AboutMeTestiItem
                                                    {...item}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Navigation */}
                                <div className="shop-testimonial-navigation">
                                    <span className="shop-testimonial-arrow-prev">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </span>
                                    <span className="shop-testimonial-arrow-next">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeTestimonial;