import ContactMeArea from "@/components/contact/ContactMeArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/contact-me");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/contact-me" />
            <ContactMeArea/>
        </main>
    );
};

export default page;