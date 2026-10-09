import MotionGraphicPortfolio from "@/components/portfolio/MotionGraphicPortfolio";
import MotionGraphicGallery from "@/components/gallery/MotionGraphicGallery";
import MotionGraphicAbout from "@/components/about/MotionGraphicAbout";
import MotionGraphicHero from "@/components/hero/MotionGraphicHero";
import { Metadata } from "next";
import MotionGraphicAward from "@/components/award/MotionGraphicAward";

export const metadata: Metadata = {
    title: "Motion Graphic - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <MotionGraphicHero />
            <MotionGraphicPortfolio />
            <MotionGraphicAbout />
            <MotionGraphicGallery />
            <MotionGraphicAward/>
        </main>
    );
};

export default page;