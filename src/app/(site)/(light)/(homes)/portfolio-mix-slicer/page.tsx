import PortfolioMixSlider from "@/components/portfolio/PortfolioMixSlicer";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-mix-slicer");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-mix-slicer" />
            <PortfolioMixSlider/>
       </main>
    );
};

export default page;