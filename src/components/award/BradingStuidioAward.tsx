import { brandingStudioAwardsData } from "@/data/awards-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

interface Award {
    name: string;
    description: string;
    year: string;
}

const AwardItem = ({ award }: { award: Award }) => (
    <div className="right-item-animetion">
        <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
            <div className="mp-awards-left mb-20">
                <span className="count">{award.name}</span>
                <span>{award.description}</span>
            </div>
            <div className="mp-awards-right mb-20">
                <span>{award.year}</span>
            </div>
        </div>
    </div>
);

const BradingStudioAward = () => {
    return (
        <div className="cs-awards-area pt-20 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cs-awards-title-wrap d-flex justify-content-center align-items-center">
                            <h2 className="cs-section-title fs-72 tp-ff-sequel-roman tp_fade_anim" data-delay=".3">
                                Awards & recognitions
                            </h2>
                            <div className="tp_fade_anim" data-delay=".4">
                                <SmartLink className="tp-btn cs-awards-btn tp-ff-inter text-uppercase" href="/portfolio">
                                    <span>
                                        <span className="text-1">See All Work</span>
                                        <span className="text-2">See All Work</span>
                                    </span>
                                    <i>
                                        <ButtonArrowIcon />
                                        <ButtonArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                            <h2 className="cs-section-title fs-72 tp-ff-sequel-roman tp_fade_anim" data-delay=".5">
                                that define excellence
                            </h2>
                        </div>
                    </div>

                    <div className="col-xxl-8 offset-xxl-4">
                        <div className="mp-awards-item-wrap pt-70 cs-awards-item-wrap fix ml-75">
                            {brandingStudioAwardsData.map((award, index) => (
                                <AwardItem key={index} award={award} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BradingStudioAward;
