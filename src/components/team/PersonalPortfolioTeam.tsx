
import CommonSingleTeamItem from "./subComponents/CommonSingleTeamItem";
import SmartLink from "@/components/common/SmartLink";
import { ArrowIconFive } from "@/svg/ArrowIcons";
import { teamData } from "@/data/team-data";

const PersonalPortfolioTeam = () => {
    //display team data
    const displayTeamItem = teamData.slice(0, 4);

    return (
        <div className="ca-team-area pp-team-style pb-115 pt-155">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="ca-team-subtitle-wrap mb-30 tp_fade_anim" data-delay=".3">
                            <span className="ca-team-subtitle pp-team-subtitle-black"><span>[</span> Our achievements <span>]</span></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ca-team-title-wrap mb-50">
                            <h2 className="ca-section-title fs-100 lh-1 reveal-text">Meet the <br /> talented team</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="h-100 d-flex justify-content-lg-end align-items-lg-end tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                            <div className="tp-btn-group tp-btn-group-transparent mb-60">
                                <SmartLink className="tp-btn-circle" href="/team">
                                    <ArrowIconFive />
                                </SmartLink>
                                <SmartLink className="tp-btn z-index-1" href="/team">All member</SmartLink>
                                <SmartLink className="tp-btn-circle" href="/team">
                                    <ArrowIconFive />
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                    {/* single team item */}
                    {
                        displayTeamItem.map((item) => (
                            <CommonSingleTeamItem key={item.id} item={item} isTitleWhite={false} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioTeam;