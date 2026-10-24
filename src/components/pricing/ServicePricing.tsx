import ServicePricingClient from "./ServicePricingClient";
import { getPricingPlans } from "@/lib/pricing";

const ServicePricing = async () => {
    const plans = await getPricingPlans();
    return <ServicePricingClient plans={plans} />;
};

export default ServicePricing;