"use client";
import PricingSingleItem from "./subComponents/PricingSingleItem";
import CurrencySelector from "./CurrencySelector";
import { useCurrency } from "./useCurrency";
import type { PricingPlanSourceDT } from "@/types/custom-dt";
import { useState } from "react";

interface Props {
    plans: PricingPlanSourceDT[];
}

const PricingAreaClient = ({ plans }: Props) => {
    const [isMonthly, setIsMonthly] = useState(true);
    const togglePlan = () => setIsMonthly(!isMonthly);
    const { currency, availableCurrencies, monthlyPlans, yearlyPlans, resolved, selectCurrency } =
        useCurrency(plans);

    return (
        <div className="tp-pricing-ptb pb-115">
            <div className="container container-1480">
                <div className="row align-items-end">
                    <div className="col-lg-12">
                        <div className="tp-pricing-nav-wrapper p-relative mb-30 d-flex justify-content-center align-items-center">
                            <label className={isMonthly ? "tp-toggler-pre is-active" : "tp-toggler-pre"}>
                                Monthly
                            </label>
                            <div className="tp-toggle-input-wrap">
                                <input
                                    type="checkbox"
                                    className="tp-input-check"
                                    checked={!isMonthly}
                                    onChange={togglePlan}
                                />
                                <b className="tp-switch-toggle"></b>
                            </div>
                            <label className={isMonthly ? "tp-toggler-post" : "tp-toggler-post is-active"}>
                                Yearly
                            </label>
                            <CurrencySelector
                                currency={currency}
                                currencies={availableCurrencies}
                                onChange={selectCurrency}
                            />
                        </div>
                    </div>
                </div>

                {/* Pricing Tabs */}
                <noscript>
                    <style>{".geo-pricing-results{visibility:visible!important}"}</style>
                </noscript>
                <div
                    className="row geo-pricing-results"
                    style={{ visibility: resolved ? "visible" : "hidden" }}
                    aria-hidden={!resolved}
                >
                    {isMonthly ? PricingSingleItem(monthlyPlans) : PricingSingleItem(yearlyPlans)}
                </div>
            </div>
        </div>
    );
};

export default PricingAreaClient;
