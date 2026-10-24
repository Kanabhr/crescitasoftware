import DigitalStudioTeamAndTestimonials from "@/components/testimonial/DigitalStudioTeamAndTestimonials";
import DigitalStudioPortfolio from "@/components/portfolio/DigitalStudioPortfolio";
import DigitalStudioCtaArea from "@/components/cta/DigitalStudioCtaArea";
import DigitalStudioFaqArea from "@/components/faq/DigitalStudioFaqArea";
import DigitalStudioAbout from "@/components/about/DigitalStudioAbout";
import DigitalStudioBrand from "@/components/brand/DigitalStudioBrand";
import DigitalStudioHero from "@/components/hero/DigitalStudioHero";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/digital-studio");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/digital-studio" />
            <DigitalStudioHero />
            <DigitalStudioAbout />
            <DigitalStudioBrand />
            <DigitalStudioPortfolio />
            <DigitalStudioTeamAndTestimonials />
            <DigitalStudioFaqArea />
            <DigitalStudioCtaArea />
        </main>
    );
};

export default page;