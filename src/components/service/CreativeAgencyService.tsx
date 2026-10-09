"use client";

import { ButtonArrowIcon, ServiceArrowIcon } from "@/svg";
import { useEffect, useRef, useState } from "react";
import servicesData from "@/data/service-data";
import SmartLink from "../common/SmartLink";
import Image from "next/image";
import gsap from "gsap";

const CreativeAgencyService = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const displayServiceData = servicesData.slice(0, 6);

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
        <div
            ref={containerRef}
            className="tp-service-area tp-panel-pin-area tp-bg-grey pt-120 pb-120"
        >
            <div className="container">
                <div className="row">
                    {/* LEFT IMAGE */}
                    <div className="col-12">
                        <div className="tp-service-subtitle-wrap tp-about-border pt-25 d-flex justify-content-between gap-3 mb-50">
                            <span className="tp-section-subtitle tp-ff-sequel-roman">Our latest Services</span>
                            <span className="tp-section-subtitle tp-ff-sequel-roman">( 24 )</span>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-40">
                        <div className="tp-service-content mr-60 mt-20">
                            <div className="tp-service-sales-wrap tp-panel-pin fix p-relative">
                                <div className="tp-service-img-wrapper image-container">
                                    {displayServiceData.map((service, index) => (
                                        <div
                                            key={index}
                                            className="hover-image"
                                            ref={(el) => {
                                                if (el) imageRefs.current[index] = el;
                                            }}
                                        >
                                            {service.image && (
                                                <Image
                                                    src={service.image}
                                                    alt="Service Image"
                                                    fill
                                                    sizes="(max-width: 992px) 100vw, 33vw"
                                                    style={{ objectFit: "cover" }}
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
                            {displayServiceData.map((service, index) => (
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
    );
};

export default CreativeAgencyService;

