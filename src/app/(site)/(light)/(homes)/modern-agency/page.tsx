import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyAbout from "@/components/about/ModernAgencyAbout";
import ModernAgencyAward from "@/components/award/ModernAgencyAward";
import ModernAgencyBlog from "@/components/blog/ModernAgencyBlog";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/modern-agency");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/modern-agency" />
            <ModernAgencyHero />
            <ModernAgencyAbout />
            <ModernAgencyPortfolio />
            <ModernAgencyAward />
            <ModernAgencyBlog />
        </main>
    );
};

export default page;