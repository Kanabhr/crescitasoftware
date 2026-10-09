import SmartLink from "@/components/common/SmartLink";
import { portfolioDT } from "@/types/portfolio-dt";
import Image from "next/image";

const ModernAPorfolioSingleCard = ({ item, spacingCls = "" }: { item: portfolioDT, spacingCls?: string }) => {
    return (
        <div className={`mp-portfolio-item ${spacingCls}`}>
            <SmartLink href={`/portfolio-details/${item.id}`} className="mp-portfolio-thumb mb-25">
                <Image width={408} height={430} className="img-fluid w-100" src={item.image} alt={item.title} />
            </SmartLink>
            <div className="mp-portfolio-content d-inline-block">
                <h3 className="mp-portfolio-title tp-ff-sequel-semi-bold text-uppercase tp-title-anim fix">
                    <SmartLink href={`/portfolio-details/${item.id}`} className="tp-title-text">{item.title}</SmartLink>
                </h3>
                <span className="mp-portfolio-tag text-uppercase">{item.subtitle}</span>
            </div>
        </div>
    );
};

export default ModernAPorfolioSingleCard;