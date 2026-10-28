"use client";
import { about_us_team_slider_params } from "@/constant/swiper";
import SmartLink from "@/components/common/SmartLink";
import MultiLine from "@/components/common/MultiLine";
import { Swiper, SwiperSlide } from "swiper/react";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import type { AboutData } from "@/lib/aboutPage";

interface Props {
  data: Pick<AboutData, "teamHeading" | "teamButtonText" | "teamButtonLink" | "teamImages" | "historyHeading" | "historyButtonText" | "historyButtonLink" | "historyImages">;
}

const AboutUsTeamClient = ({ data }: Props) => {
  const h = data.historyImages;

  return (
    <div className="about-us-team-area pt-120 tp-section-bg">
      <div className="about-us-team-slider-wrap fix p-relative">
        <div className="about-us-team-slider-content">
          <div className="text-center d-inline-block">
            <h3 className="about-us-team-slider-title tp-ff-inter fw-600">{data.teamHeading}</h3>
            <SmartLink className="tp-btn tp-ff-inter text-uppercase" href={data.teamButtonLink}>
              <span>
                <span className="text-1">{data.teamButtonText}</span>
                <span className="text-2">{data.teamButtonText}</span>
              </span>
              <i>
                <ButtonArrowIcon />
                <ButtonArrowIcon />
              </i>
            </SmartLink>
          </div>
        </div>
        <div className="about-us-team-slider-active tp-item-anime-area-2">
          <Swiper {...about_us_team_slider_params}>
            {data.teamImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="about-us-team-slider-thumb tp-item-anime-2 marque">
                  <Image style={{ width: "100%", height: "auto" }} width={615} height={654} className="w-100" src={img.src} alt={img.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="about-us-history-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div data-speed="0.8" className="about-us-history-thumb about-us-history-col-1 d-inline-block mb-30">
                <Image style={{ width: "100%", height: "auto" }} width={352} height={289} src={h[0].src} alt={h[0].alt} />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-6">
              <div data-speed="0.8" className="about-us-history-thumb about-us-history-col-2 d-inline-block mb-30 p-relative">
                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src={h[1].src} alt={h[1].alt} />
                <div data-speed="0.8" className="about-us-history-thumb-sm d-none d-md-block">
                  <Image width={178} height={175} src={h[2].src} alt={h[2].alt} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="about-us-history-thumb about-us-history-col-3 text-end mt-80 mb-30">
                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src={h[3].src} alt={h[3].alt} />
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="about-us-history-thumb about-us-history-col-4 mb-30">
                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src={h[4].src} alt={h[4].alt} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-history-title-wrap text-center mb-30">
                <h2 className="about-us-history-title tp-ff-sequel-bold-head text-uppercase mb-50">
                  <MultiLine text={data.historyHeading} />
                </h2>
                <SmartLink className="tp-btn tp-btn-white tp-ff-inter text-uppercase" href={data.historyButtonLink}>
                  <span>
                    <span className="text-1">{data.historyButtonText}</span>
                    <span className="text-2">{data.historyButtonText}</span>
                  </span>
                  <i>
                    <ButtonArrowIcon />
                    <ButtonArrowIcon />
                  </i>
                </SmartLink>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div data-speed="0.94" className="about-us-history-thumb about-us-history-col-5 pt-60 text-end mb-30">
                <Image style={{ width: "100%", height: "auto" }} width={353} height={456} src={h[5].src} alt={h[5].alt} />
              </div>
            </div>
            <div className="col-xl-4 offset-xl-2 col-lg-6 col-6">
              <div data-speed="0.9" className="about-us-history-thumb about-us-history-col-6 mb-30">
                <Image style={{ width: "100%", height: "auto" }} width={340} height={440} src={h[6].src} alt={h[6].alt} />
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <div data-speed="0.9" className="about-us-history-thumb about-us-history-col-7 mb-30">
                <Image className="img-fluid" width={340} height={440} src={h[7].src} alt={h[7].alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTeamClient;
