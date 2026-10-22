import ServicePricingClient from "./ServicePricingClient";
import { getPricingPlans } from "@/lib/pricing";

const ServicePricing = async () => {
    const { monthly, yearly } = await getPricingPlans();
    return <ServicePricingClient monthlyPlans={monthly} yearlyPlans={yearly} />;
};

export default ServicePricing;