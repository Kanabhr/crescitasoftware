"use client";

import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import { useState } from "react";
import Link from "next/link";

const MobileMenus = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    // Retrieves the dynamically selected header menu (light or dark) from custom hook
    const menu = useHeaderMenu();

    // Toggles dropdown menu open/close state in accordion style
    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };
    return (
        <ul>
            {menu?.map((menu) => {
                const isActive = activeMenu === menu.id;

                const hasDropdown =
                    menu.type === "mega" ||
                    (menu.type === "dropdown" && !!menu.links?.length);

                return (
                    <li
                        key={menu.id}
                        className={`has-dropdown ${isActive ? "active" : ""}`}
                    >
                        {/* MENU TITLE */}
                        <a
                            href={menu.href}
                            onClick={(e) => {
                                if (hasDropdown) {
                                    e.preventDefault();
                                    toggleMenu(menu.id);
                                }
                            }}
                        >
                            {menu.label}
                        </a>

                        {/* + / × BUTTON */}
                        {hasDropdown && (
                            <button
                                className="tp-menu-close"
                                onClick={() => toggleMenu(menu.id)}
                                aria-label="Toggle menu"
                            >
                                <i
                                    className={`fa-solid ${isActive ? "fa-xmark" : "fa-plus"
                                        }`}
                                />
                            </button>
                        )}

                        {/* ===== MEGA MENU ===== */}
                        {menu.type === "mega" && (
                            <div
                                className="tp-submenu submenu tp-megamenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                <div className="row">
                                    {/* COLUMN MENU */}
                                    {menu.columns?.map((col, i) => (
                                        <div className="col-xl-4" key={i}>
                                            <div className="tp-megamenu-box">
                                                <div className="tp-megamenu-title-wrap">
                                                    <span className="tp-megamenu-title">{col?.title}</span>
                                                </div>
                                                {/* TEXT LINKS */}
                                                {col.links && (
                                                    <ul>
                                                        {col.links.map((item, j) => (
                                                            <li key={j}>
                                                                <Link href={item.href}>{item.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ===== SIMPLE SUBMENU ===== */}
                        {menu.type === "dropdown" && menu.links && (
                            <ul
                                className="tp-submenu submenu"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {menu.links.map((sub, i) => (
                                    <li key={i}>
                                        <Link href={sub.href}>{sub.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobileMenus;


