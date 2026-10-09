import { ArrowBottomIconTwo } from "@/svg/ArrowIcons";
import { ScrollLink } from "../common/ScrollLink";

const ServiceTwoIntro = () => {
    return (
        <>
            <div className="inner-service-banner-area about-us-spacing pb-125">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-service-banner-title-wrap text-center">
                                <h2 className="inner-service-2-title tp-ff-sequel-bold-head text-uppercase tp-char-animation">Services & Capabilities</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-service-banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10">
                                <ScrollLink target="#about">
                                    scroll to explore
                                    <span>
                                        <ArrowBottomIconTwo/>
                                    </span>
                                </ScrollLink>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10 text-sm-center">
                                <span className="tp-ff-sequel-semi-bold text-uppercase">(©2021 — 2025)</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10 text-md-end">
                                <span className="tp-ff-sequel-semi-bold text-uppercase">10 years of experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceTwoIntro;