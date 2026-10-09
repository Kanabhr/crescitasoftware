import SmartLink from "@/components/common/SmartLink";
import { portfolioDT } from "@/types/portfolio-dt";
import Image from "next/image";

const DigitalStudioPortfolioItem: React.FC<portfolioDT> = ({ id, col, itemClass, image, title, year }) => {
    return (
        <div className={col}>
            <div className={itemClass}>
                <SmartLink
                    href={`/portfolio-details/${id}`}
                    className="ca-portfolio-thumb mb-15 p-relative fix d-block"
                >
                    <div
                        className="tp-hover-img"
                        data-displacement="/assets/img/imghover/stripe.png"
                        data-intensity="0.2"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <Image style={{ width: "100%", height: "auto" }} width={1106} height={1264} src={image} alt="portfolio image" />
                    </div>

                    <div className="ca-portfolio-btn">
                        <div className="p-relative d-inline-block">
                            <Image width={120} height={119} src="/assets/img/portfolio/ca/shape.png" alt="shape" />
                            <span className="text">View</span>
                        </div>
                    </div>
                </SmartLink>

                <div className="ca-portfolio-content d-flex justify-content-between">
                    <h5 className="ca-portfolio-title mb-0">
                        <SmartLink
                            href={`/portfolio-details/${id}`}
                            className="common-underline"
                        >
                            {title}
                        </SmartLink>
                    </h5>
                    <span className="ca-portfolio-date tp-ff-sequel-medium">
                        / {year}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DigitalStudioPortfolioItem;