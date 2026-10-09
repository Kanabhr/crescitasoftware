"use client";
import { shopAgencyTestimonialsData } from "@/data/testimonial-data";
import ShopAgencyTestiItem from "./subComponents/ShopAgencyTestiItem";
import { shop_testimonial_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const ShopAgencyTestimonial = () => {
    return (
        <div className="shop-testimonial-area pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="text-center">
                            <div className="mp-hero-awards mb-50 p-relative d-inline-block">
                                <Image width={146} height={146} className="rotate-infinite" src="/assets/img/testimonial/shop/text·png.png" alt="award" />
                                <Image width={26} height={28} className="mp-hero-w-logo" src="/assets/img/testimonial/shop/qoute.png" alt="quote" />
                            </div>

                            <div className="shop-testimonial-slider-wrap p-relative mb-30">
                                <div className="swiper shop-testimonial-slider-active">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            modules={[Navigation]}
                                            {...shop_testimonial_slider_params}
                                        >
                                            {shopAgencyTestimonialsData.map((testimonial) => (
                                                <SwiperSlide key={testimonial.id}>
                                                    <ShopAgencyTestiItem {...testimonial} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
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

export default ShopAgencyTestimonial;
