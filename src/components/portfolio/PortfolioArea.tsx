"use client";
import PortfolioSingleCard from "./subComponents/PortfolioSingleCard";
import { motion, AnimatePresence } from "framer-motion";
import { filterItems } from "@/data/portfolio-data-two";
import portfolioData from "@/data/portfolio-data";
import { useState } from "react";

const PortfolioArea = () => {
    const [activeTab, setActiveTab] = useState("all");

    // Filter portfolio based on active tab
    const filteredPortfolio =
        activeTab === "all"
            ? portfolioData.slice(43, 49) // all items
            : portfolioData.slice(43, 49).filter((item) => item.filterCategory?.includes(activeTab));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    return (
        <div className="tp-portfolio-inner-ptb tp-animate-tab pb-90">
            <div className="container">
                {/* Tabs */}
                <div className="tp-portfolio-inner-tab-wrap mb-55 tp_fade_anim" data-delay=".7">
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
                        <div className="row gx-60">
                            {filteredPortfolio.map((item) => (
                                <div className="col-lg-6" key={item.id}>
                                    <PortfolioSingleCard item={item} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PortfolioArea;
