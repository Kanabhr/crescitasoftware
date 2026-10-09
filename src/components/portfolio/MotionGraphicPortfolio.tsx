import MotionGraphicPortItem from "./subComponents/MotionGraphicPortItem";
import portfolioData from "@/data/portfolio-data";
import { ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";

const MotionGraphicPortfolio = () => {
    //display portfolio item
    const displayPortfolio = portfolioData.slice(24, 27);

    return (
        <div className="mg-portfolio-area pt-145 pb-65">
            <div className="container-fluid container-1886">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-lg-5">
                        <div className="mg-portfolio-title-wrap mg-portfolio-pin mb-30">
                            <h2 className="ca-section-title fs-100 lh-1 mb-30 reveal-text">
                                Featured projects
                            </h2>

                            <div className="tp_fade_anim" data-delay=".3">
                                <p className="mg-portfolio-dec mb-50">
                                    Welcome to Cunnet — where design innovation converges with
                                    <br />
                                    cutting-edge technology to bring your brand&apos;s essence to life
                                    online.
                                    <br />
                                    We are driven by a passion driven for creativity.
                                </p>
                            </div>

                            <div
                                className="tp-btn-group tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <SmartLink className="tp-btn-circle" href="/portfolio">
                                    <ArrowIconFive />
                                </SmartLink>

                                <SmartLink className="tp-btn z-index-1" href="/portfolio">
                                    See all portfolio
                                </SmartLink>

                                <SmartLink className="tp-btn-circle" href="/portfolio">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>

                    {/* Right Portfolio Items */}
                    <div className="col-lg-7">
                        <div className="mg-portfolio-item-wrap ml-130 mb-40">
                            {displayPortfolio.map((item) => (
                                <MotionGraphicPortItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicPortfolio;
