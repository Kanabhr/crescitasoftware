import MotionGraphicPortfolio from "@/components/portfolio/MotionGraphicPortfolio";
import MotionGraphicGallery from "@/components/gallery/MotionGraphicGallery";
import MotionGraphicAbout from "@/components/about/MotionGraphicAbout";
import MotionGraphicHero from "@/components/hero/MotionGraphicHero";

import MotionGraphicAward from "@/components/award/MotionGraphicAward";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/motion-graphic");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/motion-graphic" />
            <MotionGraphicHero />
            <MotionGraphicPortfolio />
            <MotionGraphicAbout />
            <MotionGraphicGallery />
            <MotionGraphicAward/>
        </main>
    );
};

export default page;