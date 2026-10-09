import TeamIntro from "@/components/team/TeamIntro";
import TeamArea from "@/components/team/TeamArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <TeamIntro />
            <TeamArea />
        </main>
    );
};

export default page;