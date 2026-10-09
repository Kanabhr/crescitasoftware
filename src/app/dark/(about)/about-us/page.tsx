import BrandingStudioBrand from "@/components/brand/BrandingStudioBrand";
import AboutUsTeam from "@/components/team/AboutUsTeam";
import AboutUsSlider from "@/components/about/AboutUsSlider";
import AboutUsIntro from "@/components/about/AboutUsIntro";
import AboutUsAward from "@/components/award/AboutUsAward";
import AboutUsArea from "@/components/about/AboutUsArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About US - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <AboutUsArea />
            <AboutUsSlider />
            <AboutUsIntro />
            <BrandingStudioBrand spacingClass="pb-160" />
            <AboutUsTeam />
            <AboutUsAward />
        </main>
    );
};

export default page;