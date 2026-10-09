
import { ArrowBottomIconTwo } from "@/svg/ArrowIcons";
import { ScrollLink } from "../common/ScrollLink";

const FaqBreadcrumb = () => {
    return (
        <div className="tp-breadcrumb-area about-us-spacing pb-100">
            <div className="container">
                <div className="tp-breadcrumb-border pb-20">
                    <div className="row align-items-end">
                        <div className="col-lg-9">
                            <div className="tp-tp-breadcrumb-main mb-30">
                                <span className="tp-breadcrumb-subtitle fw-600 text-uppercase mb-10 tp_fade_anim" data-delay=".3">Our Faq</span>
                                <h2 className="tp-breadcrumb-title tp-ff-sequel-bold-head tp_fade_anim" data-delay=".5">Multiplied<br /> By One Hundred</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="inner-service-banner-scroll text-lg-end smooth mb-30">
                                <ScrollLink target="#faq">
                                    scroll to explore
                                    <span>
                                        <ArrowBottomIconTwo />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqBreadcrumb;