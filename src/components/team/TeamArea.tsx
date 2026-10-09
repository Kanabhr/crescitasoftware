import TeamCard from "./subComponents/TeamCard";
import { teamData } from "@/data/team-data";

const TeamArea = () => {
    //display team data
    const displayTeamItem = teamData.slice(0, 8);

    return (
        <div className="ca-team-area pb-115">
            <div className="container">
                <div className="row">
                    {/* single team item */}
                    {
                        displayTeamItem.map((item) => (
                            <TeamCard key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamArea;