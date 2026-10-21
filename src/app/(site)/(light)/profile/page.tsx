import ProfileAreaMain from "@/components/profile/ProfileAreaMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile - Creative Portfolio Agency Nextjs Template",
};

const Page = () => {
    return (
        <main>
            <ProfileAreaMain/>
        </main>
    );
};

export default Page;
