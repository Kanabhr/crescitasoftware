import PortfolioThreeBreadcrumb from "@/components/breadcrumb/PortfolioThreeBreadcrumb";
import PortfolioThreeArea from "@/components/portfolio/PortfolioThreeArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 3 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioThreeBreadcrumb />
            <PortfolioThreeArea />
        </main>
    );
};

export default page;