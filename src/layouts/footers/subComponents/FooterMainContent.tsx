import SmartLink from "@/components/common/SmartLink";
import { ArrowIconTwo } from "@/svg/ArrowIcons";
import { getCurrentYear } from "@/utils/getCurrentYear";
import Image from "next/image";
import Link from "next/link";

const FooterMainContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-4 col-lg-6">
                    <div className="tp-footer-widget tp-footer-link mb-30 tp_fade_anim" data-delay=".4">
                        <h5 className="tp-footer-subtitle text-white mb-25">Quick links</h5>
                        <div className="tp-hero-social">
                            <Link href="#">About</Link>
                            <Link href="#">Who we are</Link>
                            <Link href="#">Services</Link>
                            <Link href="#">Projects</Link>
                            <Link href="#">Blog</Link>
                            <Link href="#">Pricing</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-5 offset-xxl-5 offset-xl-3 col-lg-6">
                    <div className="tp-footer-widget ml-40 mb-30 tp_fade_anim" data-delay=".5">
                        <span className="tp-footer-dec text-white">Searching for exceptional talents?</span>
                        <h4 className="tp-footer-email tp-ff-sequel-roman text-white"><Link href="mailto:cunnet@gmail.com">cunnet@gmail.com</Link></h4>
                    </div>
                </div>
            </div>
            <div className="row align-items-end mt-35">
                <div className="col-lg-4">
                    <div className="tp-footer-logo mb-30 tp_fade_anim" data-delay=".6">
                        <Link href="/">
                            <Image width={229} height={56} src="/assets/img/logo/logo-white.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tp-footer-text text-lg-end tp_fade_anim" data-delay=".7">
                        <h2 className="tp-footer-bigtext text-white text-uppercase tp-ff-sequel-bold-head">
                            <SmartLink href="/contact-us" className="text-scale-anim">Say Hello!</SmartLink>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="tp-footer-copyright-area tp-about-border mt-70 pt-30 pb-10">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-5">
                        <div className="tp-footer-copyright-wrap mb-20">
                            <span className="tp-footer-copyright">Powered by ThemePure</span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tp-footer-copyright-social mb-20">
                            <Link href="#">Facebook{" "}
                                <ArrowIconTwo />
                            </Link>
                            <Link href="#">Twitter{" "}
                                <ArrowIconTwo />
                            </Link>
                            <Link href="#">Instagram{" "}
                                <ArrowIconTwo />
                            </Link>
                            <Link href="#">LinkedIn
                                <ArrowIconTwo />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="tp-footer-copyright-wrap text-lg-end mb-20">
                            <span className="tp-footer-copyright">Copyright © <span className="update-year">{getCurrentYear()}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMainContent;
