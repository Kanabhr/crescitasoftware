import AnimatedWords from "../common/TypewriterWords";
import { ArrowIconThree } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const services = [
    "Branding",
    "Development",
    "Design",
    "Marketing",
    "Creative Design",
];

const heroWords = ["Bold", "Brave", "Iconic"];

const DigitalStudioHero = () => {
    return (
        <div className="ca-hero-area ca-hero-spacing tp-hero-bg">
            <div className="container">
                <div className="row">
                    {/* Left Hero Section */}
                    <div className="col-xl-4 col-lg-5 col-md-5">
                        <div className="ca-hero-left pt-65 pb-30">
                            <div className="ca-hero-video p-relative">
                                <video loop muted autoPlay playsInline>
                                    <source
                                        src="https://html.aqlova.com/videos/cunnet/ca-video-2.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            <div className="ca-hero-service">
                                <ul>
                                    {services.map((service, idx) => (
                                        <li key={idx}>
                                            <Link href="#">
                                                <span className="explore-text" data-text={service}>
                                                    {service}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Center Hero Section */}
                    <div className="col-xl-5 col-lg-7 col-md-7">
                        <div className="ca-hero-title-wrap pt-50 pb-105">
                            <h2 className="ca-hero-title cd-headline clip tp_title_anim mb-55 no-js">
                                We
                                <br />
                                Build
                                <br />
                                <AnimatedWords words={heroWords} />
                                <br />
                                Ideas
                            </h2>

                            <SmartLink
                                className="tp-btn tp-btn-norotate ca-hero-btn tp-ff-inter"
                                href="/portfolio"
                            >
                                <span>
                                    <span className="text-1">Explore All Work</span>
                                    <span className="text-2">Explore All Work</span>
                                </span>
                                <i>
                                    <ButtonArrowIcon />
                                    <ButtonArrowIcon />
                                </i>
                            </SmartLink>
                        </div>
                    </div>

                    {/* Right Hero Section */}
                    <div className="col-xl-3 col-lg-5">
                        <div className="ca-hero-dec ml-60 pb-30">
                            <p>
                                <ArrowIconThree />
                                We build websites, apps &<br />
                                campaigns that actually move the<br />
                                needle for growing brands. Brand<br />
                                design a the have to success<br />
                                whether you breath.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Thumbnail */}
            <div className="ca-hero-thumb fix scale-up-img">
                <Image
                    width={1905}
                    height={720}
                    data-speed="0.4"
                    className="img-cover scale-up"
                    src="/assets/img/hero/ca/thumb.jpg"
                    alt="thumb"
                />
            </div>
        </div>
    );
};

export default DigitalStudioHero;
