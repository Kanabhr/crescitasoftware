import PortfolioFourArea from "@/components/portfolio/PortfolioFourArea";
import PortfolioHero from "@/components/hero/PortfolioHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 4 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioHero />
            <PortfolioFourArea />
        </main>
    );
};

export default page;