import PortfolioBreadcrumb from "@/components/breadcrumb/PortfolioBreadcrumb";
import PortfolioArea from "@/components/portfolio/PortfolioArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioBreadcrumb />
            <PortfolioArea />
        </main>
    );
};

export default page;