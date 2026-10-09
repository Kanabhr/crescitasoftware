"use client";
import { footerMenuData } from "@/data/footer-data";
import { getCurrentYear } from "@/utils/getCurrentYear";
import Link from "next/link";

const ShopFooter = () => {
    return (
        <footer>
            <div className="shop-footer-area shop-footer-bg">
                <div className="container">
                    <div className="row">
                        {footerMenuData.map((section, index) => (
                            <div key={section.id} className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div
                                    className={`shop-footer-widget shop-footer-widget-${index + 1} pt-85 pb-40 tp_fade_anim`}
                                    data-delay={section.delay}
                                >
                                    <h4 className="shop-footer-title tp-ff-inter fw-600">
                                        {section.title}
                                    </h4>
                                    <ul>
                                        {section.links.map((link, index) => (
                                            <li key={index}>
                                                <Link href={link.href}>{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BIG BRAND TEXT */}
                <div className="container-fluid container-1886">
                    <div className="row">
                        <div
                            className="col-12 text-center tp_fade_anim"
                            data-delay=".7"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <h2 className="shop-footer-bigtext tp-title-anim fix pt-45 pb-20 tp-ff-jost fw-600 text-uppercase">
                                <Link href="/" className="tp-title-text">
                                    zonspace
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="shop-footer-copyright-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-5">
                                <div className="shop-footer-copyright mb-10">
                                    <span>© Cunnet | <span className="update-year">{getCurrentYear()}</span></span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7">
                                <div className="shop-footer-copyright text-sm-end mb-10">
                                    <span>
                                        Design & Dev: <Link href="#">ThemePure</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ShopFooter;
