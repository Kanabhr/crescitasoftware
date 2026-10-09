import PortfolioTwoBreadcrumb from "@/components/breadcrumb/PortfolioTwoBreadcrumb";
import FaqArea from "@/components/faq/FaqArea";
import PortfolioTwoArea from "@/components/portfolio/PortfolioTwoArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio 2 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PortfolioTwoBreadcrumb />
            <PortfolioTwoArea />
            <FaqArea/>
        </main>
    );
};

export default page;