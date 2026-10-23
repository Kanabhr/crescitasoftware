import PortfolioRevealingSlider from "@/components/portfolio/PortfolioRevealingSlider";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-revealing-slider");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-revealing-slider" />
            <PortfolioRevealingSlider />
        </main>
    );
};

export default page;