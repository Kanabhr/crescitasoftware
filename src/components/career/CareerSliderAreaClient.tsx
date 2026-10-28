"use client";
import { career_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface Props {
  slides: { src: string; alt: string }[];
}

const CareerSliderAreaClient = ({ slides }: Props) => {
  // Repeated once so the infinite loop always has enough slides.
  const loopSlides = [...slides, ...slides];

  return (
    <div className="tp-career-slider-ptb pb-180">
      <div className="tp-career-slider-wrapper">
        <div className="tp-career-slider-active">
          <div className="align-items-center slide-transtion">
            <Swiper modules={[Autoplay]} {...career_slider_params}>
              {loopSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="tp-career-slider-thumb">
                    <Image style={{ width: "100%", height: "auto" }} src={slide.src} alt={slide.alt} width={350} height={255} className="w-100" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSliderAreaClient;
