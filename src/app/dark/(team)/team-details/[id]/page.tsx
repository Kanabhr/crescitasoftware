
import TeamDetailsArea from "@/components/team/TeamDetailsArea";
import { PageParamsProps } from "@/types/custom-dt";
export default async function TeamDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <main>
            <TeamDetailsArea id={id} />
        </main>
    );
}