import SmartLink from "@/components/common/SmartLink";
import { PricingCheckIcon } from "@/svg/CheckIcons";
import { PricingPlanDT } from "@/types/custom-dt";

const PricingSingleItem = (plans: PricingPlanDT[]) =>
    plans.map((plan) => (
        <div key={plan.name} className="col-xl-4 col-md-6">
            <div className={`ds-price-item mb-30 ${plan.popular ? "active" : ""}`}>
                {plan.popular && (
                    <div className="ds-price-item-tag">
                        <span>popular</span>
                    </div>
                )}
                <div className="ds-price-item-head">
                    <span>{plan.name}</span>
                    <p>{plan.description}</p>
                    <h4>
                        {plan.price} <i> {plan.period}</i>
                    </h4>
                </div>
                <div className="ds-price-item-list">
                    <h4 className="ds-price-item-list-title">Includes:</h4>
                    <ul>
                        {plan.features.map((feature, i) => (
                            <li key={i}>
                                <span>
                                    <PricingCheckIcon />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ds-price-item-btn">
                    <SmartLink
                        className={`tp-btn tp-btn-xxl w-100 justify-content-center ${plan.buttonBorder ? "" : "tp-btn-border"}`}
                        href="/contact-us"
                    >
                        <span>
                            <span className="text-1">Choose your plan</span>
                            <span className="text-2">Choose your plan</span>
                        </span>
                    </SmartLink>
                </div>
            </div>
        </div>
    ));
export default PricingSingleItem;