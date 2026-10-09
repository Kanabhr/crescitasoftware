"use client";
import PersonalPHeroButton from "./subComponents/PersonalPHeroButton";
import HeroParallaxImage from "./subComponents/HeroParallaxImage";
import Image from "next/image";
import Link from "next/link";

const heroServices = [
    "Branding",
    "Development",
    "Design",
    "Marketing",
    "Creative Design",
];

const PersonalPortfolioHero = () => {
    return (
        <div
            className="pp-hero-area scene p-relative z-index-1 bg-position fix pp-hero-spacing"
            style={{ backgroundImage: "url(/assets/img/hero/pp/bg.jpg)" }}
        >
            {/* Background Parallax Image */}
            <HeroParallaxImage />

            <div className="container">
                <div className="row align-items-end">
                    {/* Left Column */}
                    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-5">
                        <div className="pp-hero-avatar pb-190">
                            <Image
                                src="/assets/img/hero/pp/thumb-2.jpg"
                                alt="Avatar"
                                width={59}
                                height={59}
                            />
                        </div>

                        <div className="pp-hero-video mb-30">
                            <video loop muted autoPlay playsInline>
                                <source
                                    src="https://html.aqlova.com/videos/cunnet/video-2.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-xxl-2 col-xl-2 col-lg-5 col-md-5">
                        <div className="ca-hero-service pp-hero-service mb-30 mr-80">
                            <ul>
                                {heroServices.map((service) => (
                                    <li key={service}>
                                        <Link href="#">
                                            <span
                                                className="explore-text"
                                                data-text={service}
                                            >
                                                {service}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-xxl-5 col-xl-7 offset-xxl-1">
                        <div className="pp-hero-content ml-55">
                            <span className="pp-hero-subtitle text-white mb-10 d-inline-block">
                                Always dedicated strategic
                            </span>

                            <h2 className="pp-hero-title text-white mb-50">
                                Welcome to space where
                                imagination meets purpose
                                impactful designs.
                            </h2>

                            <div className="pp-hero-btn d-flex flex-wrap gap-2">
                                <PersonalPHeroButton
                                    href="/about-me"
                                    text="How can i help?"
                                    variant="light"
                                />

                                <PersonalPHeroButton
                                    href="/contact"
                                    text="Contact Me"
                                    variant="outline"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioHero;
