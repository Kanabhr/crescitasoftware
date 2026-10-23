import BradingStuidioPortfolio from "@/components/portfolio/BradingStuidioPortfolio";
import BrandingStudioAbout from "@/components/about/BrandingStudioAbout";
import BrandingStudioBrand from "@/components/brand/BrandingStudioBrand";
import BradingStuidioAward from "@/components/award/BradingStuidioAward";
import BrandingStudioHero from "@/components/hero/BrandingStudioHero";
import BrandingStudioBlog from "@/components/blog/BrandingStudioBlog";
import PageBanner from "@/components/banner/PageBanner";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/branding-studio");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/branding-studio" />
            <BrandingStudioHero />
            <BrandingStudioAbout />
            <BrandingStudioBrand />
            <BradingStuidioPortfolio />
            <BradingStuidioAward />
            <PageBanner src="/assets/img/banner/thumb.jpg" />
            <BrandingStudioBlog />
        </main>
    );
};

export default page;