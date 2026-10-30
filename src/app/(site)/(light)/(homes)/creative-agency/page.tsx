import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, OrganizationAndWebsiteJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/creative-agency");
}

const page = () => {
    return (
        <main>
<OrganizationAndWebsiteJsonLd />
<BreadcrumbJsonLd path="/creative-agency" />
            <CreativeAgencyHero />
            <CreativeAgencyAbout />
            <CreativeAgencyService />
            <CreativeAgencyPortfolio />
        </main>
    );
};

export default page;