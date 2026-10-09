import { digitalStudioFaq } from "@/data/faq-data";
import SmartLink from "../common/SmartLink";
import { ArrowIconFour } from "@/svg";
import Image from "next/image";

const DigitalStudioFaqArea = () => {
    return (
        <div className="ca-faq-area pt-135 pb-145">
            <div className="container">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-5">
                        <div
                            className="ca-faq-title-wrap mb-40 tp_fade_anim"
                            data-delay=".3"
                        >
                            <span className="ca-team-subtitle text-uppercase d-block mb-15">
                                <span>[ </span>Our Faq<span> ]</span>
                            </span>
                            <Image width={131} height={92}
                                className="mb-10"
                                src="/assets/img/faq/faq-thumb.png"
                                alt="thumb"
                            />

                            <h2 className="ca-section-title mb-15">Have Questions</h2>
                            <p className="tp-faq-dec mb-35">
                                Let us Know how we can assist
                            </p>

                            <SmartLink
                                href="/contact-us"
                                className="tp-btn tp-btn-xl tp-btn-grey tp-btn-switch-animation"
                            >
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="btn-text">Contact Me</span>

                                    {[1, 2].map((i) => (
                                        <span key={i} className="btn-icon">
                                            <ArrowIconFour />
                                        </span>
                                    ))}
                                </span>
                            </SmartLink>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-xl-7">
                        <div className="tp-faq ml-115">
                            <div className="accordion" id="accordionExample">
                                {digitalStudioFaq.map((item) => (
                                    <div
                                        key={item.id}
                                        className="tp-faq-item tp_fade_anim"
                                        data-delay=".3"
                                    >
                                        <h2 className="accordion-header">
                                            <button
                                                className={`tp-faq-button ${item.isOpen ? "" : "collapsed"
                                                    }`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={item.isOpen ? "true" : "false"}
                                                aria-controls={item.id}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>

                                        <div
                                            id={item.id}
                                            className={`tp-faq-collapse collapse ${item.isOpen ? "show" : ""
                                                }`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="tp-faq-body">
                                                <p>
                                                    {item?.answer?.split("\n").map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </p>
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

export default DigitalStudioFaqArea;
