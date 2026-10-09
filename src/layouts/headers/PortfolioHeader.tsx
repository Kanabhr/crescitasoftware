"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import HeaderMenu from "@/components/layout/HeaderMenu";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";

const PortfolioHeader = ({ buttonVariantClass = "", buttonBackgroundClass = "", stickyButtonClass = "hamburger-sticky-menu" }) => {
    const { toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div className="tp-header-area tp-header-spacing header-transparent">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="tp-header-logo">
                                    <Link href="/">
                                        <Image width={140} height={34} src="/assets/img/logo/logo-white.png" alt="logo white" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 d-none">
                                <div className="tp-main-menu d-flex justify-content-center">
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-header-right d-flex justify-content-end">
                                    <button onClick={toggleSecondaryOffcanvas} id="header-sticky" className={`hamburger-open-btn tp-header-sidebar-btn ${stickyButtonClass} ${buttonBackgroundClass} ${buttonVariantClass} ${isSticky ? " header-sticky" : ""}`}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*secondary off canvas */}
            <OffCanvasPanelTwo />
            {/*secondary off canvas */}
        </>
    );
};

export default PortfolioHeader;