"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CurrencyItem = {
    id: number;
    name: string;
    flag: string;
};

const currencyData: CurrencyItem[] = [
    { id: 1, name: "Canada", flag: "/assets/img/flag/01.png" },
    { id: 2, name: "Malaysia", flag: "/assets/img/flag/02.png" },
    { id: 3, name: "Germany", flag: "/assets/img/flag/03.png" },
    { id: 4, name: "Belize", flag: "/assets/img/flag/04.png" },
    { id: 5, name: "United States", flag: "/assets/img/flag/05.png" },
    { id: 6, name: "China", flag: "/assets/img/flag/06.png" },
    { id: 7, name: "Georgia", flag: "/assets/img/flag/07.png" },
    { id: 8, name: "India", flag: "/assets/img/flag/08.png" },
];

const CurrencyDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyItem>(
        currencyData[0]
    );

    const handleSelect = (item: CurrencyItem) => {
        setSelectedCurrency(item);
        setIsOpen(false);
    };

    return (
        <>
            {/* Selected Currency */}
            <span
                className="shop-header-currency-toggle"
                id="shop-header-currency-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Image
                    width={20}
                    height={20}
                    src={selectedCurrency.flag}
                    alt={selectedCurrency.name}
                />
                {selectedCurrency.name}
            </span>

            {/* Dropdown List */}
            <ul className={isOpen ? "shop-currency-list-open" : ""}>
                {currencyData.map((item) => (
                    <li key={item.id} onClick={() => handleSelect(item)}>
                        <Link href="#">
                            <Image
                                width={20}
                                height={20}
                                src={item.flag}
                                alt={item.name}
                            />
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CurrencyDropdown;
