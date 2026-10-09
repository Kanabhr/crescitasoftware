import { ArrowIconEleven, ArrowIconThirteen } from '@/svg/ArrowIcons';
import SmartLink from '../common/SmartLink';
import Image from 'next/image';

const CareerIntroArea = () => {
    return (
        <div className="tp-career-banner-area about-us-spacing p-relative z-index-1 pb-80">
            <div className="tp-breadcrumb-bg">
                <Image width={1905} height={539} src="/assets/img/breadcrumb/background.png" alt="background image"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div>
                            <div className="tp-service-details-hero-subtitle mb-20 tp_fade_anim" data-delay=".3">
                                <span className="text-uppercase fw-500">Career{" "}
                                    <ArrowIconEleven/>
                                </span>
                            </div>
                            <h3 className="tp-career-title tp_fade_anim" data-delay=".5">Join us & make <span className="shape-1"><Image width={65} height={65} src="/assets/img/about/career/about-us-4-shape-1.png" alt="shape"/></span> <br/>
                                an impact through <br/>
                                <span className="shape-2"><Image width={176} height={76} src="/assets/img/about/career/career-user.png" alt="user image"/></span> design.
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="tp-career-btn">
                                <div className="st-hero-btn tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                    <SmartLink href="/team">
                                        <span className="st-hero-btn-svg">
                                        <ArrowIconThirteen/>
                                        </span>
                                        <span className="st-hero-btn-text">Meet with <br/> the team</span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CareerIntroArea;