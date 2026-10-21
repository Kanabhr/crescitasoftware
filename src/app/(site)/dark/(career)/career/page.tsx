import PageBanner from "@/components/banner/PageBanner";
import CareerBenefitArea from "@/components/career/CareerBenefitArea";
import CareerIntroArea from "@/components/career/CareerIntroArea";
import CareerOpeningArea from "@/components/career/CareerOpeningArea";
import CareerSliderArea from "@/components/career/CareerSliderArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career Details - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <CareerIntroArea />
            <PageBanner src="/assets/img/banner/thumb-5.jpg" />
            <CareerBenefitArea />
            <CareerSliderArea />
            <CareerOpeningArea />
        </main>
    );
};

export default page;