"use client";

import portfolioData from "@/data/portfolio-data";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const PortfolioRevealingSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const portfolioRevealingSliderData = portfolioData.slice(38, 43); // IDs 39 to 43

    useEffect(() => {
        if (!sliderRef.current) return;

        const slides = sliderRef.current.querySelectorAll<HTMLDivElement>(
            ".tp-portfolio-revealing-slide"
        );
        const controls = sliderRef.current.querySelectorAll<HTMLDivElement>(
            ".tp-portfolio-revealing-slider-control"
        );

        const numOfSlides = slides.length;
        const slidingAT = 1300;
        let slidingBlocked = false;

        slides.forEach((el, index) => {
            const i = index + 1;
            el.classList.add(`tp-portfolio-revealing-slide-${i}`);
            el.dataset.slide = i.toString();
        });

        if (!slides.length) return;
        slides[0].classList.add("s-active");

        const changeSlide = (isRight: boolean, controlEl?: Element) => {
            if (slidingBlocked) return;
            slidingBlocked = true;

            const current = sliderRef.current!.querySelector<HTMLDivElement>(
                ".tp-portfolio-revealing-slide.s-active"
            );
            if (!current) return;

            let index = Number(current.dataset.slide);
            index = isRight ? index + 1 : index - 1;
            if (index < 1) index = numOfSlides;
            if (index > numOfSlides) index = 1;

            const next = sliderRef.current!.querySelector<HTMLDivElement>(
                `.tp-portfolio-revealing-slide-${index}`
            );
            if (!next) return;

            controlEl?.classList.add("a-rotation");

            current.classList.remove("s-active", "s-active-prev");
            sliderRef.current!
                .querySelector(".tp-portfolio-revealing-slide.s-prev")
                ?.classList.remove("s-prev");

            next.classList.add("s-active");
            if (!isRight) next.classList.add("s-active-prev");

            let prevIndex = index - 1;
            if (prevIndex < 1) prevIndex = numOfSlides;
            sliderRef.current!
                .querySelector(`.tp-portfolio-revealing-slide-${prevIndex}`)
                ?.classList.add("s-prev");

            const direction = isRight ? 1 : -1;
            const currentHeading = current.querySelector(
                ".tp-portfolio-revealing-slide-heading"
            );
            const nextHeading = next.querySelector(
                ".tp-portfolio-revealing-slide-heading"
            );

            if (currentHeading && nextHeading) {
                gsap.timeline()
                    .to(currentHeading, {
                        scaleX: 2,
                        xPercent: 20 * direction,
                        duration: 1,
                        ease: "power3.inOut",
                    }, 0)
                    .fromTo(
                        nextHeading,
                        { scaleX: 2, xPercent: -10 * direction },
                        {
                            scaleX: 1,
                            xPercent: 0,
                            duration: 1,
                            ease: "power3.inOut",
                        },
                        0
                    );
            }

            setTimeout(() => {
                controlEl?.classList.remove("a-rotation");
                slidingBlocked = false;
            }, slidingAT * 0.75);
        };

        controls.forEach((control) => {
            control.addEventListener("click", function () {
                const isRight = control.classList.contains("m-right");
                changeSlide(isRight, control);
            });
        });

        const wheelHandler = (e: WheelEvent) => {
            if (slidingBlocked) return;
            if (e.deltaY > 0) changeSlide(true);
            else if (e.deltaY < 0) changeSlide(false);
        };

        window.addEventListener("wheel", wheelHandler);

        return () => {
            window.removeEventListener("wheel", wheelHandler);
        };
    }, []);

    return (
            <div ref={sliderRef} className="tp-portfolio-revealing-slider">
                <div className="tp-portfolio-revealing-slider-slides">
                    {portfolioRevealingSliderData.map((item, index) => (
                        <div key={index} className="tp-portfolio-revealing-slide">
                            <div
                                className="tp-portfolio-revealing-slide-inner bg-position"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tp-portfolio-revealing-slide-content">
                                                <span className="tp-portfolio-revealing-slide-text">
                                                    {item.subtitle}
                                                </span>
                                                <h2 className="tp-portfolio-revealing-slide-heading">
                                                    <Link href={`/portfolio-details/${item.id}`}>
                                                        {item.title}
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tp-portfolio-revealing-slider-control">
                    <div className="tp-portfolio-revealing-slider-control-line" />
                    <div className="tp-portfolio-revealing-slider-control-line" />
                </div>

                <div className="tp-portfolio-revealing-slider-control tp-portfolio-revealing-slider-control-right m-right">
                    <div className="tp-portfolio-revealing-slider-control-line" />
                    <div className="tp-portfolio-revealing-slider-control-line" />
                </div>

                <div className="tp-portfolio-revealing-slider-social">
                    <Link className="tp-hover-btn-item" href="#">Fb</Link>
                    <Link className="tp-hover-btn-item" href="#">In</Link>
                    <Link className="tp-hover-btn-item" href="#">Be</Link>
                </div>
            </div>
    );
};

export default PortfolioRevealingSlider;