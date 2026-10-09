
"use client";
import useSlideshowPortfolio from '@/hooks/useSlideshowPortfolio';
import { portfolioThumbSliderItems } from '@/data/portfolio-data-two';
import Link from 'next/link';

const PortfolioThumbSliderMain: React.FC = () => {
    const { sliderRef, sliderBGRef, sliderFGRef, titlesRef, nextBtnRef, prevBtnRef } = useSlideshowPortfolio();

    return (
        <main>
            <div className="tp-portfolio-slider__main fix" ref={sliderRef} style={{ overflow: "hidden" }}>
                {/* Contact information */}
                <div className="tp-portfolio-slider__copyright d-none d-lg-block">
                    <p>
                        Have a project in mind?{' '}
                        <Link href="#">
                            Let&apos;s Talk.
                        </Link>
                    </p>
                </div>

                <div className="tp-portfolio-slider__mail d-none d-sm-block">
                    <Link href="mailto:agntix@gmail.com">
                        agntix@gmail.com
                    </Link>
                </div>

                <div className="tp-portfolio-slider__social d-none d-sm-block">
                    <Link href="#">Fb</Link>{" "}
                    <Link href="#">In</Link>{" "}
                    <Link href="#">Be</Link>
                </div>

                {/* Main slider */}
                <div className="tp-portfolio-slider__wrap slider slider--bg" ref={sliderBGRef}>
                    {portfolioThumbSliderItems.map((item) => (
                        <div key={`main-${item.id}`} className="tp-portfolio-slider__item">
                            <div
                                className="tp-portfolio-slider__item-inner"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                        </div>
                    ))}
                </div>

                {/* Small slider */}
                <div className="tp-portfolio-slider__wrap tp-portfolio-slider-small__wrap slider slider--fg" ref={sliderFGRef}>
                    {portfolioThumbSliderItems.map((item) => (
                        <div key={`small-${item.id}`} className="tp-portfolio-slider__item">
                            <div
                                className="tp-portfolio-slider__item-inner"
                                style={{ backgroundImage: `url(${item.smallImage})` }}
                            />
                        </div>
                    ))}
                </div>

                {/* Portfolio names */}
                <div className="tp-portfolio-slider-type">
                    {portfolioThumbSliderItems.map((item, index) => (
                        <div
                            key={`name-${item.id}`}
                            className="type__item words chars splitting"
                            ref={el => {
                                if (el) titlesRef.current[index] = el;
                            }}
                        >
                            <h4 className="tp-portfolio-slider-type-title">
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </h4>
                        </div>
                    ))}
                </div>
                {/* Navigation */}
                <div className='tp-portfolio-mix-slider-navigation overflow-hidden'>
                    <div className='container-fluid container-1800'>
                        <div className="slider-nav">
                            <button
                                className="tp-portfolio-mix-button-prev nav-icon"
                                ref={prevBtnRef}>
                                <i className="fa-solid fa-angle-left"></i>
                                Prev
                            </button>
                            <button
                                className="tp-portfolio-mix-button-next nav-icon"
                                ref={nextBtnRef}>
                                Next
                                <i className="fa-solid fa-angle-right" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioThumbSliderMain;