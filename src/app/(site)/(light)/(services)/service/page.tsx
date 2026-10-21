import ServiceIntroBanner from "@/components/banner/ServiceIntroBanner";
import ServicePricing from "@/components/pricing/ServicePricing";
import ServiceGallery from "@/components/gallery/ServiceGallery";
import PageBanner from "@/components/banner/PageBanner";
import ServiceArea from "@/components/service/ServiceArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ServiceIntroBanner />
            <PageBanner />
            <ServiceArea />
            <ServiceGallery />
            <ServicePricing />
        </main>
    );
};

export default page;