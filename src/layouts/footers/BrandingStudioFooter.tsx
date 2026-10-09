import { QUICK_LINKS, SOCIAL_LINKS } from "@/data/footer-data";
import { getCurrentYear } from "@/utils/getCurrentYear";
import SmartLink from "@/components/common/SmartLink";
import { ArrowIconTwo } from "@/svg/ArrowIcons";
import Image from "next/image";
import Link from "next/link";

const BrandingStudioFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area mp-footer-style cs-footer-style pt-105 tp-section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-3 col-lg-4">
                            <div className="tp-footer-logo mb-40 tp_fade_anim" data-delay=".4">
                                <Link href="/">
                                    <Image width={230} height={56} src="/assets/img/logo/logo-white.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-8">
                            <div className="tp-footer-widget tp-footer-link cs-footer-widget-1 mb-30 tp_fade_anim" data-delay=".5">
                                <h5 className="tp-footer-subtitle text-white mb-25">Quick links</h5>
                                <div className="tp-hero-social">
                                    {QUICK_LINKS.map((item) => (
                                        <Link key={item} href="#">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 offset-xxl-2 col-xl-4 offset-xl-1">
                            <div className="tp-footer-widget cs-footer-widget-2 mb-30 tp_fade_anim" data-delay=".6">
                                <span className="tp-footer-dec text-white">Searching for exceptional talents?</span>
                                <h4 className="tp-footer-email tp-ff-sequel-roman text-white"><Link href="mailto:cunnet@gmail.com">cunnet@gmail.com</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area tp-about-border mt-65 pt-30 pb-10">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-5">
                                <div className="tp-footer-copyright-wrap mb-20 tp_fade_anim" data-delay=".3">
                                    <span className="tp-footer-copyright">Powered by ThemePure</span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="tp-footer-copyright-social mb-20 tp_fade_anim" data-delay=".5">
                                    {SOCIAL_LINKS.slice(0, 4).map((social) => (
                                        <Link key={social} href="#" className="flex items-center gap-1">
                                            {social} <ArrowIconTwo />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="tp-footer-copyright-wrap text-lg-end mb-20 tp_fade_anim" data-delay=".7">
                                    <span className="tp-footer-copyright">Copyright © <span className="update-year">{getCurrentYear()}</span></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="tp-title-anim no-animrtion text-center fix pb-15 tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <h2 className="tp-title-anim-inner cs-footer-bigtitle justify-content-center tp-ff-sequel-heavy-disp text-uppercase text-white">
                                        <SmartLink className="tp-title-text" href="/contact-us">Say Hello!</SmartLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BrandingStudioFooter;