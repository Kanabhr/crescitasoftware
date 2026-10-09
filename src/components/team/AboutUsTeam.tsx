"use client";
import { about_us_team_slider_params } from "@/constant/swiper";
import SmartLink from "@/components/common/SmartLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";

const teamImages = [
    "/assets/img/team/about/membar.jpg",
    "/assets/img/team/about/membar-2.jpg",
    "/assets/img/team/about/membar-3.jpg",
    "/assets/img/team/about/membar-4.jpg",
    "/assets/img/team/about/membar-5.jpg",
];

const AboutUsTeam = () => {
    return (
        <div className="about-us-team-area pt-120 tp-section-bg">
            <div className="about-us-team-slider-wrap fix p-relative">
                <div className="about-us-team-slider-content">
                    <div className="text-center d-inline-block">
                        <h3 className="about-us-team-slider-title tp-ff-inter fw-600">The Team</h3>
                        <SmartLink className="tp-btn tp-ff-inter text-uppercase" href="/team-details">
                            <span>
                                <span className="text-1">Discover Team</span>
                                <span className="text-2">Discover Team</span>
                            </span>
                            <i>
                                <ButtonArrowIcon />
                                <ButtonArrowIcon />
                            </i>
                        </SmartLink>
                    </div>
                </div>
                <div className="about-us-team-slider-active tp-item-anime-area-2">
                        <Swiper
                            {...about_us_team_slider_params}
                        >
                            {teamImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="about-us-team-slider-thumb tp-item-anime-2 marque">
                                        <Image style={{ width: "100%", height: "auto" }} width={615} height={654} className="w-100" src={img} alt={`Team member ${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                </div>
            </div>
            <div className="about-us-history-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div data-speed="0.8" className="about-us-history-thumb about-us-history-col-1 d-inline-block mb-30" >
                                <Image style={{ width: "100%", height: "auto" }} width={352} height={289} src="/assets/img/about/us/history/thumb.jpg" alt="thumb" />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-6">
                            <div data-speed="0.8" className="about-us-history-thumb about-us-history-col-2 d-inline-block mb-30 p-relative">
                                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src="/assets/img/about/us/history/thumb-2.jpg" alt="thumb" />
                                <div data-speed="0.8" className="about-us-history-thumb-sm d-none d-md-block">
                                    <Image width={178} height={175} src="/assets/img/about/us/history/thumb-3.jpg" alt="thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="about-us-history-thumb about-us-history-col-3 text-end mt-80 mb-30">
                                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src="/assets/img/about/us/history/thumb-4.jpg" alt="thumb" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="about-us-history-thumb about-us-history-col-4 mb-30">
                                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src="/assets/img/about/us/history/thumb-5.jpg" alt="thumb" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us-history-title-wrap text-center mb-30">
                                <h2 className="about-us-history-title tp-ff-sequel-bold-head text-uppercase mb-50">Come<br /> Discover<br /> Our History</h2>
                                <SmartLink className="tp-btn tp-btn-white tp-ff-inter text-uppercase" href="/team">
                                    <span>
                                        <span className="text-1">Discover Now</span>
                                        <span className="text-2">Discover Now</span>
                                    </span>
                                    <i>
                                        <ButtonArrowIcon />
                                        <ButtonArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div data-speed="0.94" className="about-us-history-thumb about-us-history-col-5 pt-60 text-end mb-30">
                                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src="/assets/img/about/us/history/thumb-6.jpg" alt="thumb" />
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-2 col-lg-6 col-6">
                            <div data-speed="0.9" className="about-us-history-thumb about-us-history-col-6 mb-30">
                                <Image style={{ width: "100%", height: "auto" }} width={340} height={440} src="/assets/img/about/us/history/thumb-7.jpg" alt="thumb" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-6">
                            <div data-speed="0.9" className="about-us-history-thumb about-us-history-col-7 mb-30">
                                <Image className="img-fluid" width={340} height={440} src="/assets/img/about/us/history/thumb-8.jpg" alt="thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsTeam;