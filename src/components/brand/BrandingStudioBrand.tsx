"use client";
import { brand_slider_two_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

type BrandLogo = { src: string; alt: string };

const brandLogoPaths = ["/assets/img/brand/cs/logo.png", "/assets/img/brand/cs/logo-2.png", "/assets/img/brand/cs/logo-3.png", "/assets/img/brand/cs/logo-4.png", "/assets/img/brand/cs/logo-5.png", "/assets/img/brand/cs/logo-6.png", "/assets/img/brand/cs/logo-7.png", "/assets/img/brand/cs/logo-2.png", "/assets/img/brand/cs/logo-3.png", "/assets/img/brand/cs/logo-4.png", "/assets/img/brand/cs/logo-5.png", "/assets/img/brand/cs/logo-6.png", "/assets/img/brand/cs/logo.png", "/assets/img/brand/cs/logo-2.png", "/assets/img/brand/cs/logo-3.png", "/assets/img/brand/cs/logo-4.png", "/assets/img/brand/cs/logo-7.png", "/assets/img/brand/cs/logo-2.png", "/assets/img/brand/cs/logo-3.png", "/assets/img/brand/cs/logo-4.png", "/assets/img/brand/cs/logo-5.png", "/assets/img/brand/cs/logo-6.png"];

const defaultLogos: BrandLogo[] = brandLogoPaths.map((src) => ({ src, alt: "Brand logo" }));

interface Props {
  spacingClass?: string;
  logos?: BrandLogo[];
}

const BrandingStudioBrand = ({ spacingClass = "", logos = defaultLogos }: Props) => {
  return (
    <section className={`ca-brand-area pt-100 ${spacingClass}`}>
      <div className="cs-brand-slider-active tp-slider-transtion">
        <Swiper modules={[FreeMode, Autoplay]} {...brand_slider_two_params}>
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Link href="#" className="cs-brand-logo">
                <Image className="brand-logo-img" width={174} height={30} src={logo.src} alt={logo.alt || "Brand logo"} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandingStudioBrand;
