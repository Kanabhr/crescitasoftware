import ContactUsTopIntro from "@/components/contact/ContactUsTopIntro";
import ContactUsFormArea from "@/components/contact/ContactUsFormArea";
import ContactUsInfoArea from "@/components/contact/ContactUsInfoArea";
import ContactInnerMap from "@/components/contact/ContactInnerMap";
import ContactUsAbout from "@/components/about/ContactUsAbout";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/contact-us");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/contact-us" />
            <ContactUsTopIntro />
            <ContactInnerMap />
            <ContactUsFormArea />
            <ContactUsAbout />
            <ContactUsInfoArea />
        </main>
    );
};

export default page;