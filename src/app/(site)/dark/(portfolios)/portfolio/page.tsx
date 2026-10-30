import PortfolioBreadcrumb from "@/components/breadcrumb/PortfolioBreadcrumb";
import PortfolioArea from "@/components/portfolio/PortfolioArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio" />
            <PortfolioBreadcrumb />
            <PortfolioArea />
        </main>
    );
};

export default page;