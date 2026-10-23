import PortfolioColFourBreadcrumb from "@/components/breadcrumb/PortfolioColFourBreadcrumb";
import PortfolioColFourArea from "@/components/portfolio/PortfolioColFourArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-col-4");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-col-4" />
            <PortfolioColFourBreadcrumb />
            <PortfolioColFourArea/>
        </main>
    );
};

export default page;