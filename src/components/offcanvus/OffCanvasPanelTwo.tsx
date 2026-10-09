"use client";
import { useState } from "react";
import BrandLogo from "@/components/common/BrandLogo";
import StickyMainMenu from "../layout/StickyMainMenu";
import useGlobalContext from "@/hooks/useContext";
import { CroseIconTwo } from "@/svg";

const OffCanvasPanelTwo = () => {
    const { isSecondaryOffcanvasOpen, toggleSecondaryOffcanvas } = useGlobalContext();
    const [menuOpenTemp, setMenuOpenTemp] = useState(false);

    const handleClose = () => {
        toggleSecondaryOffcanvas();

        setMenuOpenTemp(true);

        setTimeout(() => {
            setMenuOpenTemp(false);
        }, 2000);
    };

    return (
        <div
            className={`tp-offcanvas-2-area p-relative 
            ${isSecondaryOffcanvasOpen ? "menu-open" : ""} 
            ${menuOpenTemp ? "menu-open-temp" : ""}`}
        >
            <div className="offcanvas-bg"></div>

            <div className="tp-offcanvas-2-wrapper offcanvas-menu">
                <div className="tp-offcanvas-2-left">
                    <div className="tp-header-logo d-flex justify-content-between align-items-center mb-50">
                        <BrandLogo
                            logo1Width={170}
                            logo1Height={36}
                            logo2Width={170}
                            logo2Height={41}
                        />
                        <span
                            onClick={handleClose}
                            className={`hamburger-close-btn ${isSecondaryOffcanvasOpen ? "active" : ""
                                }`}
                        >
                            <CroseIconTwo />
                        </span>
                    </div>

                    <div className="tp-offcanvas-menu counter-row">
                        <nav>
                            <StickyMainMenu />
                        </nav>
                    </div>

                    <span
                        onClick={handleClose}
                        className="hamburger-close-btn hamburger-mobile-close-btn d-md-none"
                    >
                        CLOSE
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasPanelTwo;
