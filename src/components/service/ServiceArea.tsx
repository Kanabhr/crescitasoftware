"use client";
import { ButtonArrowIcon, ServiceArrowIcon } from "@/svg";
import { useEffect, useRef, useState } from "react";
import servicesData from "@/data/service-data";
import SmartLink from "../common/SmartLink";
import Image from "next/image";
import gsap from "gsap";

const ServiceArea = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // initial + hover animation
    useEffect(() => {
        if (!imageRefs.current.length) return;

        // initial state (same as HTML)
        gsap.set(imageRefs.current, {
            opacity: 0,
            y: 50,
            scale: 1,
            zIndex: 1,
        });

        gsap.set(imageRefs.current[0], {
            opacity: 1,
            y: 0,
            zIndex: 2,
        });
    }, []);

    const handleHover = (index: number) => {
        setActiveIndex(index);

        imageRefs.current.forEach((img, i) => {
            if (i === index) {
                gsap.to(img, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    zIndex: 2,
                });
            } else {
                gsap.to(img, {
                    opacity: 0,
                    y: 200,
                    scale: 0.8,
                    duration: 0.8,
                    ease: "power3.out",
                    zIndex: 1,
                });
            }
        });
    };
    return (
        <div id="service" ref={containerRef} className="tp-service-area tp-panel-pin-area tp-bg-grey pt-145 pb-90">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-11 col-xl-12">
                        <div className="tp-about-title-wrap mb-30">
                            <h2 className="tp-section-title reveal-text">At cunnet, we don&apos;t just build website<br />
                                or campaigns we craft purpose-driven
                                digital journeys.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="tp-about-border mt-20 pt-40">
                    <div className="row">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-4 mb-40">
                            <div className="tp-service-content mr-60 mt-20">
                                <div className="tp-service-sales-wrap tp-panel-pin fix p-relative">
                                    <div className="tp-service-img-wrapper image-container">
                                        {servicesData.slice(0, 6).map((service, index) => (
                                            <div
                                                key={index}
                                                className="hover-image"
                                                ref={(el) => {
                                                    if (el) imageRefs.current[index] = el;
                                                }}
                                            >
                                                {service.image && (
                                                    <Image
                                                        className="thumb"
                                                        src={service.image}
                                                        alt="Service Image"
                                                        width={493}
                                                        height={450}
                                                        priority={index === 0}
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT LIST */}
                        <div className="col-lg-8 mb-40">
                            <div className="tp-service-list-wrap ml-60">
                                {servicesData.slice(0, 6).map((service, index) => (
                                    <div
                                        key={index}
                                        className={`tp-service-item service-item mb-5 ${activeIndex === index ? "active" : ""
                                            }`}
                                        onMouseEnter={() => handleHover(index)}
                                    >
                                        <h2 className="tp-service-title tp-ff-sequel-roman d-inline-block">
                                            <SmartLink href={`/service-details/${service.id}`}>
                                                {service.title}
                                                <span className="tp-service-icon d-inline-block">
                                                    <ServiceArrowIcon />
                                                </span>
                                            </SmartLink>
                                        </h2>
                                    </div>
                                ))}

                                <div className="tp-service-btn pt-30">
                                    <SmartLink className="tp-btn" href="/service">
                                        <span>
                                            <span className="text-1">More Services</span>
                                            <span className="text-2">More Services</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;