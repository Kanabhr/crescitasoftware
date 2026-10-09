import { OFFICE_LOCATIONS, QUICK_LINKS, SOCIAL_LINKS } from "@/data/footer-data";
import DigitalSCopyright from "./subComponents/DigitalSCopyright";
import SmartLink from "@/components/common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Link from "next/link";

/* ---------------- component ---------------- */
const DigitalStudioFooter = () => {
    return (
        <footer>
            <div className="tp-footer-area pt-130 pb-70">
                <div className="container">
                    <div className="row">
                        {/* Big Title */}
                        <div className="col-12">
                            <div className="ca-footer-bigtitle-wrap text-center mb-80">
                                <h2 className="tp-hero-title text-scale-anim tp-ff-sequel-bold-head">
                                    CunnetAgency
                                </h2>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="tp-footer-widget mb-30 tp_fade_anim" data-delay=".3">
                                <h2 className="ca-section-title mb-20 lh-1">
                                    Start Building <br />
                                    Your Dream Project <br />
                                    Today
                                </h2>

                                <SmartLink
                                    href="/contact-us"
                                    className="tp-btn ca-footer-btn tp-ff-inter"
                                >
                                    <span>
                                        <span className="text-1">Discover Now</span>
                                        <span className="text-2">Discover Now</span>
                                    </span>
                                    <i>
                                        <ButtonArrowIcon />
                                        <ButtonArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-xxl-3 col-xl-4 col-lg-6">
                            <div
                                className="tp-footer-widget tp-footer-link ca-footer-link mb-30 tp_fade_anim"
                                data-delay=".4"
                            >
                                <h5 className="tp-footer-subtitle ca-footer-subtitle tp-ff-inter mb-25">
                                    Quick links
                                </h5>

                                <div className="tp-hero-social">
                                    {QUICK_LINKS.map((item) => (
                                        <Link key={item} href="#">
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social & Office */}
                        <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-6 col-sm-8">
                            <div className="tp-footer-widget ca-footer-social-item-wrap d-flex justify-content-between ml-45 mr-40 mb-30">
                                <FooterList
                                    title="Social"
                                    items={SOCIAL_LINKS}
                                    delay=".5"
                                />
                                <FooterList
                                    title="Office"
                                    items={OFFICE_LOCATIONS}
                                    delay=".6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <DigitalSCopyright />
        </footer>
    );
};

export default DigitalStudioFooter;

/* ---------------- sub component ---------------- */
const FooterList = ({
    title,
    items,
    delay,
}: {
    title: string;
    items: string[];
    delay: string;
}) => (
    <div className="ca-footer-social-item tp_fade_anim" data-delay={delay}>
        <h5 className="tp-footer-subtitle ca-footer-subtitle tp-ff-inter mb-15">
            {title}
        </h5>
        <ul>
            {items.map((item) => (
                <li key={item}>
                    <Link href="#">{item}</Link>
                </li>
            ))}
        </ul>
    </div>
);
