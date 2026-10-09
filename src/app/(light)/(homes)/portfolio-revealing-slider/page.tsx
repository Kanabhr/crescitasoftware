import PortfolioRevealingSlider from "@/components/portfolio/PortfolioRevealingSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Revealing Slider - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioRevealingSlider />
        </main>
    );
};

export default page;