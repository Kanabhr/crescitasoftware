import FaqArea from "@/components/faq/FaqArea";
import PriceTopArea from "@/components/pricing/PriceTopArea";
import PricingArea from "@/components/pricing/PricingArea";

const page = () => {
    return (
        <main>
            <PriceTopArea/>
            <PricingArea />
            <FaqArea/>
        </main>
    );
};

export default page;