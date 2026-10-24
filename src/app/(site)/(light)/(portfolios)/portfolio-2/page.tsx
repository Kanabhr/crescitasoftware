import PortfolioTwoBreadcrumb from "@/components/breadcrumb/PortfolioTwoBreadcrumb";
import FaqArea from "@/components/faq/FaqArea";
import PortfolioTwoArea from "@/components/portfolio/PortfolioTwoArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-2");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-2" />
            <PortfolioTwoBreadcrumb />
            <PortfolioTwoArea />
            <FaqArea/>
        </main>
    );
};

export default page;