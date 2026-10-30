import { notFound, redirect } from "next/navigation";
import { getFirstOpenJobId } from "@/lib/careers";

export default async function JobApplicationIndex() {
    const id = await getFirstOpenJobId();
    if (id === null) notFound();
    redirect(`/job-application-form/${id}`);
}