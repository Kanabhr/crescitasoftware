"use client";
import { gallery_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const galleryImages = [
    "/assets/img/portfolio/details/gallery/portfolio.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-2.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-3.jpg",
    "/assets/img/portfolio/details/gallery/portfolio.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-2.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-3.jpg",
    "/assets/img/portfolio/details/gallery/portfolio.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-2.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-3.jpg",
    "/assets/img/portfolio/details/gallery/portfolio.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-2.jpg",
    "/assets/img/portfolio/details/gallery/portfolio-3.jpg",
];

const PortfolioGalleryThumbSlider = () => {
    return (
        <div className="tp-pd-2-slider-ptb tp-item-anime-area pb-140">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pd-2-slider-wrapper">
                            <div className="tp-pd-2-active">
                                    <Swiper
                                        modules={[Pagination]}
                                        {...gallery_slider_params}
                                    >
                                        {galleryImages.map((src, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="tp-pd-2-slider-thumb tp-item-anime marque">
                                                    <Image style={{ width: "100%", height: "auto" }} width={745} height={573} src={src} alt={`Portfolio image ${index + 1}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                <div className="tp-pd-2-dot text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGalleryThumbSlider;
