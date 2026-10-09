import PortfolioCreativeSkewSlider from "@/components/portfolio/PortfolioCreativeSkewSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Creative Skew Slider - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioCreativeSkewSlider />
        </main>
    );
};

export default page;