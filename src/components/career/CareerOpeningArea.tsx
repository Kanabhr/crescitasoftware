import { ArrowIconEleven, ButtonArrowIcon } from "@/svg/ArrowIcons";
import { careerData } from "@/data/career-data";
import SmartLink from "../common/SmartLink";

const CareerOpeningArea = () => {
    return (
        <section className="tp-career-opening-ptb pb-160">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-benefit-heading mb-100">
                            <div
                                className="tp-service-details-hero-subtitle mb-10 tp_fade_anim"
                                data-delay=".3"
                            >
                                <span className="text-uppercase fw-500">
                                    Career <ArrowIconEleven />
                                </span>
                            </div>
                            <h3 className="tp-section-title lts tp_fade_anim tp-ff-sequel-semi-bold">
                                Current Openings
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Table header */}
                <div className="tp-career-opening-item">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-career-opening-heading">
                                <span>Position</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-career-opening-heading">
                                <span>Roles</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="tp-career-opening-heading">
                                <span>Type</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Openings list */}
                {careerData.map((item, index) => (
                    <div className="tp-career-opening-item ptb" key={index}>
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="tp-career-opening-title">
                                    <h4 className="tp-career-opening-title-name">{item?.topInfo?.title}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-career-opening-role">
                                    <span>({item?.roles})</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-career-opening-Type d-flex justify-content-between align-items-center">
                                    <span>{item.topInfo.info.find(i => i.label === "Job Type")?.value}</span>
                                    <div className="tp-career-opening-btn">
                                        <SmartLink className="tp-btn" href={`/career-details/${item?.id}`}>
                                            <span>
                                                <span className="text-1">Apply Now</span>
                                                <span className="text-2">Apply Now</span>
                                            </span>
                                            <i>
                                                <ButtonArrowIcon />
                                                <ButtonArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerOpeningArea;
