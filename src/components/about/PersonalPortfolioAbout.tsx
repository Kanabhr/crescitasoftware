import { ArrowBottomIcon, ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";
import Image from "next/image";
import Link from "next/link";

const PersonalPortfolioAbout = () => {
    return (
        <div className="pp-about-area pt-145 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-3">
                        <div className="mp-hero-awards pp-about-awards mb-30 p-relative d-inline-block tp_fade_anim" data-delay=".3" data-fade-from="bottom" data-ease="bounce">
                            <Image width={136} height={136} className="rotate-infinite" src="/assets/img/about/pp/text.png" alt="shape" />
                            <Image width={52} height={52} className="mp-hero-w-logo" src="/assets/img/about/pp/star.png" alt="star image" />
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-9">
                        <div className="pp-about-content">
                            <h2 className="pp-about-title mb-35 tp_fade_anim" data-delay=".3">I’m Cunnet <span></span> a self though & self learned<br />
                                designer based in USA. I started as a financial<br />
                                planner & social media marketer, but now I do mix<br />
                                of everything from <Link href="#">Product</Link> Design <Link href="#">Photography</Link> <br />
                                Web Design</h2>
                            <div className="pp-about-dec-wrap ml-115">
                                <div className="tp_fade_anim" data-delay=".5">
                                    <p className="pp-about-dec mb-50">Today, I specialize in a wide range of disciplines, including product design, web design, and photography.
                                        I believe in creating purposeful designs that not only look beautiful but also deliver value. Every project I take on
                                        is an opportunity to experiment, learn and push boundaries—whether it’s building user-friendly websites, crafting
                                        compelling brand visuals, or capturing powerful product photography.</p>
                                </div>
                                <div className="pp-about-btn d-flex flex-wrap gap-3">
                                    <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                        <Link href="assets/img/cv/mycv.docx" className="tp-btn pp-btn-download">
                                            <span>
                                                <span className="text-1">Download CV</span>
                                                <span className="text-2">Download CV</span>
                                            </span>
                                            <ArrowBottomIcon />
                                        </Link>
                                    </div>
                                    <div className="tp-btn-group tp-btn-group-transparent tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                                        <SmartLink className="tp-btn-circle" href="/about-me">
                                            <ArrowIconFive />
                                        </SmartLink>
                                        <SmartLink className="tp-btn z-index-1" href="/about-me">Discover now</SmartLink>
                                        <SmartLink className="tp-btn-circle" href="/about-me">
                                            <ArrowIconFive />
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioAbout;