import { ArrowBottomIconTwo } from "@/svg/ArrowIcons";
import { ScrollLink } from "../common/ScrollLink";

const ServiceIntroBanner = () => {
    return (
        <>
            <div className="inner-service-banner-area about-us-spacing pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-10">
                            <div className="inner-service-banner-title-wrap tp_fade_anim" data-delay=".3">
                                <h2 className="about-us-title tp-ff-sequel-medium">Delivering creative visuals that<br />
                                    stand out make your vision.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-service-banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10">
                                <ScrollLink target="#service">
                                    scroll to explore
                                    <span>
                                        <ArrowBottomIconTwo />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10 text-sm-end">
                                <span className="tp-ff-sequel-semi-bold text-uppercase">10 years of experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceIntroBanner;