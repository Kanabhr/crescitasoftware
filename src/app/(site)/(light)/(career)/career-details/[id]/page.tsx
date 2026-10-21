import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import CareerBannerArea from "@/components/banner/CareerBannerArea";
import { PageParamsProps } from "@/types/custom-dt";

export default async function CareerDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <main>
            <CareerBannerArea />
            <CareerDetailsArea id={id} />
        </main>
    );
}