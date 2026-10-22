import { notFound, redirect } from "next/navigation";
import { getFirstOpenJobId } from "@/lib/careers";

export default async function CareerDetailsIndex() {
    const id = await getFirstOpenJobId();
    if (id === null) notFound();
    redirect(`/career-details/${id}`);
}