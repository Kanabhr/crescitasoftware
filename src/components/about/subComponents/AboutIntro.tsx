import SmartLink from "@/components/common/SmartLink";
import { ArrowIcon, ButtonArrowIcon } from "@/svg";

const AboutIntro = () => {
    return (
        <div className="tp-about-title-wrap mb-30">
            <h2 className="tp-section-title tp-text-perspective">
                At cunnet, we don&apos;t just build websites or campaigns, we craft
                purpose-driven digital journeys.
                <span className="tp-about-btn-transform d-inline-block ml-20">
                    <SmartLink className="tp-btn tp-ff-inter" href="/about-us">
                        <span>
                            <span className="text-1">About Us</span>
                            <span className="text-2">About Us</span>
                        </span>
                        <i>
                            <ButtonArrowIcon />
                            <ButtonArrowIcon />
                        </i>
                    </SmartLink>
                </span>
            </h2>

            <div className="tp-about-subtitle-wrap mt-30">
                <span className="tp-about-subtitle">
                    <ArrowIcon /> About Us
                </span>
            </div>
        </div>
    );
};

export default AboutIntro;
