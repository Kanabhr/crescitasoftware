import JobApplicationTopIntro from "@/components/career/JobApplicationTopIntro";
import JobApplicationForm from "@/components/form/JobApplicationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Job Application Form - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <JobApplicationTopIntro />
            <JobApplicationForm />
        </main>
    );
};

export default page;