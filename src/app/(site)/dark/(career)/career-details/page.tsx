import CareerBannerArea from "@/components/banner/CareerBannerArea";
import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Career Details - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <CareerBannerArea />
            <CareerDetailsArea id={1} />
        </main>
    );
};

export default page;