"use client";
import { useHeaderMenu } from "@/hooks/useHeaderMenu";
import Link from "next/link";

export default function HeaderMenu() {
    // Retrieves the dynamically selected header menu (light or dark) from custom hook
    const menu = useHeaderMenu();

    return (
        <ul>
            {menu.map((item) => (
                <li key={item.label} className="has-dropdown">
                    <Link href={item.href}>{item.label}</Link>
                    {item.type === "mega" && (
                        <div className="tp-submenu submenu tp-megamenu">
                            <div className="row">
                                {item.columns?.map((col, index) => (
                                    <div className="col-xl-4" key={index}>
                                        <div className="tp-megamenu-box">
                                            <div className="tp-megamenu-title-wrap">
                                                <span className="tp-megamenu-title">{col.title}</span>
                                            </div>
                                            <ul>
                                                {col.links.map((link) => (
                                                    <li key={link.href}>
                                                        <Link href={link.href}>{link.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {item.type === "dropdown" && (
                        <ul className="tp-submenu submenu">
                            {item.links?.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}
