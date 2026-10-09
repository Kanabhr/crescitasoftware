"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import HeaderMenu from "@/components/layout/HeaderMenu";
import BrandLogo from "@/components/common/BrandLogo";
import SmartLink from "@/components/common/SmartLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import { ButtonArrowIcon, SearchIcon } from "@/svg";
import useGlobalContext from "@/hooks/useContext";

const MotionGraphicHeader = () => {
    const { toggleSearch, togglePrimaryOffcanvas, toggleSecondaryOffcanvas } = useGlobalContext();
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                <div className="tp-header-area mg-header-style header-transparent">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                                <div className="tp-main-menu mg-main-menu">
                                    <nav className="tp-mobile-menu-active">
                                        <HeaderMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-3 col-6">
                                <div className="mg-header-logo tp-header-logo ml-60">
                                    <BrandLogo />
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="tp-header-right d-flex justify-content-end align-items-center">
                                    <button onClick={toggleSearch} className="tp-header-search-btn tp-search-click">
                                        <SearchIcon />
                                    </button>
                                    <SmartLink className="tp-btn tp-btn-border-black ml-15 tp-ff-inter d-none d-sm-inline-block" href="/contact-us">
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

                {/* -- sticky-menu-area -- */}
                <button onClick={toggleSecondaryOffcanvas} id="header-sticky" className={`hamburger-open-btn tp-header-sidebar-btn hamburger-sticky-menu ${isSticky ? "header-sticky" : ""}`}>
                    <span></span>
                    <span></span>
                </button>
                {/* -- sticky-menu-end -- */}
            </header>

            {/*primary off canvas */}
            <OffCanvasPanel />
            {/*primary off canvas */}

            {/* off canvas 2*/}
            <OffCanvasPanelTwo />
            {/* off canvas 2*/}
        </>
    );
};

export default MotionGraphicHeader;