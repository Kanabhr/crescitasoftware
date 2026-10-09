import PortfolioBreadcrumb from "@/components/breadcrumb/PortfolioBreadcrumb";
import PortfolioColThree from "@/components/portfolio/PortfolioColThree";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Col 3 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioBreadcrumb />
            <PortfolioColThree />
        </main>
    );
};

export default page;