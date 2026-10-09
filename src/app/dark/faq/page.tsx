import FaqBreadcrumb from "@/components/breadcrumb/FaqBreadcrumb";
import FaqArea from "@/components/faq/FaqArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Faq - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <FaqBreadcrumb />
            <FaqArea />
        </main>
    );
};

export default page;