import PricingAreaClient from "./PricingAreaClient";
import { getPricingPlans } from "@/lib/pricing";

const PricingArea = async () => {
    const { monthly, yearly } = await getPricingPlans();
    return <PricingAreaClient monthlyPlans={monthly} yearlyPlans={yearly} />;
};

export default PricingArea;
