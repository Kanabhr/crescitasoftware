"use client";
import { brand_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const brandLogos = [
    { img: "/assets/img/brand/logo.png", width: 128, height: 30 },
    { img: "/assets/img/brand/logo-2.png", width: 75, height: 40 },
    { img: "/assets/img/brand/logo-3.png", width: 94, height: 50 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 38 },
    { img: "/assets/img/brand/logo-5.png", width: 84, height: 38 },
    { img: "/assets/img/brand/logo-6.png", width: 125, height: 46 },
    { img: "/assets/img/brand/logo.png", width: 128, height: 30 },
    { img: "/assets/img/brand/logo-2.png", width: 75, height: 40 },
    { img: "/assets/img/brand/logo-3.png", width: 94, height: 50 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 38 },
    { img: "/assets/img/brand/logo-5.png", width: 84, height: 38 },
    { img: "/assets/img/brand/logo-6.png", width: 125, height: 46 },
];

const repeatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

const DigitalStudioBrand = () => {
    return (
        <div className="ca-brand-area">
            <div className="ca-brand-slider-active tp-slider-transtion">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    {...brand_slider_params}
                >
                    {repeatedLogos.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <Link href="#" className="ca-brand-logo">
                                <Image
                                    src={brand.img}
                                    width={brand.width}
                                    height={brand.height}
                                    alt="Brand Logo"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DigitalStudioBrand;
