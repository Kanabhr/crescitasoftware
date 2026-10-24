import ServiceIntroBanner from "@/components/banner/ServiceIntroBanner";
import ServicePricing from "@/components/pricing/ServicePricing";
import ServiceGallery from "@/components/gallery/ServiceGallery";
import PageBanner from "@/components/banner/PageBanner";
import ServiceArea from "@/components/service/ServiceArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/service");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/service" />
            <ServiceIntroBanner />
            <PageBanner />
            <ServiceArea />
            <ServiceGallery />
            <ServicePricing />
        </main>
    );
};

export default page;