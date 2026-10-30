import CareerBenefitArea from "@/components/career/CareerBenefitArea";
import CareerIntroArea from "@/components/career/CareerIntroArea";
import CareerOpeningArea from "@/components/career/CareerOpeningArea";
import CareerSliderArea from "@/components/career/CareerSliderArea";
import PageBanner from "@/components/banner/PageBanner";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/career");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/career" />
            <CareerIntroArea />
            <PageBanner src="/assets/img/banner/thumb-5.jpg" />
            <CareerBenefitArea />
            <CareerSliderArea />
            <CareerOpeningArea />
        </main>
    );
};

export default page;