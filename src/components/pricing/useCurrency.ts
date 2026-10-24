"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import {
    COUNTRY_TO_CURRENCY,
    DEFAULT_CURRENCY,
    SUPPORTED_CURRENCIES,
    getCurrencyForCountry,
    isSupportedCountry,
    isSupportedCurrency,
    type CurrencyCode,
} from "@/lib/currency";
import type { PricingPlanDT, PricingPlanSourceDT, PricingPriceRowDT } from "@/types/custom-dt";

const LOCALES: Partial<Record<CurrencyCode, string>> = { INR: "en-IN" };

function getCookieValue(name: string): string | undefined {
    const entry = document.cookie.split("; ").find((cookie) => cookie.startsWith(`${name}=`));
    return entry?.slice(name.length + 1);
}

function formatPrice(amount: number, currency: CurrencyCode): string {
    return new Intl.NumberFormat(LOCALES[currency] ?? "en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}

function findCountryPrice(
    plans: PricingPlanSourceDT[],
    country: string,
): CurrencyCode | undefined {
    for (const plan of plans) {
        const row = plan.prices.find(
            (price) => price.countries?.some((code) => code.toUpperCase() === country),
        );
        if (row && isSupportedCurrency(row.currency)) return row.currency;
    }
  return undefined;
}

function resolveCookieCurrency(plans: PricingPlanSourceDT[]): CurrencyCode {
    const currencyCookie = getCookieValue("currency");
    if (currencyCookie !== undefined) {
        return isSupportedCurrency(currencyCookie) ? currencyCookie : DEFAULT_CURRENCY;
    }

    const countryCookie = getCookieValue("geo_country");
    if (countryCookie === undefined || !isSupportedCountry(countryCookie)) {
        return DEFAULT_CURRENCY;
    }

    const planCurrency = findCountryPrice(plans, countryCookie);
    const countryCurrency = COUNTRY_TO_CURRENCY[countryCookie];
    return planCurrency ??
        (countryCurrency && isSupportedCurrency(countryCurrency)
            ? countryCurrency
            : getCurrencyForCountry(countryCookie));
}

function subscribeToCookies() {
    return () => {};
}

function getPriceRow(
    rows: PricingPriceRowDT[],
    cycle: "monthly" | "yearly",
    currency: CurrencyCode,
): PricingPriceRowDT | undefined {
    const cycleRows = rows.filter(
        (row) => row.billingCycle === cycle && isSupportedCurrency(row.currency),
    );
    return (
        cycleRows.find((row) => row.currency === currency) ??
        cycleRows.find((row) => row.currency === DEFAULT_CURRENCY) ??
        cycleRows[0]
    );
}

function buildPlan(
    plan: PricingPlanSourceDT,
    cycle: "monthly" | "yearly",
    currency: CurrencyCode,
): PricingPlanDT | undefined {
    const price = getPriceRow(plan.prices, cycle, currency);
    if (!price || !isSupportedCurrency(price.currency)) return undefined;

    return {
        name: plan.name,
        description: plan.description,
        price: price.label || formatPrice(price.amount ?? 0, price.currency),
        period: price.periodLabel || (cycle === "monthly" ? "/monthly" : "/Yearly"),
        popular: plan.popular,
        buttonBorder: plan.buttonBorder,
        features: plan.features,
        ctaLink: plan.ctaLink || "/contact-us",
    };
}

export function useCurrency(plans: PricingPlanSourceDT[]) {
    const cookieCurrency = useSyncExternalStore(
        subscribeToCookies,
        () => resolveCookieCurrency(plans),
        () => DEFAULT_CURRENCY,
    );
    const [manualCurrency, setManualCurrency] = useState<CurrencyCode>();
    const currency = manualCurrency ?? cookieCurrency;
    const resolved = useSyncExternalStore(subscribeToCookies, () => true, () => false);

    const availableCurrencies = useMemo(() => {
        const found = new Set(
            plans.flatMap((plan) =>
                plan.prices
                    .map((price) => price.currency)
                    .filter(isSupportedCurrency),
            ),
        );
        return SUPPORTED_CURRENCIES.filter((supported) => found.has(supported));
    }, [plans]);

    const selectCurrency = useCallback((value: string) => {
        if (!isSupportedCurrency(value)) return;
        setManualCurrency(value);
        const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
        document.cookie = `currency=${value}; Path=/; SameSite=Lax${secure}`;
    }, []);

    const monthlyPlans = useMemo(
        () => plans.flatMap((plan) => {
            const card = buildPlan(plan, "monthly", currency);
            return card ? [card] : [];
        }),
        [currency, plans],
    );
    const yearlyPlans = useMemo(
        () => plans.flatMap((plan) => {
            const card = buildPlan(plan, "yearly", currency);
            return card ? [card] : [];
        }),
        [currency, plans],
    );

    return { currency, availableCurrencies, monthlyPlans, yearlyPlans, resolved, selectCurrency };
}
