import PortfolioDetailsOverviewTwo from "@/components/overview/PortfolioDetailsOverviewTwo";
import PortfolioSingleCard from "@/components/portfolio/subComponents/PortfolioSingleCard";
import PortfolioDetailsIntro from "@/components/portfolio/PortfolioDetailsIntro";
import PortfolioDetailsStep from "@/components/process/PortfolioDetailsProcess";
import PortfolioDetailsThumb from "@/components/gallery/PortfolioDetailsThumb";
import portfolioData from "@/data/portfolio-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Details - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    const portfolioItems = portfolioData.slice(43, 45);

    return (
        <main>
            <PortfolioDetailsIntro />
            <PortfolioDetailsOverviewTwo />
            <PortfolioDetailsThumb />
            <PortfolioDetailsStep animateCls="reveal-text" />
            {/* related portfolio item */}
            <div className="tp-portfolio-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-25">
                                <h2 className="tp-portfoliom-m-title reveal-text">Related Project</h2>
                            </div>
                        </div>
                        {portfolioItems.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <PortfolioSingleCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;