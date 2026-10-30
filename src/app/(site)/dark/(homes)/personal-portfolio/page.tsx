
import PersonalPortfolioService from "@/components/service/PersonalPortfolioService";
import PersonalPortfolioArea from "@/components/portfolio/PersonalPortfolioArea";
import PersonalPortfolioAbout from "@/components/about/PersonalPortfolioAbout";
import PersonalPortfolioTeam from "@/components/team/PersonalPortfolioTeam";
import PersonalPortfolioHero from "@/components/hero/PersonalPortfolioHero";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/personal-portfolio");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/personal-portfolio" />
            <PersonalPortfolioHero />
            <PersonalPortfolioAbout />
            <PersonalPortfolioArea />
            <PersonalPortfolioTeam />
            <PersonalPortfolioService />
        </main>
    );
};

export default page;