import portfolioData from "@/data/portfolio-data";
import SmartLink from "../common/SmartLink";
import Image from "next/image";
import Link from "next/link";

const BradingStuidioPortfolio = () => {
    //display portfolio item data
    const displayPortfolio = portfolioData.slice(20, 24);

    return (
        <div className="cs-portfolio-area pt-135">
            <div className="container">
                <div className="row">
                    {/* Section Title */}
                    <div className="col-12">
                        <div className="cs-section-title-wrap mb-60">
                            <h2 className="cs-section-title tp-ff-sequel-semi-bold reveal-text">
                                Our featured work
                            </h2>
                        </div>
                    </div>

                    {/* Portfolio Items */}
                    {displayPortfolio.map(({ id, col, itemClass, image, title, tags }) => (
                        <div key={id} className={col}>
                            <div className={itemClass}>
                                <div className="cs-portfolio-thumb anim-zoomin not-hide-cursor" data-cursor="View<br>Demo">
                                    <SmartLink className="cursor-hide" href={`/portfolio-details/${id}`}>
                                        <Image width={1696} height={943} src={image} alt={title} />
                                    </SmartLink>
                                </div>
                                <div className="cs-portfolio-content d-flex align-items-center flex-wrap justify-content-between">
                                    <h3 className="cs-portfolio-title tp-title-anim tp-title-anim-inner mr-20 text-white tp-ff-sequel-semi-bold text-uppercase">
                                        <SmartLink href={`/portfolio-details/${id}`} className="tp-title-text">
                                            {title}
                                        </SmartLink>
                                    </h3>

                                    <div className="cs-portfolio-tag">
                                        <ul>
                                            {tags?.map((tag, index) => (
                                                <li key={index}>
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
            </div>
        </div>
    );
};

export default BradingStuidioPortfolio;
