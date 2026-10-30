import ServiceDetailsProcess from "@/components/process/ServiceDetailsProcess";
import ServiceDetailsFaqArea from "@/components/faq/ServiceDetailsFaqArea";
import ServiceDetailsIntro from "@/components/service/ServiceDetailsIntro";
import ServiceDetailsFaqTwo from "@/components/faq/ServiceDetailsFaqTwo";
import ServiceOverview from "@/components/service/ServiceOverview";
import PageBanner from "@/components/banner/PageBanner";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/service-details");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/service-details" />
            <ServiceDetailsIntro />
            <PageBanner src="/assets/img/banner/thumb-5.jpg" />
            <ServiceDetailsProcess />
            <ServiceOverview />
            <ServiceDetailsFaqArea />
            <PageBanner src="/assets/img/banner/thumb-6.jpg" />
            <ServiceDetailsFaqTwo />
        </main>
    );
};

export default page;