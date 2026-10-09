"use client";

import Link from "next/link";
import { useState } from "react";

type LanguageItem = {
    id: number;
    label: string;
};

const languageData: LanguageItem[] = [
    { id: 1, label: "English" },
    { id: 2, label: "Spanish" },
    { id: 3, label: "Russian" },
    { id: 4, label: "Portuguese" },
];

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languageData[0]);

    const handleSelect = (lang: LanguageItem) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };

    return (
        <div className="shop-header-top-menu-item shop-header-lang">
            {/* Selected Language */}
            <span
                className="shop-header-lang-toggle"
                id="shop-header-lang-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selectedLang.label}
            </span>

            {/* Dropdown */}
            <ul className={isOpen ? "shop-lang-list-open" : ""}>
                {languageData.map((lang) => (
                    <li key={lang.id} onClick={() => handleSelect(lang)}>
                        <Link href="#">{lang.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageDropdown;
