import Image from "next/image";

const overviewList = [
    "Discovery & Research – Understanding your business, audience, and competition.",
    "Concept Development – Creating initial branding concepts and design ideas.",
    "Refinement & Testing – Perfecting the visuals and ensuring they resonate with your audience.",
    "Final Implementation – Delivering all branding assets with a detailed style guide.",
];

const ServiceOverview = () => {
    return (
        <div className="tp-service-overview-area pb-120">
            <div className="container">
                <div className="row">
                    {/* Title */}
                    <div className="col-12">
                        <div className="tp-service-overview-top mb-50">
                            <h2 className="tp-section-title reveal-text fs-72 mb-30">
                                Service Overview
                            </h2>

                            <div className="tp-process-border tp-service-overview-border d-none d-lg-block">
                                <svg viewBox="0 0 1320 6" fill="none">
                                    <path
                                        d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"
                                        fill="currentColor"
                                        fillOpacity="0.1"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-5">
                        <div className="tp-service-details-content mb-40 mr-115">
                            <p className="tp-service-details-dec mb-45">
                                Branding design is the process of creating a unique identity that
                                visually and strategically represents a business. It includes
                                logo design, color schemes, typography, and brand messaging to
                                ensure consistency across all platforms.
                            </p>

                            <h5 className="tp-service-details-title mb-30">
                                Our Approach to Branding
                            </h5>

                            <ul>
                                {overviewList.map((item, index) => (
                                    <li key={index}>
                                        <i className="fa-regular fa-circle-check"></i>
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="col-lg-7">
                        <div className="tp-service-thumb mb-30">
                            <Image
                                src="/assets/img/service/details/service.jpg"
                                alt="service image"
                                width={991}
                                height={620}
                                style={{ width: "100%", height: "auto" }}
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;