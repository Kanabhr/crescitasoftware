"use client";
import { portfolio_slider_params, portfolio_slider_two_params } from "@/constant/swiper";
import ModernAPorfolioSingleCard from "./ModernAPorfolioSingleCard";
import { ArrowNextPrevIcon } from "@/svg/ArrowIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioData from "@/data/portfolio-data";
import { Navigation } from "swiper/modules";

const ModernAgencyPortSliderItem = () => {
    return (
        <>
            <div className="col-12">
                <div className="mp-portfolio-slider-wrap p-relative pt-45 mb-40">
                    <div className="mp-portfolio-slider-control d-flex align-items-end">
                        <div className="mp-portfolio-control d-flex justify-content-between w-100">
                            <h6 className="mp-portfolio-control-new tp-ff-sequel-semi-bold text-uppercase">New</h6>
                            <div className="mp-portfolio-navigation d-flex gap-2">
                                <span className="mp-portfolio-arrow-prev">
                                    <ArrowNextPrevIcon direction="right" />
                                </span>
                                <span className="mp-portfolio-arrow-next">
                                    <ArrowNextPrevIcon direction="left" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        {...portfolio_slider_params}
                    >
                        {
                            portfolioData.slice(11, 16).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ModernAPorfolioSingleCard item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <div className="col-12">
                <div className="mp-portfolio-slider-wrap p-relative pt-45">
                    <div className="mp-portfolio-slider-control mp-portfolio-slider-control-bottom d-flex align-items-end">
                        <div className="mp-portfolio-control d-flex justify-content-between w-100">
                            <h6 className="mp-portfolio-control-new tp-ff-sequel-semi-bold text-uppercase">Vibrators</h6>
                            <div className="mp-portfolio-navigation d-flex gap-2">
                                <span className="mp-portfolio-arrow-prev-2">
                                    <ArrowNextPrevIcon direction="right" />
                                </span>
                                <span className="mp-portfolio-arrow-next-2">
                                    <ArrowNextPrevIcon direction="left" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        {...portfolio_slider_two_params}>
                        {
                            portfolioData.slice(11, 16).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <ModernAPorfolioSingleCard item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ModernAgencyPortSliderItem;