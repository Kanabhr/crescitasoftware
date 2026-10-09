"use client";
import PortfolioThreeSingleItem from "./subComponents/PortfolioThreeSingleItem";
import { motion, AnimatePresence } from "framer-motion";
import { filterItems } from "@/data/portfolio-data-two";
import portfolioData from "@/data/portfolio-data";
import { useState } from "react";

const PortfolioThreeArea = () => {
    const [activeTab, setActiveTab] = useState("all");

    const baseData = portfolioData.slice(58, 66);

    const filteredPortfolio =
        activeTab === "all"
            ? baseData
            : baseData.filter((item) =>
                item.filterCategory?.includes(activeTab)
            );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab tp-portfolio-inner-tab-style-3 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-tab-content-wrap">

                            {/* Tabs */}
                            <div className="tp-portfolio-inner-tab-wrap mb-40">
                                <nav>
                                    <div className="nav nav-tabs justify-content-center" role="tablist">
                                        {filterItems.map((tab) => (
                                            <button
                                                key={tab.key}
                                                className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveTab(tab.key)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            {/* Animated Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    className="tab-content p-relative"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <PortfolioThreeSingleItem
                                        portfoloData={filteredPortfolio}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeArea;
