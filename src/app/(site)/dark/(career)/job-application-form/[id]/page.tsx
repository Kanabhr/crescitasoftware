import JobApplicationTopIntro from "@/components/career/JobApplicationTopIntro";
import JobApplicationForm from "@/components/form/JobApplicationForm";
import { getJobForm } from "@/lib/careers";
import { buildMetadata } from "@/lib/seo";
import { PageParamsProps } from "@/types/custom-dt";
import { notFound } from "next/navigation";

export async function generateMetadata(props: PageParamsProps) {
    const { id } = await props.params;
    const job = await getJobForm(id);

    return buildMetadata(`/dark/job-application-form/${id}`, {
        fallbackTitle: job ? `Apply - ${job.title}` : undefined,
        seo: { noIndex: true },
        lookupPageSeo: false,
    });
}

export default async function JobApplicationPage(props: PageParamsProps) {
    const { id } = await props.params;
    const job = await getJobForm(id);
    if (!job) notFound();

    return (
        <main>
            <JobApplicationTopIntro subtitle={job.jobType} title={job.title} />
          <JobApplicationForm jobId={job.id} fields={job.fields} />
        </main>
    );
}