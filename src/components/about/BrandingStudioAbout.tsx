import { ArrowIconSix, ButtonArrowIcon } from "@/svg";
import SmartLink from "../common/SmartLink";
import Image from "next/image";

const aboutItems = [
    {
        id: 1,
        title: "Creative-First Approach",
        description:
            "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
        image: "/assets/img/about/cs/thumb.jpg",
    },
    {
        id: 2,
        title: "Tailored Digital Solutions",
        description:
            "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
        image: "/assets/img/about/cs/thumb-2.jpg",
    },
];

const BrandingStudioAbout = () => {
    return (
        <section className="tp-about-area pt-145">
            <div className="container">
                {/* Title */}
                <div className="row align-items-end">
                    <div className="col-xxl-10 col-xl-12">
                        <div className="tp-about-title-wrap mb-30">
                            <h2 className="tp-section-title tp-text-perspective">
                                At cunnet, we don&apos;t just build websites <br />
                                or campaigns—we craft purpose-driven digital journeys.
                                <span className="tp-about-btn-transform d-inline-block ml-20">
                                    <SmartLink href="/about-us" className="tp-btn tp-ff-inter">
                                        <span>
                                            <span className="text-1">About Us</span>
                                            <span className="text-2">About Us</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="tp-about-border mt-20 pt-55">
                    <div className="row">
                        {/* Subtitle */}
                        <div className="col-lg-4">
                            <div className="tp-about-subtitle-wrap mb-30">
                                <span className="tp-about-subtitle">
                                    <ArrowIconSix />
                                    About Us
                                </span>
                            </div>
                        </div>

                        {/* About Items */}
                        <div className="col-lg-8">
                            <div className="tp-about-thumb-wrap ml-75">
                                <div className="row gx-80">
                                    {aboutItems.map(({ id, title, description, image }) => (
                                        <div key={id} className="col-lg-6 col-md-6">
                                            <div className="tp-about-item cs-about-item anim-zoomin-wrap mb-40">
                                                <div className="mb-35">
                                                    <div className="tp-about-thumb fix anim-zoomin">
                                                        <Image
                                                            width={491}
                                                            height={600}
                                                            data-speed=".8"
                                                            className="w-100"
                                                            src={image}
                                                            alt={title}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tp-about-content">
                                                    <h3 className="tp-about-title mb-10">{title}</h3>
                                                    <p className="tp-about-dec">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingStudioAbout;
