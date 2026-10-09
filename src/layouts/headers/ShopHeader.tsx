"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import CurrencyDropdown from "./subComponents/CurrencyDropdown";
import LanguageDropdown from "./subComponents/LanguageDropdown";
import HeaderTopSlider from "./subComponents/HeaderTopSlider";
import { HeaderArrowNextPrevIcon } from "@/svg/ArrowIcons";
import HeaderMenu from "@/components/layout/HeaderMenu";
import BrandLogo from "@/components/common/BrandLogo";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import MiniCart from "@/components/cart/MiniCart";
import { CartIcon } from "@/svg/ShopIcons";
import { SearchIcon } from "@/svg";
import Link from "next/link";

const ShopHeader = () => {
    const { toggleSearch, togglePrimaryOffcanvas, toggleSecondaryOffcanvas, toggleMiniCart } = useGlobalContext();
    const isSticky = useStickyHeader(20);
    return (
        <>
            <header>
                <div className="tp-header-area header-transparent">
                    <div className="shop-header-top d-none d-xl-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="shop-header-menu">
                                        <ul>
                                            <li><Link href="#">Order Tracking</Link></li>
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">FAQ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-relative">
                                        <HeaderTopSlider />
                                        <div className="shop-header-top-navigation">
                                            <span className="shop-header-next">
                                                <HeaderArrowNextPrevIcon direction="right" />
                                            </span>
                                            <span className="shop-header-prev">
                                                <HeaderArrowNextPrevIcon direction="left" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="shop-header-switcher-wrap d-flex justify-content-end">
                                        <LanguageDropdown />
                                        <div className="shop-header-top-menu-item shop-header-currency ml-30">
                                            <CurrencyDropdown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-header-main">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                                    <div className="tp-main-menu shop-main-menu">
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
                                    <div className="tp-header-right shop-header-right d-flex justify-content-end align-items-center">
                                        <button onClick={toggleSearch} className="tp-header-search-btn tp-search-click">
                                            <SearchIcon />
                                        </button>
                                        <button onClick={toggleMiniCart} className="shop-header-cart-btn cartmini-open-btn ml-15">
                                            <CartIcon />
                                            <span>3</span>
                                        </button>
                                        <button onClick={togglePrimaryOffcanvas} className="tp-menu-bar tp-header-sidebar-btn ml-10">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
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

            {/*secondary off canvas */}
            <OffCanvasPanelTwo />
            {/*secondary off canvas */}

            {/*mini cart  */}
            <MiniCart />
            {/*mini cart  */}
        </>
    );
};

export default ShopHeader;