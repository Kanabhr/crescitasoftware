
import TeamDetailsArea from "@/components/team/TeamDetailsArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Details - Creative Portfolio Agency Nextjs Template",
};

const Page = () => {
    return (
        <main>
            <TeamDetailsArea id={1} />
        </main>
    );
};

export default Page;