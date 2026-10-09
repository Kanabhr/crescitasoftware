import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";

// Magnetic Image Item
const MagneticImage = ({
    src,
    delay,
}: {
    src: string;
    delay: number;
}) => (
    <div
        className="mp-hero-magnetic-item mb-20 tp_fade_anim"
        data-delay={`.${delay}`}
        data-fade-from="bottom"
        data-ease="bounce"
    >
        <Image
            width={256}
            height={196}
            decoding="async"
            src={src}
            className="mp-hero-magnetic-image"
            alt="magnetic image"
        />
    </div>
);

const ModernAgencyHero = () => {
    const magneticImages = [
        "/assets/img/hero/mp/thumb.jpg",
        "/assets/img/hero/mp/thumb-2.jpg",
        "/assets/img/hero/mp/thumb-3.jpg",
        "/assets/img/hero/mp/thumb-4.jpg",
    ];

    return (
        <div className="mp-hero-area mp-hero-spacing">
            <div className="container">
                <div className="row align-items-center">
                    {/* Awards / Logo */}
                    <div className="col-xl-3">
                        <div
                            className="mp-hero-awards mb-30 p-relative d-inline-block tp_fade_anim"
                            data-delay=".5"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Image
                                width={155}
                                height={156}
                                className="rotate-infinite"
                                src="/assets/img/hero/mp/award-year.png"
                                alt="award"
                            />
                            <Image
                                width={31}
                                height={15}
                                className="mp-hero-w-logo"
                                src="/assets/img/hero/mp/w.png"
                                alt="logo"
                            />
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="col-xl-9">
                        <div className="mp-hero-content ml-75">
                            <h2 className="mp-hero-title tp-ff-inter mb-40 tp-char-animation">
                                The perfect place
                                <br />
                                for your masterpiece
                            </h2>

                            {/* Hero Buttons */}
                            <div className="mp-hero-btn d-flex flex-wrap gap-2 mb-50">
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink className="tp-btn mb-10" href="/portfolio">
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
                                <div className="tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink className="tp-btn tp-btn-grey mb-10" href="/about-me">
                                        <span>
                                            <span className="text-1">Contact Me</span>
                                            <span className="text-2">Contact Me</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>

                            {/* Magnetic Images */}
                            <div className="mp-hero-magnetic">
                                <div className="mp-hero-magnetic-image-wrap d-flex flex-wrap flex-md-nowrap gap-3">
                                    {magneticImages.map((src, idx) => (
                                        <MagneticImage key={idx} src={src} delay={0.4 + idx * 0.1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Title */}
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="mp-hero-bigtitle-wrap jump-anim text-center pt-10 tp_fade_anim"
                            data-delay=".8"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <h2 className="mp-hero-bigtitle tp-ff-sequel-semi-bold">
                                Cunnet
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyHero;
