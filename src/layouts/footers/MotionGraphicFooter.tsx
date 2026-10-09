import { DribbleIcon, FacebookIcon, InstragramTwoIcon, TwittorIcon } from "@/svg/SocialIcons";
import { ArrowIconNine } from "@/svg/ArrowIcons";
import { QUICK_LINKS } from "@/data/footer-data";
import Image from "next/image";
import Link from "next/link";

const MotionGraphicFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area pt-100 p-relative z-index-1 tp-section-bg">
                <Image width={1905} height={1109} className="mg-footer-noice" src="/assets/img/footer/noise.png" alt="noise image" />
                <div className="container-fluid container-1886">
                    <div className="row align-items-end">
                        <div className="col-xl-5">
                            <div className="mg-footer-widget mb-25 tp_fade_anim" data-delay=".3">
                                <h2 className="tp-section-title tp-ff-inter fw-600 text-white">Helping start-<br /> ups scale & grow.</h2>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7">
                            <div className="mg-footer-widget mb-20 ml-85 tp_fade_anim" data-delay=".4">
                                <h4 className="mg-footer-email tp-footer-email fs-82 fw-600 text-decoration-none tp-ff-inter">
                                    <Link href="mailto:hello@cunnet.com">hello@cunnet.com
                                        <ArrowIconNine />
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="mg-footer-main-style pt-115">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-4 offset-xxl-5 offset-xl-4 col-lg-6 col-md-6">
                                <div className="mg-footer-widget tp-footer-link mb-30 ml-85 tp_fade_anim" data-delay=".5">
                                    <h5 className="tp-footer-subtitle mg-footer-subtitle text-white mb-25">Quick links</h5>
                                    <div className="tp-hero-social">
                                        {QUICK_LINKS.map((item) => (
                                            <Link key={item} href="#">
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 offset-xxl-1 col-lg-6 col-md-6">
                                <div className="mg-footer-widget mg-footer-info ml-20 mb-30 tp_fade_anim" data-delay=".6">
                                    <h5 className="tp-footer-subtitle mg-footer-subtitle text-white mb-20">Contact</h5>
                                    <Link className="mg-footer-phone mb-10" href="tel:+1235678901">+ 123 567 8901</Link>
                                    <Link className="mg-footer-phone" href="https://www.google.com/maps" target="blank">4517 Washington Ave. Manchester,<br /> Kentucky 39495</Link>
                                    <div className="tp-offcanvas-social">
                                        <ul>
                                            <li>
                                                <Link href="#"><FacebookIcon /></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><TwittorIcon /></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><DribbleIcon /></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><InstragramTwoIcon /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area p-relative z-index-1 mg-footer-copyright-style pt-30 mt-55 pb-10">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <div className="tp-footer-copyright-wrap mb-20">
                                    <span className="tp-footer-copyright text-white">©<span className="update-year"></span> Cunnet Design Studio.</span>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="tp-footer-copyright-wrap text-lg-end mb-20">
                                    <Link href="#" className="tp-footer-copyright mr-120">Terms and Conditions</Link>
                                    <Link href="#" className="tp-footer-copyright">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mg-footer-bigtext-wrap no-animrtion text-center tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                    <h2 className="mg-footer-bigtext tp-ff-sequel-bold-head text-uppercase">Cunnet</h2>
                </div>
            </div>
        </footer>
    );
};

export default MotionGraphicFooter;