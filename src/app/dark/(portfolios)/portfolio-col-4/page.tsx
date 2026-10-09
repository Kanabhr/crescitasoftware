import PortfolioColFourBreadcrumb from "@/components/breadcrumb/PortfolioColFourBreadcrumb";
import PortfolioColFourArea from "@/components/portfolio/PortfolioColFourArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Col 4 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioColFourBreadcrumb />
            <PortfolioColFourArea />
        </main>
    );
};

export default page;