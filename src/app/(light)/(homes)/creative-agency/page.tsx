import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creative Agency - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <CreativeAgencyHero />
            <CreativeAgencyAbout />
            <CreativeAgencyService />
            <CreativeAgencyPortfolio />
        </main>
    );
};

export default page;