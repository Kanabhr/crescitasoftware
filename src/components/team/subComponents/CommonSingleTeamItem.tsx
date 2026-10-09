import SmartLink from "@/components/common/SmartLink";
import { TeamMember } from "@/types/team-dt";
import Image from "next/image";

interface teamPropsDT {
    item: TeamMember;
    isTitleWhite?: boolean;
}

const CommonSingleTeamItem: React.FC<teamPropsDT> = ({ item, isTitleWhite = true }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div
                className="ca-team-item tp-hover-item mb-30 tp_fade_anim"
                data-delay={item.delay}
            >
                <SmartLink href={`/team-details/${item.id}`}
                    className="ca-portfolio-thumb mb-20 p-relative fix d-block"
                >
                    <div
                        className="tp-hover-img"
                        data-displacement="/assets/img/imghover/fluid.jpg"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <Image style={{ width: "100%", height: "auto" }} width={408} height={419} src={item.image} alt="team image" />
                    </div>
                </SmartLink>

                <div className="ca-team-content">
                    <h5 className={`ca-team-title tp-ff-inter ${isTitleWhite ? "text-white" : ""}  mb-0`}>
                        <SmartLink href={`/team-details/${item.id}`} className="common-underline">
                            {item.name}
                        </SmartLink>
                    </h5>
                    <span>{item.role}</span>
                </div>
            </div>
        </div>
    );
};

export default CommonSingleTeamItem;


