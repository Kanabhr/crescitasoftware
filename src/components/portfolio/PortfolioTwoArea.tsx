"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioSingleCard from "./subComponents/PortfolioSingleCard";
import portfolioData from "@/data/portfolio-data";

const tabs = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Web Design" },
    { id: "motion", label: "Motion Design" },
    { id: "ai", label: "AI Tools" },
];

const PortfolioTwoArea = () => {
    const [activeTab, setActiveTab] = useState("all");

    // Filter portfolio based on active tab
    const filteredPortfolio =
        activeTab === "all"
            ? portfolioData.slice(49, 57) // all items
            : portfolioData
                .slice(49, 57)
                .filter((item) => item.filterCategory?.includes(activeTab));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab tp-portfolio-inner-tab-style-2 pb-75">
            <div className="container">
                <div className="row">
                    {/* Tabs */}
                    <div className="col-xxl-4 col-xl-3">
                        <div className="tp-portfolio-inner-tab-wrap mb-25">
                            <nav>
                                <div className="nav nav-tabs" role="tablist">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                            type="button"
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* Portfolio Items */}
                    <div className="col-xxl-8 col-xl-9">
                        <div className="tp-portfolio-tab-content-wrap">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab} // triggers re-animation on tab change
                                    className="tab-content p-relative"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="row gx-60">
                                        {filteredPortfolio.map((item, index) => (
                                            <div className="col-lg-6" key={index}>
                                                <PortfolioSingleCard item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTwoArea;
