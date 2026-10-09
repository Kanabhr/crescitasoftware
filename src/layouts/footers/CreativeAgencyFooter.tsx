import { QUICK_LINKS, SOCIAL_LINKS } from "@/data/footer-data";
import BrandLogo from "../../components/common/BrandLogo";
import { getCurrentYear } from "@/utils/getCurrentYear";
import SmartLink from "@/components/common/SmartLink";
import { ArrowIconTwo } from "@/svg/ArrowIcons";
import { ButtonArrowIcon } from "@/svg";
import Link from "next/link";

const CreativeAgencyFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="tp-footer-area pt-145">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="tp-footer-title-wrap mb-55">
                                <h2 className="tp-section-title tp-text-perspective">Let&apos;s build something amazing together{" "}
                                    <span className="tp-about-btn-transform d-inline-block">
                                        <SmartLink className="tp-btn tp-btn-border tp-ff-inter" href="/contact-us">
                                            <span>
                                                <span className="text-1">Get In Touch</span>
                                                <span className="text-2">Get In Touch</span>
                                            </span>
                                            <i>
                                                <ButtonArrowIcon />
                                                <ButtonArrowIcon />
                                            </i>
                                        </SmartLink>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="tp-about-border pt-100">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-4 col-lg-6">
                                <div className="tp-footer-widget tp-footer-link mb-30 tp_fade_anim" data-delay=".4">
                                    <h5 className="tp-footer-subtitle mb-25">Quick links</h5>
                                    <div className="tp-hero-social">
                                        {QUICK_LINKS.map((item) => (
                                            <Link key={item} href="#">
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-5 offset-xxl-5 offset-xl-3 col-lg-6">
                                <div className="tp-footer-widget ml-40 mb-30 tp_fade_anim" data-delay=".5">
                                    <span className="tp-footer-dec">Searching for exceptional talents?</span>
                                    <h4 className="tp-footer-email tp-ff-sequel-roman"><Link href="mailto:cunnet@gmail.com">cunnet@gmail.com</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-end mt-35">
                            <div className="col-lg-4">
                                <div className="tp-header-logo tp-footer-logo mb-30 tp_fade_anim" data-delay=".6">
                                    <BrandLogo logo1Width={229} logo1Height={48} logo2Width={229} logo2Height={56} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="tp-footer-text text-lg-end tp_fade_anim" data-delay=".7">
                                    <h2 className="tp-footer-bigtext text-uppercase tp-ff-sequel-bold-head">
                                        <SmartLink href="/contact-us" className="text-scale-anim">Say Hello!</SmartLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area tp-about-border pt-30 mt-70 pb-10">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-5">
                                <div className="tp-footer-copyright-wrap mb-20">
                                    <span className="tp-footer-copyright">Powered by ThemePure</span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="tp-footer-copyright-social mb-20">
                                    {SOCIAL_LINKS.slice(0, 4).map((social) => (
                                        <Link key={social} href="#" className="flex items-center gap-1">
                                            {social} <ArrowIconTwo />
                                        </Link>
                                    ))}
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
            </div>
            {/* -- footer area end -- */}
        </footer>
    );
};

export default CreativeAgencyFooter;