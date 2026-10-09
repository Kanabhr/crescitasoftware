"use client";
import { PortfolioNextPrevIcon } from "@/svg/ArrowIcons";
import { useSkewSlider } from "@/hooks/useSkewSlider";
import portfolioData from "@/data/portfolio-data";
import Link from "next/link";

const PortfolioCreativeSkewSlider = () => {
    const { sliderRef, slideNumberRef, next, prev } = useSkewSlider();
    //display portfolio data item 
    const displayPortfolio = portfolioData.slice(32, 38);

    return (
        <div className="skew-slider-area tp-portfolio-skew-wrap overflow" ref={sliderRef}>
            <div className="skew-slider-wrap">
                {/* Slider container */}
                {displayPortfolio.map((slide, index) => (
                    <div key={index} className="skew-slider-item slide">
                        <div className="slide__img"
                            style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="skew-slider-content">
                            <span>{slide.title}</span>
                            <h4>
                                <Link href={`/portfolio-details/${slide.id}`}>
                                    {slide.title}
                                </Link>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fixed position controls (won't be affected by slide animations) */}
            <div className="skew-slider-controls">
                <div className="tp-portfolio-slider__copyright">
                    <p>Have a project in mind? <Link href="/contact">{`Let's`} Talk.</Link></p>
                </div>

                <div className="tp-portfolio-slider__social">
                    {['Fb', 'In', 'Be'].map((social, index) => (
                        <Link key={index} href="#">{social}</Link>
                    ))}
                </div>

                <div className="skew-slider-arrow slides-nav">
                    <button onClick={prev} className="skew-slider-prev d-flex align-items-center">
                        <span className="icon-1">
                            <PortfolioNextPrevIcon direction="right" />
                        </span>
                        <span className="ml-5">Prev</span>
                    </button>
                    <button onClick={next} className="skew-slider-next d-flex align-items-center">
                        <span className="mr-5">Next</span>
                        <span className="icon-2">
                            <PortfolioNextPrevIcon direction="left" />
                        </span>
                    </button>
                </div>

                <div className="slides-numbers-wrap">
                    <div className="slides-numbers">
                        <span className="active text-1" ref={slideNumberRef}>01</span>
                        <span className="text-2">/</span>
                        <span className="text-3 total-slide">{displayPortfolio.length.toString().padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCreativeSkewSlider;