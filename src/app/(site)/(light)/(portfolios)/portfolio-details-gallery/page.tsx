import PortfolioGalleryDetailsIntro from "@/components/portfolio/PortfolioGalleryDetailsIntro";
import PortfolioGalleryDetailsBanner from "@/components/banner/PortfolioGalleryDetailsBanner";
import PortfolioGalleryDetailsThumb from "@/components/gallery/PortfolioGalleryDetailsThumb";
import PortfolioGalleryThumbSlider from "@/components/gallery/PortdfolioGalleryThumbSlider";
import PortfolioDetailsOverview from "@/components/overview/PortfolioDetailsOverview";
import PortfolioDetailsStep from "@/components/process/PortfolioDetailsProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Details Gallery - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
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