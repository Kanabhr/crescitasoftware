"use client";
import { about_me_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {
  slides: { src: string; alt: string }[];
}

const AboutUsSliderClient = ({ slides }: Props) => {
  // Repeated once so the loop always has enough slides.
  const loopSlides = [...slides, ...slides];

  return (
    <div className="about-me-slider-area tp-item-anime-area pt-140 p-relative">
      <div className="about-me-slider-active">
        <Swiper {...about_me_slider_params}>
          {loopSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="about-me-slider-thumb tp-item-anime marque">
                <Image style={{ width: "100%", height: "auto" }} width={938} height={561} className="w-100" src={slide.src} alt={slide.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUsSliderClient;
