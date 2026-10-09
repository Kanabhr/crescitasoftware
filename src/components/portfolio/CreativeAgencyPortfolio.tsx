import CreativeAgencyPortfolioItem from "./subComponents/CreativeAgencyPortfolioItem";
import portfolioData from "@/data/portfolio-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

const CreativeAgencyPortfolio = () => {
    //display portfolio data
    const portfolio = portfolioData.slice(0, 4);

    return (
        <div className="tp-portfolio-area pt-145 pb-60" style={{ backgroundColor: "#1e1e1e" }}>
            <div className="container">
                <div className="row gx-50">
                    <div className="col-lg-9">
                        <div className="tp-portfolio-title-wrap mb-65">
                            <h2 className="tp-section-title tp-text-perspective text-white">
                                At Cunnet, we don&apos;t just design websites or launch campaigns we create.
                                <span className="tp-about-btn-transform d-inline-block ml-20">
                                    <SmartLink className="tp-btn tp-btn-white-border tp-ff-inter" href="/portfolio">
                                        <span>
                                            <span className="text-1">All Portfolio</span>
                                            <span className="text-2">All Portfolio</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Render portfolio items dynamically */}
                    {portfolio.map((item, index) => (
                        <CreativeAgencyPortfolioItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyPortfolio;
