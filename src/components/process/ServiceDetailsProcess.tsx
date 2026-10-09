import { ArrowIconTwelve } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";

const processSteps = [
    {
        count: "01",
        title: "Research <br> And Analysis",
        desc: "Conduct user research (interviews, surveys, analytics).",
    },
    {
        count: "02",
        title: "Design <br> And Prototyping",
        desc: "Transform wireframes into high-fidelity UI designs.",
    },
    {
        count: "03",
        title: "Testing <br> And Iteration",
        desc: "Conduct usability testing to gather user feedback.",
    },
    {
        count: "04",
        title: "Prepare for <br> Delivery",
        desc: "Track performance using analytics and user feedback.",
    },
];

const ServiceDetailsProcess = () => {
    return (
        <div className="tp-process-area pt-85 pb-130 p-relative z-index-1">
            <div className="container">
                <div className="row">
                    {/* Title */}
                    <div className="col-12">
                        <div className="text-center mb-40">
                            <h2 className="tp-section-title reveal-text fs-72">
                                Product making for <br /> friendly users
                            </h2>
                        </div>
                    </div>

                    <div className="col-xxl-10 offset-xxl-1 col-12">
                        {/* Border */}
                        <div className="tp-process-border d-none d-lg-block">
                            <svg viewBox="0 0 1320 6" fill="none">
                                <path
                                    d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"
                                    fill="currentColor"
                                    fillOpacity="0.1"
                                />
                            </svg>
                        </div>

                        {/* Process Items */}
                        <div className="row">
                            {processSteps.map((item, index) => (
                                <div key={item.count} className="col-lg-3 col-md-6 col-sm-6">
                                    <div
                                        className="tp-process-item text-center mb-30 tp_fade_anim"
                                        data-delay={`.${3 + index}`}
                                        data-fade-from="left"
                                    >
                                        <span className="tp-process-count d-inline-block fw-600 mb-45">
                                            {item.count}
                                        </span>
                                        <h3 className="tp-process-title mb-20" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                        <p className="tp-process-dec">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="col-12">
                        <div
                            className="tp-process-bottom text-center mt-40 tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <p className="tp-process-bottom-para">
                                Don&apos;t hesitate collaborate with expertise –
                                <SmartLink
                                    href="/contact-us"
                                    className="ml-20 d-inline-block lh-0 tp-btn-switch-animation fw-700"
                                >
                                    <span className="d-flex align-items-center justify-content-center">
                                        <span className="btn-text">Let&apos;s Talk</span>
                                        <span className="btn-icon">
                                            <ArrowIconTwelve />
                                        </span>
                                        <span className="btn-icon">
                                            <ArrowIconTwelve />
                                        </span>
                                    </span>
                                </SmartLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsProcess;