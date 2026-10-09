
import PersonalPortfolioService from "@/components/service/PersonalPortfolioService";
import PersonalPortfolioArea from "@/components/portfolio/PersonalPortfolioArea";
import PersonalPortfolioAbout from "@/components/about/PersonalPortfolioAbout";
import PersonalPortfolioTeam from "@/components/team/PersonalPortfolioTeam";
import PersonalPortfolioHero from "@/components/hero/PersonalPortfolioHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Portfolio - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <PersonalPortfolioHero />
            <PersonalPortfolioAbout />
            <PersonalPortfolioArea />
            <PersonalPortfolioTeam />
            <PersonalPortfolioService />
        </main>
    );
};

export default page;