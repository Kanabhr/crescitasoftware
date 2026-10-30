import FaqArea from "@/components/faq/FaqArea";
import PriceTopArea from "@/components/pricing/PriceTopArea";
import PricingArea from "@/components/pricing/PricingArea";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
    return buildMetadata("/pricing");
}


const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/pricing" />
            <PriceTopArea/>
            <PricingArea />
            <FaqArea/>
        </main>
    );
};

export default page;