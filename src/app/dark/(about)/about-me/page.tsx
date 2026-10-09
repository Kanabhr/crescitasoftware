import AboutMeTestimonial from "@/components/testimonial/AboutMeTestimonial";
import AboutMeResumeTwo from "@/components/resume/AboutMeResumeTwo";
import AboutSkillArea from "@/components/skill/AboutSkillArea";
import AboutMeResume from "@/components/resume/AboutMeResume";
import AboutMeBanner from "@/components/banner/AboutMeBanner";
import AboutMeSlider from "@/components/about/AboutMeSlider";
import AboutMeArea from "@/components/about/AboutMeArea";
import AboutMeBlog from "@/components/blog/AboutMeBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Creative Portfolio Agency Nextjs Template",
};
const page = () => {
    return (
        <main>
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