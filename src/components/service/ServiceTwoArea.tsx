import servicesData from "@/data/service-data";
import SmartLink from "../common/SmartLink";
import React from "react";

const ServiceTwoArea = () => {
    //display resume data
    const displayResumeData = servicesData.slice(9, 13);

    return (
        <div id="about" className="about-me-resume-area pt-145 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="tp-about-subtitle-wrap mb-20 mt-15 tp_fade_anim" data-delay=".3">
                            <span className="tp-section-subtitle text-uppercase">Specialties</span>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="about-me-resume-content mb-20 tp_fade_anim" data-delay=".5">
                            <h2 className="tp-section-title reveal-text">
                                At cunnet, we don&apos;t just<br />
                                build website or campaigns<br />
                                we craft purpose.
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="inner-service-2-wrap about-me-resume-wrap mt-50">
                            {displayResumeData.map((item, index) => (
                                <div key={index} className="about-me-resume-item tp_fade_anim" data-delay=".3">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="about-me-resume-date mb-30">
                                                <span>{item.year}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-me-resume-info ml-40 mb-30">
                                                <h3 className="about-me-resume-title tp-ff-sequel-semi-bold">
                                                    <SmartLink href={`/service-details/${item.id}`}>
                                                        {item.title.split(" ").map((t, i) => (
                                                            <React.Fragment key={i}>
                                                                {t}
                                                                <br />
                                                            </React.Fragment>
                                                        ))}
                                                    </SmartLink>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-me-resume-dec ml-50 mb-30">
                                                <p>{item.description}</p>
                                            </div>
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

export default ServiceTwoArea;