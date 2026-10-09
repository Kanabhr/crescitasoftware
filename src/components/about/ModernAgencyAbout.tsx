import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ModernAgencyAbout = () => {
    return (
        <div className="mp-about-area pt-155 pb-160 tp-section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="mp-about-content text-center">
                            <h3 className="mp-about-logo text-white tp-ff-sequel-semi-bold mb-30">Cunnet</h3>
                            <h4 className="mp-about-title tp-ff-sequel-semi-bold text-white mb-40">Welcome to  Cunnet — where <Image width={66} height={39} className="mp-about-thumb" src="/assets/img/about/mp/thumb.jpg" alt="thumb" /> design innovation converges with cutting-edge<br />
                                technology to bring your brand&apos;s essence to life online. We are driven by a passion driven<br />
                                for creativity, weaving together <Image width={66} height={39} className="mp-about-thumb" src="/assets/img/about/mp/thumb-2.jpg" alt="thumb" /> stunning visuals, seamless user experiences,<br />
                                and strategic digital thinking. Every project is a <Image width={66} height={39} className="mp-about-thumb" src="/assets/img/about/mp/thumb-3.jpg" alt="" /> bespoke journey<br />
                                we collaborate closely with you to understand</h4>
                            <Link className="tp-btn ca-footer-btn tp-ff-inter text-white" href="about-us">
                                <span>
                                    <span className="text-1">Discover Now</span>
                                    <span className="text-2">Discover Now</span>
                                </span>
                                <i>
                                    <ButtonArrowIcon />
                                    <ButtonArrowIcon />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyAbout;