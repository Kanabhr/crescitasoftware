import DigitalStudioTeamAndTestimonials from "@/components/testimonial/DigitalStudioTeamAndTestimonials";
import DigitalStudioPortfolio from "@/components/portfolio/DigitalStudioPortfolio";
import DigitalStudioCtaArea from "@/components/cta/DigitalStudioCtaArea";
import DigitalStudioFaqArea from "@/components/faq/DigitalStudioFaqArea";
import DigitalStudioAbout from "@/components/about/DigitalStudioAbout";
import DigitalStudioBrand from "@/components/brand/DigitalStudioBrand";
import DigitalStudioHero from "@/components/hero/DigitalStudioHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Studio - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
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