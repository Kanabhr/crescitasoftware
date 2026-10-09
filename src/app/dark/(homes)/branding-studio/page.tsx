import BradingStuidioPortfolio from "@/components/portfolio/BradingStuidioPortfolio";
import BrandingStudioAbout from "@/components/about/BrandingStudioAbout";
import BrandingStudioBrand from "@/components/brand/BrandingStudioBrand";
import BradingStuidioAward from "@/components/award/BradingStuidioAward";
import BrandingStudioHero from "@/components/hero/BrandingStudioHero";
import BrandingStudioBlog from "@/components/blog/BrandingStudioBlog";
import { Metadata } from "next";
import PageBanner from "@/components/banner/PageBanner";

export const metadata: Metadata = {
    title: "Branding Studio - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
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