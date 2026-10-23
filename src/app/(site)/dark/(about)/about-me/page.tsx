import AboutMeTestimonial from "@/components/testimonial/AboutMeTestimonial";
import AboutMeResumeTwo from "@/components/resume/AboutMeResumeTwo";
import AboutSkillArea from "@/components/skill/AboutSkillArea";
import AboutMeResume from "@/components/resume/AboutMeResume";
import AboutMeBanner from "@/components/banner/AboutMeBanner";
import AboutMeSlider from "@/components/about/AboutMeSlider";
import AboutMeArea from "@/components/about/AboutMeArea";
import AboutMeBlog from "@/components/blog/AboutMeBlog";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/about-me");
}
const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/about-me" />
            <AboutMeArea />
            <AboutMeSlider />
            <AboutMeResume />
            <AboutSkillArea />
            <AboutMeResumeTwo />
            <AboutMeTestimonial />
            <AboutMeBanner />
            <AboutMeBlog />
        </main>
    );
};

export default page;