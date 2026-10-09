"use client";
import { causes_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { ButtonArrowIcon } from "@/svg/ArrowIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroStarIcon } from "@/svg/StarIcons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroGalleryItems = [
    { id: 0, img: "/assets/img/hero/thumb.jpg", alt: "Branding" },
    { id: 1, img: "/assets/img/hero/thumb-2.jpg", alt: "Fashion" },
    { id: 2, img: "/assets/img/hero/thumb-3.jpg", alt: "Editorial" },
    { id: 3, img: "/assets/img/hero/thumb-4.jpg", alt: "Headshot" },
    { id: 4, img: "/assets/img/hero/thumb-5.jpg", alt: "Lifestyle" },
    { id: 5, img: "/assets/img/hero/thumb-6.jpg", alt: "Product" },
    { id: 6, img: "/assets/img/hero/thumb-7.jpg", alt: "Sports" },
    { id: 7, img: "/assets/img/hero/thumb-8.jpg", alt: "Studio" },
    { id: 8, img: "/assets/img/hero/thumb-9.jpg", alt: "Beauty" },
];

const CreativeAgencyHero = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="tp-hero-area tp-title-middle-wrap tp-hero-spacing p-relative">
            <div className="tp-hero-scale-background">
                {heroGalleryItems.map((item) => (
                    <div key={item.id} className="background-img"
                        style={{
                            opacity: activeIndex === item.id ? 1 : 0,
                        }}
                    >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                    </div>
                ))}
            </div>
            <div className="container h-100">
                <div className="tp-hero-content-wrap tp-hero-scale-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-hero-title-wrap text-center mb-40 tp_fade_anim" data-delay=".4">
                                <h2 className="tp-hero-title tp-title-middle-animetion tp-ff-sequel-bold-head">Cunnet Agency</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5">
                            <div className="tp-hero-dec-wrap mb-30 tp_fade_anim" data-delay=".5">
                                <p className="tp-hero-dec">
                                    <span className="tp-hero-shape">
                                        <HeroStarIcon />
                                    </span>
                                    We build websites, apps &<br />
                                    campaigns that actually move the<br />
                                    needle for growing brands.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="tp-hero-btn mb-30 d-flex flex-wrap gap-2 justify-content-md-center">
                                <div className="tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                                    <Link className="tp-btn" href="portfolio-light.html">
                                        <span>
                                            <span className="text-1">Explore All Work</span>
                                            <span className="text-2">Explore All Work</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </Link>
                                </div>
                                <div className="tp_fade_anim" data-delay=".7" data-fade-from="bottom" data-ease="bounce">
                                    <Link className="tp-btn tp-btn-grey" href="contact-me-light.html">
                                        <span>
                                            <span className="text-1">Contact Me</span>
                                            <span className="text-2">Contact Me</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-end">
                            <div className="tp-hero-social ml-100 mb-30 tp_fade_anim" data-delay=".8" data-fade-from="bottom" data-ease="bounce">
                                <Link href="#">Facebook</Link>
                                <Link href="#">LinkedIn</Link>
                                <Link href="#">Twitter</Link>
                                <Link href="#">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-none d-xl-block">
                <div className="row">
                    <div className="col-12 p-relative">
                        <div className="tp-hero-scale-gallery">
                            {heroGalleryItems.map((item) => (
                                <Link
                                    key={item.id}
                                    data-index={item.id}
                                    href="/portfolio-details"
                                    className={`thumbs ${activeIndex === item.id ? "hovered" : ""}`}
                                    onMouseEnter={() => setActiveIndex(item.id)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    <Image width={177} height={150} src={item.img} alt={item.alt} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Media swiper slide */}
            <div className="tp-hero-slider-active pt-50 d-xl-none tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...causes_slider_params}
                >
                    {[...heroGalleryItems, ...heroGalleryItems].map((item, index) => (
                        <SwiperSlide key={`${item.id}-${index}`}>
                            <div className="background-img">
                                <Link href="/portfolio-details">
                                    <Image
                                        width={170}
                                        height={170}
                                        src={item.img}
                                        alt={item.alt}
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CreativeAgencyHero;