import PortfolioThreeBreadcrumb from "@/components/breadcrumb/PortfolioThreeBreadcrumb";
import PortfolioThreeArea from "@/components/portfolio/PortfolioThreeArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-3");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-3" />
            <PortfolioThreeBreadcrumb />
            <PortfolioThreeArea />
        </main>
    );
};

export default page;