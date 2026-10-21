import { Metadata } from "next";
import PortfolioThumbSliderMain from "@/components/portfolio/PortfolioThumbSlider";

export const metadata: Metadata = {
    title: "Portfolio Creative Thumb Slider - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioThumbSliderMain />
       </main>
    );
};

export default page;