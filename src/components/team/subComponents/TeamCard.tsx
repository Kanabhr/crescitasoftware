import SmartLink from "@/components/common/SmartLink";
import { TeamMember } from "@/types/team-dt";
import Image from "next/image";

interface teamPropsDT {
    item: TeamMember;
    isTitleWhite?: boolean;
}

const TeamCard: React.FC<teamPropsDT> = ({ item }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div
                className="ca-team-item ca-team-item-2 tp-hover-item mb-35"
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
                        <Image width={408} height={419} className="img-fluid w-100" src={item.image} alt="team image" />
                    </div>
                </SmartLink>

                <div className="ca-team-content">
                    <h5 className="ca-team-title tp-ff-inter mb-0">
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

export default TeamCard;