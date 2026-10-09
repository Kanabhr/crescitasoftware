"use client";

import Link from "next/link";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import HeaderMenu from "@/components/layout/HeaderMenu";
import SmartLink from "@/components/common/SmartLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import { ButtonArrowIcon, PlusIcon } from "@/svg";

/* ------------------ data ------------------ */

const mainMenu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-me" },
    { label: "Blog", href: "/blog" },
    { label: "Services", href: "/service" },
    { label: "Portfolio", href: "/portfolio-2" },
    { label: "Contact", href: "/contact-me" },
];

const socialLinks = ["Facebook", "LinkedIn", "Twitter"];

/* ------------------ reusable button ------------------ */

const ArrowButton = ({
    href,
    label,
    className = "tp-btn tp-btn-white text-uppercase",
}: {
    href: string;
    label: string;
    className?: string;
}) => (
    <SmartLink className={className} href={href}>
        <span>
            <span className="text-1">{label}</span>
            <span className="text-2">{label}</span>
        </span>
        <i>
            <ButtonArrowIcon />
            <ButtonArrowIcon />
        </i>
    </SmartLink>
);

/* ------------------ component ------------------ */

const PersonalPortfolioHeader = ({ wrapClass = "", textColor = false }) => {
    const { toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                {/* header area */}
                <div className={`tp-header-area tp-header-spacing header-transparent ${wrapClass}`}>
                    <div className="container">

                        {/* top */}
                        <div className="pp-header-top">
                            <div className="row">
                                <div className="col-lg-5 col-sm-6 col-12">
                                    <div className="pp-header-top-wrap mb-10">
                                        <h2 className={`pp-header-top-content tp-ff-sequel-semi-bold tp-char-animation ${textColor ? 'text-white' : ''}`}>
                                            <Link href="/">Cunnet</Link>
                                        </h2>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-sm-6 col-12">
                                    <div className="pp-header-top-logo-wrap d-flex align-items-start justify-content-sm-end justify-content-sm-start ml-55 mb-10">
                                        <h2 className={`pp-header-top-content tp-ff-sequel-semi-bold ${textColor ? 'text-white' : ''} tp-char-animation`}>
                                            Banten
                                        </h2>
                                        <button
                                            onClick={toggleSecondaryOffcanvas}
                                            className="pp-header-hamburger hamburger-open-btn mt-20 ml-40"
                                        >
                                            <PlusIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* main */}
                        <div className="pp-header-main mt-15 mb-20">
                            <div className="row align-items-center">

                                {/* menu */}
                                <div className="col-xxl-4 col-xl-4 d-none d-xl-block">
                                    <div className="pp-main-menu mb-20">
                                        <nav>
                                            <ul>
                                                {mainMenu.map(({ label, href }) => (
                                                    <li key={label}>
                                                        <SmartLink href={href}>{label}</SmartLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>

                                        {/* mobile */}
                                        <div className="tp-main-menu d-none">
                                            <nav className="tp-mobile-menu-active">
                                                <HeaderMenu />
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-4 offset-xxl-1">
                                    <div className="pp-header-btn ml-60 mb-20">
                                        <ArrowButton
                                            href="/contact-me"
                                            label="Start A Project"
                                            className="tp-btn pp-btn-nobg text-uppercase"
                                        />
                                    </div>
                                </div>

                                {/* socials */}
                                <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8">
                                    <div className="pp-header-social mb-20">
                                        {socialLinks.map((item) => (
                                            <ArrowButton key={item} href="#" label={item} className="tp-btn pp-btn-nobg text-uppercase"/>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* sticky button */}
                <button onClick={toggleSecondaryOffcanvas} id="header-sticky"
                    className={`hamburger-open-btn tp-header-sidebar-btn hamburger-sticky-menu ${isSticky ? "header-sticky" : ""}`}>
                    <span />
                    <span />
                </button>
            </header>

            <OffCanvasPanelTwo />
        </>
    );
};

export default PersonalPortfolioHeader;
