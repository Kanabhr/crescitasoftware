import PortfolioBreadcrumb from "@/components/breadcrumb/PortfolioBreadcrumb";
import PortfolioColThree from "@/components/portfolio/PortfolioColThree";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-col-3");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-col-3" />
            <PortfolioBreadcrumb />
            <PortfolioColThree />
        </main>
    );
};

export default page;