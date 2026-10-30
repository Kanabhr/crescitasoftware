import MotionGraphicGallery from "@/components/gallery/MotionGraphicGallery";
import ServiceTwoFunfact from "@/components/funfact/ServiceTwoFunfact";
import ServiceTwoIntro from "@/components/service/ServiceTwoIntro";
import ServiceTwoArea from "@/components/service/ServiceTwoArea";
import PageBanner from "@/components/banner/PageBanner";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/service-2");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/service-2" />
            <ServiceTwoIntro />
            <PageBanner src="/assets/img/banner/thumb-4.jpg" />
            <ServiceTwoArea />
            <MotionGraphicGallery />
            <ServiceTwoFunfact />
        </main>
    );
};

export default page;