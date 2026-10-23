import CareerDetailsArea from "@/components/career/CareerDetailsArea";
import CareerBannerArea from "@/components/banner/CareerBannerArea";
import { PageParamsProps } from "@/types/custom-dt";
import JsonLd, { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getJobPostingById } from "@/lib/careers";
import { buildMetadata } from "@/lib/seo";
import { buildJobPostingData } from "@/lib/structuredData";

export async function generateMetadata(props: PageParamsProps) {
    const { id } = await props.params;
    const job = await getJobPostingById(id);

    return buildMetadata(`/dark/career-details/${id}`, {
        seo: job?.seo,
        lookupPageSeo: false,
        ...(job
            ? {
                fallbackTitle: `${job.title} - Careers`,
                fallbackDescription: job.summary,
            }
            : {}),
    });
}

export default async function CareerDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const job = await getJobPostingById(id);
    const path = `/career-details/${id}`;

    return (
        <main>
            <BreadcrumbJsonLd path={path} />
            {job && <JsonLd data={buildJobPostingData(job, path)} />}
            <CareerBannerArea />
            <CareerDetailsArea id={id} />
        </main>
    );
}