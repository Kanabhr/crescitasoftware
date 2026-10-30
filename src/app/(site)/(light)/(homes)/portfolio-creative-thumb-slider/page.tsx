
import PortfolioThumbSliderMain from "@/components/portfolio/PortfolioThumbSlider";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-creative-thumb-slider");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-creative-thumb-slider" />
            <PortfolioThumbSliderMain />
       </main>
    );
};

export default page;