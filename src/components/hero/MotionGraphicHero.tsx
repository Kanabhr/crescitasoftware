"use client";
import { text_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SmartLink from "../common/SmartLink";
import { ArrowIconSeven } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const slides = ["Graphic", "Motion", "Design", "Development", "Graphic", "Motion", "Design", "Development"];
const tags = ["Brand design", "Motion graphics", "Art direction", "Interactive design", "Brand design",
    "Motion graphics", "UI", "UX"];

const HeroSlide = ({ title }: { title: string }) => (
    <div className="tp-title-anim pr-20">
        <h2 className="tp-title-anim-inner mg-hero-slider-title tp-ff-sequel-bold-head text-white text-uppercase">
            <SmartLink href="/service-details" className="tp-title-text">
                {title}
            </SmartLink>
            {title === "Graphic" && <span className="mg-hero-slider-symbol">P</span>}
        </h2>
    </div>
);

const HeroTagList = () => (
    <ul>
        {tags.map((tag, idx) => (
            <li key={idx}>
                <Link href="#">{tag}</Link>
            </li>
        ))}
    </ul>
);

const MotionGraphicHero = () => {
    return (
        <div className="mg-hero-area mg-hero-spacing">
            <div className="container-fluid container-1886">
                <div className="mg-hero-spacing-inner p-relative z-index-1">
                    {/* Hero Background */}
                    <div className="mg-hero-bg">
                        <Image
                            width={1856}
                            height={802}
                            src="/assets/img/hero/mg/thumb.jpg"
                            alt="thumb"
                        />
                    </div>

                    <div className="row p-relative z-index-1">
                        {/* Hero Description */}
                        <div className="col-lg-6">
                            <div className="mg-hero-dec ml-70 mb-35">
                                <p className="text-white">
                                    Cunnet is a creative motion
                                    <br />
                                    design studio based in New York
                                    <br />
                                    we think strategically like an agency
                                    <br />
                                    and craft powerful.
                                </p>
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="col-12">
                            <div className="text-lg-end">
                                <div className="mp-hero-awards mg-hero-awards pp-about-awards mb-40 p-relative d-inline-block mr-70">
                                    <Image
                                        width={136}
                                        height={136}
                                        className="rotate-infinite"
                                        src="/assets/img/hero/mg/text.png"
                                        alt="text image"
                                    />
                                    <Image
                                        width={52}
                                        height={52}
                                        className="mp-hero-w-logo"
                                        src="/assets/img/hero/mg/shap.png"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hero Slider */}
                        <div className="col-12">
                            <div className="mg-hero-text-slider-wrap p-relative mb-45">
                                <div className="mg-hero-slide-active tp-slider-transtion">
                                    <Swiper
                                        modules={[FreeMode, Autoplay]}
                                        {...text_slider_params}
                                    >
                                        {slides.map((title, idx) => (
                                            <SwiperSlide key={idx}>
                                                <HeroSlide title={title} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {/* Hero Tags */}
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-7">
                            <div className="mg-hero-tag mb-20 ml-65 mr-60">
                                <HeroTagList />
                            </div>
                        </div>

                        {/* Scroll Link */}
                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-5">
                            <div className="mg-hero-scrool text-end mr-65 mt-40">
                                <Link href="#about" className="tp-smooth">
                                    Scroll for more
                                    <ArrowIconSeven />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicHero;
