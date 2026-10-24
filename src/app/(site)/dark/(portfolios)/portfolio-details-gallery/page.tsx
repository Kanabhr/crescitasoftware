import PortfolioGalleryDetailsIntro from "@/components/portfolio/PortfolioGalleryDetailsIntro";
import PortfolioGalleryDetailsBanner from "@/components/banner/PortfolioGalleryDetailsBanner";
import PortfolioGalleryDetailsThumb from "@/components/gallery/PortfolioGalleryDetailsThumb";
import PortfolioGalleryThumbSlider from "@/components/gallery/PortdfolioGalleryThumbSlider";
import PortfolioDetailsOverview from "@/components/overview/PortfolioDetailsOverview";
import PortfolioDetailsStep from "@/components/process/PortfolioDetailsProcess";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/portfolio-details-gallery");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/portfolio-details-gallery" />
            <PortfolioGalleryDetailsIntro />
            <PortfolioGalleryDetailsBanner />
            <PortfolioDetailsOverview />
            <PortfolioGalleryThumbSlider />
            <PortfolioDetailsStep />
            <PortfolioGalleryDetailsThumb />
        </main>
    );
};

export default page;