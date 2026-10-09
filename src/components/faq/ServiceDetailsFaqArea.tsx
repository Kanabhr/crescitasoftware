const faqItems = [
    {
        id: "One",
        title: "Complete Brand Design",
        content:
            "Branding design is the process of creating a unique identity that visually and strategically represents a business. It includes logo design, color schemes typography, and brand messaging to ensure consistency across all platforms.",
        active: true,
    },
    {
        id: "Two",
        title: "Logo Design",
        content:
            "Branding design is the process of creating a unique identity that visually and strategically represents a business. It includes logo design, color schemes typography, and brand messaging to ensure consistency across all platforms.",
    },
    {
        id: "Three",
        title: "Graphic Design",
        content:
            "Branding design is the process of creating a unique identity that visually and strategically represents a business. It includes logo design, color schemes typography, and brand messaging to ensure consistency across all platforms.",
    },
    {
        id: "Four",
        title: "Infographic And Other",
        content:
            "Branding design is the process of creating a unique identity that visually and strategically represents a business. It includes logo design, color schemes typography, and brand messaging to ensure consistency across all platforms.",
    },
];

const ServiceDetailsFaqArea = () => {
    return (
        <div className="tp-faq-area pb-130">
            <div className="container">
                <div className="row">
                    {/* Subtitle */}
                    <div className="col-xxl-5 col-xl-3">
                        <div className="tp-faq-subtitle mb-30">
                            <span className="text-uppercase fw-500">Why Choose Us</span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="col-xxl-7 col-xl-9">
                        <div className="tp-faq tp-service-details-faq-one tp-service-details-faq mb-30">
                            <h2 className="tp-section-title reveal-text fs-72 mb-30">
                                At cunnet, we don’t just
                                <br />
                                build website or campaigns
                                <br />
                                we craft purpose.
                            </h2>

                            <div className="accordion" id="accordionExample">
                                {faqItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="tp-faq-item tp_fade_anim"
                                        data-delay=".3"
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className={`tp-faq-button ${item.active ? "" : "collapsed"
                                                    }`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                aria-expanded={item.active ? "true" : "false"}
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {String(index + 1).padStart(2, "0")}. {item.title}
                                            </button>
                                        </h2>

                                        <div
                                            id={`collapse${item.id}`}
                                            className={`tp-faq-collapse collapse ${item.active ? "show" : ""
                                                }`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="tp-faq-body">
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsFaqArea;