"use client";

import type { CurrencyCode } from "@/lib/currency";

type Props = {
    currency: CurrencyCode;
    currencies: CurrencyCode[];
    onChange: (currency: string) => void;
};

const CurrencySelector = ({ currency, currencies, onChange }: Props) => (
    <select
        className="tp-toggler-pre"
        aria-label="Price currency"
        value={currencies.includes(currency) ? currency : ""}
        onChange={(event) => onChange(event.currentTarget.value)}
    >
        <option value="">Currency</option>
        {currencies.map((supported) => (
            <option key={supported} value={supported}>{supported}</option>
        ))}
    </select>
);

export default CurrencySelector;
