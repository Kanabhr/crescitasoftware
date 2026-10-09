import { ArrowBottomIcon, ArrowIconSix } from "@/svg/ArrowIcons";
import Link from "next/link";

const AboutMeArea = () => {
    return (
        <div className="about-me-area about-me-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="tp-about-subtitle-wrap mb-30">
                            <span className="tp-about-subtitle tp_fade_anim" data-delay=".3">
                                <ArrowIconSix />{" "}
                                About Us
                            </span>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8 col-lg-10">
                        <div className="pp-about-content">
                            <h2 className="pp-about-title mb-30 tp_fade_anim" data-delay=".4">I&apos;m cunnet a self though & self learned
                                designer based in USA. I started as a financial
                                planner & social media marketer, but now I do
                                mix of everything from product design
                                photography web design</h2>
                            <div className="pp-about-dec-wrap">
                                <div className="tp_fade_anim" data-delay=".5">
                                    <p className="pp-about-dec mb-50">Today, I specialize in a wide range of disciplines,
                                        including product design, web design, and photography.
                                        I believe in creating purposeful designs that not only look beautiful but also deliver
                                        value. Every project I take on
                                        is an opportunity to experiment, learn and push boundaries—whether it&apos;s building
                                        user-friendly websites, crafting
                                        compelling brand visuals, or capturing powerful product photography.</p>
                                </div>
                                <div className="pp-about-btn d-flex flex-wrap gap-3">
                                    <Link href="assets/img/cv/mycv.docx" className="tp-btn pp-btn-download">
                                        <span>
                                            <span className="text-1">Download CV</span>
                                            <span className="text-2">Download CV</span>
                                        </span>{" "}
                                        <ArrowBottomIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeArea;