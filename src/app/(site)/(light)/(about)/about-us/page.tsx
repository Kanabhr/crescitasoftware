import AboutUsBrands from "@/components/brand/AboutUsBrands";
import AboutUsTeam from "@/components/team/AboutUsTeam";
import AboutUsSlider from "@/components/about/AboutUsSlider";
import AboutUsIntro from "@/components/about/AboutUsIntro";
import AboutUsAward from "@/components/award/AboutUsAward";
import AboutUsArea from "@/components/about/AboutUsArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/about-us");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/about-us" />
            <AboutUsArea />
            <AboutUsSlider />
            <AboutUsIntro />
            <AboutUsBrands spacingClass="pb-160" />
            <AboutUsTeam />
            <AboutUsAward />
        </main>
    );
};

export default page;