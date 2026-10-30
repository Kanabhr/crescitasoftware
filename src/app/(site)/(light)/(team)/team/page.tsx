import TeamIntro from "@/components/team/TeamIntro";
import TeamArea from "@/components/team/TeamArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/team");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/team" />
            <TeamIntro />
            <TeamArea />
        </main>
    );
};

export default page;