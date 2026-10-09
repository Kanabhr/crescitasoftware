import { ArrowIconEight, ArrowIconFive } from "@/svg/ArrowIcons";
import { motionGraphicawardsData } from "@/data/awards-data";
import SmartLink from "../common/SmartLink";

const MotionGraphicAward = () => {
    return (
        <div className="cs-awards-area pt-130 pb-160">
            <div className="container-fluid container-1886">
                {/* Header */}
                <div className="row align-items-end">
                    <div className="col-lg-3">
                        <div className="mg-awards-subtitle-wrap mb-80 tp_fade_anim" data-delay=".3">
                            <span className="ca-team-subtitle text-uppercase d-block mb-15">
                                <span>[ </span>Our achievements<span> ]</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mg-awards-title-wrap ml-20 mb-20">
                            <h2 className="mg-awards-title tp-ff-sequel-bold-head lh-1 reveal-text">Awards.</h2>
                            <span className="mg-awards-title-sm tp-ff-sequel-bold-head">& Recognitions</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div
                            className="mg-awards-title mb-80 d-flex justify-content-lg-end tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <div className="tp-btn-group tp-btn-group-transparent-2">
                                <SmartLink className="tp-btn-circle" href="/contact-us">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" href="/contact-us">
                                    Discover now
                                </SmartLink>
                                <SmartLink className="tp-btn-circle" href="/contact-us">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards list */}
                <div className="row">
                    <div className="col-xxl-9 offset-xxl-3">
                        <div className="mg-awards-item-wrap ml-20 mp-awards-item-wrap pt-30 cs-awards-item-wrap fix">
                            {motionGraphicawardsData.map((award, index) => (
                                <div key={index} className="right-item-animetion">
                                    <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
                                        <div className="mp-awards-left mb-20">
                                            <span className="count">
                                                <ArrowIconEight />
                                                {award.description}
                                            </span>
                                            <span>{award.title}</span>
                                        </div>
                                        <div className="mp-awards-right mb-20">
                                            <span>{award.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicAward;