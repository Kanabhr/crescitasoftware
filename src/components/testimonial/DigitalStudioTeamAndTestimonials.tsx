"use client"
import CommonSingleTeamItem from "../team/subComponents/CommonSingleTeamItem";
import TestimonialItem from "./subComponents/DigitalStudioTestiItem";
import { digitalStudioTestimonials } from "@/data/testimonial-data";
import { testmonial_slider_params } from "@/constant/swiper";
import { Navigation, Pagination } from "swiper/modules";
import { TestimonialStarIcon } from "@/svg/StarIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamData } from "@/data/team-data";


const DigitalStudioTeamAndTestimonials = () => {
    //display team data
    const displayTeamItem = teamData.slice(0, 4);

    return (
        <div className="ca-testimonial-spacing tp-section-bg">
            <div className="ca-testimonial-area pt-135 pb-155">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="ca-testimonial-title-wrap mb-30">
                                <div className="ca-testimonial-review mb-15">
                                    <h3 className="ca-testimonial-ratings tp-ff-inter p-relative reveal-text">4.8
                                        <TestimonialStarIcon />
                                    </h3>
                                    <span className="ca-testimonial-review-count">86+ reviews</span>
                                </div>
                                <h2 className="ca-section-title fs-52 text-white mb-115 reveal-text">Helping world-class<br /> company by creative<br /> design.</h2>
                                <div className="ca-testimonial-navigation">
                                    <span className="ca-testimonial-arrow-prev"><i className="fa-solid fa-arrow-left"></i></span>
                                    <span className="ca-testimonial-arrow-next"><i className="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7">
                            <div className="p-relative">
                                <span className="ca-testimonial-bg-transparent"></span>
                                <div className="ca-testimonial-slider-wrap p-relative mb-30">
                                    <span className="ca-testimonial-pagination"></span>
                                    <div className="ca-testimonial-slider-active">
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            {...testmonial_slider_params}
                                        >
                                            {digitalStudioTestimonials.map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <TestimonialItem item={item} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -- team-area-start -- */}
            <div className="ca-team-area pb-120">
                <div className="container">
                    <div className="ca-team-border pt-150"></div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ca-team-subtitle-wrap mb-30">
                                <span className="ca-team-subtitle text-white"><span>[</span> Our achievements <span>]</span></span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ca-team-title-wrap mb-50">
                                <h2 className="ca-section-title fs-100 text-white lh-1 reveal-text">Meet the <br /> talented team</h2>
                            </div>
                        </div>
                        {/* single team item */}
                        {
                            displayTeamItem.map((item) => (
                                <CommonSingleTeamItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioTeamAndTestimonials;