import SmartLink from "@/components/common/SmartLink";
import { portfolioDT } from "@/types/portfolio-dt";
import Image from "next/image";
import Link from "next/link";

interface portfolioPropsDt {
    portfoloData: portfolioDT[];
}
const PortfolioThreeSingleItem: React.FC<portfolioPropsDt> = ({ portfoloData }) => {
    return (
        <div className="row gx-40">
            {portfoloData.map((item) => (
                <div className="col-xl-6" key={item.id}>
                    <div className="tp-title-anim cs-portfolio-item anim-zoomin-wrap mb-40">
                        <div className="cs-portfolio-thumb anim-zoomin not-hide-cursor">
                            <SmartLink className="cursor-hide" href="/portfolio-details-gallery">
                                <Image width={816} height={600} className="w-100" src={item.image} alt={item.title} />
                            </SmartLink>
                        </div>

                        <div className="cs-portfolio-content d-flex align-items-center flex-wrap justify-content-between">
                            <h3 className="cs-portfolio-title tp-title-anim-inner mr-20 text-white tp-ff-sequel-semi-bold text-uppercase">
                                <SmartLink href="/portfolio-details-gallery"
                                    className="common-underline tp-title-text">
                                    {item.title}
                                </SmartLink>
                            </h3>
                            <div className="cs-portfolio-tag">
                                <ul>
                                    {item?.tags?.map((tag, i) => (
                                        <li key={i}>
                                            <Link href="#">{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioThreeSingleItem;