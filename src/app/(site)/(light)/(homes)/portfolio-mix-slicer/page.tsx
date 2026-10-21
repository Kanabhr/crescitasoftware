import PortfolioMixSlider from "@/components/portfolio/PortfolioMixSlicer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Mix Slicer - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioMixSlider/>
       </main>
    );
};

export default page;