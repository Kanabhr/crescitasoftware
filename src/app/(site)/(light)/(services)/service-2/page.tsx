import MotionGraphicGallery from "@/components/gallery/MotionGraphicGallery";
import ServiceTwoFunfact from "@/components/funfact/ServiceTwoFunfact";
import ServiceTwoIntro from "@/components/service/ServiceTwoIntro";
import ServiceTwoArea from "@/components/service/ServiceTwoArea";
import PageBanner from "@/components/banner/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service 2 - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ServiceTwoIntro />
            <PageBanner src="/assets/img/banner/thumb-4.jpg" />
            <ServiceTwoArea />
            <MotionGraphicGallery />
            <ServiceTwoFunfact />
        </main>
    );
};

export default page;