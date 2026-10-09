"use client";
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import HeaderMenu from "@/components/layout/HeaderMenu";
import BrandLogo from "@/components/common/BrandLogo";
import SmartLink from "@/components/common/SmartLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import { ButtonArrowIcon } from "@/svg";

const DigitalStudioHeader = () => {
    const { togglePrimaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div className={`tp-header-area ca-header-style tp-header-spacing header-transparent ${isSticky ? "tp-header-sticky" : ""}`}>
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="col-xl-3 col-6">
                                <div className="tp-header-logo">
                                    <BrandLogo />
                                </div>
                            </div>
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="tp-main-menu d-flex justify-content-center">
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="tp-header-right d-flex justify-content-end align-items-center">
                                    <SmartLink className="tp-btn tp-btn-border-black tp-ff-inter d-none d-sm-inline-block" href="/contact-us">
                                        <span>
                                            <span className="text-1">Say Hello</span>
                                            <span className="text-2">Say Hello</span>
                                        </span>{" "}
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                    <button onClick={togglePrimaryOffcanvas} className="tp-menu-bar tp-header-sidebar-btn tp-header-sidebar-btn-bg ml-10">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* off canvas */}
            <OffCanvasPanel />
            {/* off canvas */}
        </>
    );
};

export default DigitalStudioHeader;