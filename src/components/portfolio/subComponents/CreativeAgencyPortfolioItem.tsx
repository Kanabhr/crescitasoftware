import SmartLink from "@/components/common/SmartLink";
import { portfolioDT } from "@/types/portfolio-dt";
import Image from "next/image";

const CreativeAgencyPortfolioItem: React.FC<portfolioDT> = ({ id, title, subtitle, image }) => {
    return (
        <div className="col-lg-6">
            <div className="tp-portfolio-item anim-zoomin-wrap mb-70">
                <div className="tp-portfolio-thumb mb-20 anim-zoomin not-hide-cursor">
                    <SmartLink className="cursor-hide" href={`/portfolio-details/${id}`}>
                        <Image style={{ width: "100%", height: "auto" }} width={830} height={632} src={image} alt={title} />
                    </SmartLink>
                </div>
                <div className="tp-portfolio-content d-flex flex-wrap gap-2 justify-content-between align-items-center">
                    <h2 className="tp-portfolio-title tp-title-anim fix mb-20">
                        <SmartLink className="tp-title-text" href={`/portfolio-details/${id}`}>{title}</SmartLink>
                    </h2>
                    <span className="tp-portfolio-subtitle tp-ff-sequel-roman mb-20">{subtitle}</span>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyPortfolioItem;