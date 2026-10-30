
import TeamDetailsArea from "@/components/team/TeamDetailsArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/team-details");
}

const Page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/team-details" />
            <TeamDetailsArea id={1}/>
        </main>
    );
};

export default Page;