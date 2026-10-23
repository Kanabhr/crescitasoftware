import ProfileAreaMain from "@/components/profile/ProfileAreaMain";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/profile");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/profile" />
            <ProfileAreaMain />
        </main>
    );
};

export default page;