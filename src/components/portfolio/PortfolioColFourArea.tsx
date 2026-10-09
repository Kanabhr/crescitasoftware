"use client";
import ModernAPorfolioSingleCard from "./subComponents/ModernAPorfolioSingleCard";
import { filterItems } from "@/data/portfolio-data-two";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolio-data";
import { useState } from "react";

const PortfolioColFourArea = () => {
    const [activeTab, setActiveTab] = useState("all");
    const portfolioItems = portfolioData.slice(70, 82);

    // Filter portfolio based on active tab
    const filteredPortfolio =
        activeTab === "all"
            ? portfolioItems // all items
            : portfolioItems.filter((item) => item.filterCategory?.includes(activeTab));

    // Animation variants  
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };
    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab tp-portfolio-inner-tab-style-3 pb-100">
            <div className="container">
                <div className="tp-portfolio-tab-content-wrap">
                    <div className="tp-portfolio-inner-tab-wrap mb-50">
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
                    {/* Portfolio Items */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab} // triggers re-animation on tab change
                            className="tab-content p-relative"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit">
                            <div className="row">
                                {filteredPortfolio.map((item, index) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                        <ModernAPorfolioSingleCard item={item} spacingCls="mb-60" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default PortfolioColFourArea;