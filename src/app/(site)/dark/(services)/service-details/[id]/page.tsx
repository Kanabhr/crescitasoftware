// import { PageParamsProps } from '@/types/custom-dt';
// import servicesData from "@/data/serviceData";
// import ServiceDetailsMain from '@/pages/services/service-details/ServiceDetailsMain';


// export async function generateMetadata(props: PageParamsProps) {
//     const resolvedParams = await props.params;
//     const { id } = resolvedParams;
//     const service = servicesData.find((item) => item.id == Number(id));
//     return {
//         title: service?.title ? service.title : "Service Details",
//     };
// }

import { PageParamsProps } from "@/types/custom-dt";
export default async function ServiceDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <h1>Service Details Page id: {id}</h1>
    );
}