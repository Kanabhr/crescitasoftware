import ServiceDetailsIntro from "@/components/service/ServiceDetailsIntro";

import { PageParamsProps } from "@/types/custom-dt";
export default async function ServiceDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <main>
            <ServiceDetailsIntro id={id} />
        </main>
    );
}