"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import { useState } from "react";
import Link from "next/link";

const StickyMainMenu = ({ onClose }: { onClose?: () => void }) => {
    // Retrieves the dynamically selected header menu (light or dark) from custom hook
    const menu = useHeaderMenu();

    // which menu index is open
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    const handleLinkClick = () => {
        setActiveIndex(null); // close submenu
        onClose?.();          // close sticky menu / offcanvas
    };

    return (
        <ul>
            {menu.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <li
                        key={index}
                        className={`has-dropdown ${isActive ? "active" : ""}`}
                    >
                        {/* ===== MENU LABEL ===== */}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(index);
                            }}
                        >
                            {item.label}
                        </a>

                        {/* ===== MEGA MENU ===== */}
                        {item.type === "mega" && item.columns && (
                            <div
                                className="tp-submenu submenu tp-megamenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                <div className="row">
                                    {item.columns.map((column, colIndex) => (
                                        <div className="col-xl-4" key={colIndex}>
                                            <div className="tp-megamenu-box">
                                                <div className="tp-megamenu-title-wrap">
                                                    <span className="tp-megamenu-title">
                                                        {column.title}
                                                    </span>
                                                </div>

                                                <ul>
                                                    {column.links.map((link, linkIndex) => (
                                                        <li key={linkIndex}>
                                                            <Link
                                                                href={link.href}
                                                                onClick={handleLinkClick}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ===== DROPDOWN MENU ===== */}
                        {item.type === "dropdown" && item.links && (
                            <ul
                                className="tp-submenu submenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {item.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            onClick={handleLinkClick}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* ===== TOGGLE BUTTON ===== */}
                        <button
                            className="tp-menu-close"
                            onClick={() => handleMenuClick(index)}
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default StickyMainMenu;
