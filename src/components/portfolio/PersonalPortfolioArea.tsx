"use client";

import { personal_portfolio_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SmartLink from "../common/SmartLink";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const sliderTexts = [
    "Get In touch",
    "Available for work",
];

const PersonalPortfolioArea = () => {
    // default: first item active
    const [activeBg, setActiveBg] = useState("pp-porfolio-bg-1");

    const portfolioList = [
        {
            title: "Design Build",
            category: "Photography",
            year: "2024",
            bg: "pp-porfolio-bg-1",
        },
        {
            title: "Website Design",
            category: "Website Design",
            year: "2024",
            bg: "pp-porfolio-bg-2",
        },
        {
            title: "Smart Digital",
            category: "Web branding",
            year: "2024",
            bg: "pp-porfolio-bg-3",
        },
        {
            title: "User Flow",
            category: "Photography",
            year: "2024",
            bg: "pp-porfolio-bg-4",
        },
    ];

    return (
        <div className="pp-porfolio-area p-relative fix pt-115 pb-80">
            <div className="pp-porfolio-bg-wrap">
                {/* dynamic class */}
                <div id="pp-porfolio-bg-box" className={activeBg}>
                    <Image width={1905} height={885} className="pp-porfolio-bg-1" src="/assets/img/portfolio/pp/portfolio.jpg" alt="portfolio image" />
                    <Image width={1905} height={885} className="pp-porfolio-bg-2" src="/assets/img/portfolio/pp/portfolio-2.jpg" alt="portfolio image" />
                    <Image width={1905} height={885} className="pp-porfolio-bg-3" src="/assets/img/portfolio/pp/portfolio-3.jpg" alt="portfolio image" />
                    <Image width={1905} height={885} className="pp-porfolio-bg-4" src="/assets/img/portfolio/pp/portfolio-4.jpg" alt="portfolio image" />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pp-porfolio-content pp-porfolio-title-wrap z-index-5">
                            <span className="pp-porfolio-subtitle text-uppercase text-white d-inline-block mb-40">
                                [ Selected _ Work ]
                            </span>

                            <ul>
                                {portfolioList.map((item, index) => (
                                    <li
                                        key={index}
                                        className={activeBg === item.bg ? "active" : ""}
                                        onMouseEnter={() => setActiveBg(item.bg)}
                                    >
                                        <SmartLink href="/portfolio-details-gallery">
                                            {item.title}
                                        </SmartLink>
                                        <div className="pp-porfolio-date">
                                            <span>{item.category}</span>
                                            <span>{item.year}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="pp-porfolio-slider mt-115 tp-slider-transtion">
                                <Swiper
                                    modules={[Autoplay]}
                                    {...personal_portfolio_slider_params}
                                >
                                    {Array.from({ length: 6 }).map((_, i) =>
                                        sliderTexts.map((text, idx) => (
                                            <SwiperSlide key={`${i}-${idx}`}>
                                                <span>
                                                    {text} <span></span>
                                                </span>
                                            </SwiperSlide>
                                        ))
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioArea;
