"use client"
import { shop_header_slider_params } from "@/constant/swiper";
import SmartLink from "@/components/common/SmartLink";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowIconTen } from "@/svg/ArrowIcons";

type HeaderSliderItem = {
    id: number;
    text: React.ReactNode;
};

const headerSliderData: HeaderSliderItem[] = [
    {
        id: 1,
        text: (
            <>
                Celebrate our anniversary with exclusive deals!{" "}
                <SmartLink href="/product-details">
                    Shop now
                    <ArrowIconTen />
                </SmartLink>
            </>
        ),
    },
    {
        id: 2,
        text: (
            <>
                Enjoy <span>10% Off</span> Your Next Order
            </>
        ),
    },
    {
        id: 3,
        text: (
            <>
                Summer sale discount <span>70% up to off.</span>
            </>
        ),
    },
];

const HeaderTopSlider = () => {
    return (
        <div className="shop-header-top-slider-active">
            <Swiper
                modules={[Autoplay, Navigation]}
                {...shop_header_slider_params}
            >
                {headerSliderData.map(({ id, text }) => (
                    <SwiperSlide key={id}>
                        <div className="shop-header-top-slider-text text-center">
                            <p className="mb-0">{text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeaderTopSlider;
