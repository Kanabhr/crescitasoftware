import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";

const DigitalStudioCtaArea = () => {
    return (
        <div className="ca-testimonial-spacing fix tp-section-bg">
            <div className="ca-cta-area ca-cta-spacing pt-180 pb-120 p-relative z-index-1">
                <div className="mil-scale-img ca-cta-scale" data-value-1="1.45" data-value-2="1">
                    <Image width={754} height={504} className="img-fluid ca-cta-shape" src="/assets/img/cta/shape.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row align-content-end">
                        <div className="col-lg-7">
                            <div className="ca-cta-title-wrap p-relative mb-40">
                                <h2 className="ca-section-title fs-100 text-white lh-1 mb-50 reveal-text">Lets talk about<br /> your project!</h2>
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink className="tp-btn tp-btn-red tp-ff-inter" href="/contact-us">
                                        <span>
                                            <span className="text-1">Contact Me</span>
                                            <span className="text-2">Contact Me</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                                <Image width={376} height={376} className="ca-cta-shape-2 d-none d-sm-inline-block" src="/assets/img/cta/shape-3.png" alt="shape" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ca-cta-thumb ml-100">
                                <Image width={234} height={234} src="/assets/img/cta/shape-2.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioCtaArea;