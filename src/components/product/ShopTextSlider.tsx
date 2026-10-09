"use client";

import { text_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ShopTextSliderItem = {
    id: number;
    text: string;
};

const shopTextSliderData: ShopTextSliderItem[] = Array.from(
    { length: 20 },
    (_, i) => ({
        id: i + 1,
        text: "Exclusive Deals on Style!",
    })
);

const ShopTextSlider = () => {
    return (
        <div
            className="shop-text-slider pp-porfolio-slider mt-160"
            style={{ backgroundColor: "#e1eeb7" }}
        >
            <div className="pp-slide-active tp-slider-transtion">
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    {...text_slider_params}
                >
                    {shopTextSliderData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <span>
                                {item.text} <span></span>
                            </span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ShopTextSlider;
