import PortfolioHero from "@/components/hero/PortfolioHero";
import PortfolioFourArea from "@/components/portfolio/PortfolioFourArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-4");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-4" />
            <PortfolioHero/>
            <PortfolioFourArea />
        </main>
    );
};

export default page;