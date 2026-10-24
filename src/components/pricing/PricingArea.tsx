import PricingAreaClient from "./PricingAreaClient";
import { getPricingPlans } from "@/lib/pricing";

const PricingArea = async () => {
    const plans = await getPricingPlans();
    return <PricingAreaClient plans={plans} />;
};

export default PricingArea;
