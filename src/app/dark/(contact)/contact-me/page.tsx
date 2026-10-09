import ContactMeArea from "@/components/contact/ContactMeArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ContactMeArea />
        </main>
    );
};

export default page;