"use client";
import CreativeAgencyPortfolioItem from "./subComponents/CreativeAgencyPortfolioItem";
import { motion, AnimatePresence } from "framer-motion";
import { filterItems } from "@/data/portfolio-data-two";
import portfolioData from "@/data/portfolio-data";
import { useState } from "react";

const PortfolioFourArea = () => {
    const [activeTab, setActiveFilter] = useState("all");

    const baseData = portfolioData.slice(66, 70);

    // Filter portfolio based on active tab
    const filteredPortfolio =
        activeTab === "all"
            ? baseData // all items
            : baseData.filter((item) => item.filterCategory?.includes(activeTab));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    return (
        <div className="tp-portfolio-inner-ptb tp-portfolio-inner-tab-style-4 pt-100 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-tab-content-wrap">
                            {/* FILTER TABS */}
                            <div className="tp-portfolio-inner-tab-wrap mb-40">
                                <nav>
                                    <div className="nav nav-tabs justify-content-center" role="tablist">
                                        {filterItems.map((tab) => (
                                            <button
                                                key={tab.key}
                                                className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                                                type="button"
                                                onClick={() => setActiveFilter(tab.key)}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            {/* Portfolio Items with animation */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    className="tab-content p-relative"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {/* PORTFOLIO ITEMS */}
                                    <div className="row gx-60 tp-portfolio-filter-wrap">
                                        {filteredPortfolio.map((item, index) => (
                                            <CreativeAgencyPortfolioItem key={index} {...item} />
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

export default PortfolioFourArea;
