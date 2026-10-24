import PortfolioCreativeSkewSlider from "@/components/portfolio/PortfolioCreativeSkewSlider";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-creative-skew-slider");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-creative-skew-slider" />
            <PortfolioCreativeSkewSlider />
        </main>
    );
};

export default page;