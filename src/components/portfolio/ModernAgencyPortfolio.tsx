import ModernAgencyPortSliderItem from "./subComponents/ModernAgencyPortSliderItem";
import { ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";
import Link from "next/link";

const ModernAgencyPortfolio = () => {
    return (
        <div className="mp-portfolio-area tp-animate-tab pt-145 pb-145">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="tp-section-title tp-ff-sequel-roman reveal-text mb-20">Recent Work</h2>
                    </div>
                    <div className="col-lg-7">
                        <div className="mp-portfolio-tab text-lg-end mt-20">
                            <ul role="tablist">
                                <li className="nav-tab-item" role="presentation">
                                    <Link href="#categories" className="active" data-bs-toggle="tab">All Categories</Link>
                                </li>
                                <li className="nav-tab-item" role="presentation">
                                    <Link href="#creative" data-bs-toggle="tab">Creative</Link>
                                </li>
                                <li className="nav-tab-item" role="presentation">
                                    <Link href="#marketing" data-bs-toggle="tab">Marketing</Link>
                                </li>
                                <li className="nav-tab-item" role="presentation">
                                    <Link href="#style" data-bs-toggle="tab">Style</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tab-content p-relative">
                            <div className="tab-pane active show" id="categories" role="tabpanel">
                                <div className="row">
                                    <ModernAgencyPortSliderItem />
                                </div>
                            </div>
                            <div className="tab-pane" id="creative" role="tabpanel">
                                <div className="row">
                                    <ModernAgencyPortSliderItem />
                                </div>
                            </div>
                            <div className="tab-pane" id="marketing" role="tabpanel">
                                <div className="row">
                                    <ModernAgencyPortSliderItem />
                                </div>
                            </div>
                            <div className="tab-pane" id="style" role="tabpanel">
                                <div className="row">
                                    <ModernAgencyPortSliderItem />

                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-70">
                            <div className="tp-btn-group tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <SmartLink className="tp-btn-circle" href="/portfolio">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" href="/portfolio">See All Work</SmartLink>
                                <SmartLink className="tp-btn-circle" href="/portfolio">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyPortfolio;