import { ArrowBottomIcon, ArrowIconFive } from "@/svg/ArrowIcons";
import SmartLink from "../common/SmartLink";
import Link from "next/link";

const services = ["Innovation", "Imagination", "Creativity", "Proven Expertise", "Competence",
    "Experience", "Web design", "User Experience", "Mobile Design", "Proven Expertise",
    "Development", "Motion",
];

const AboutServiceItem = ({ title }: { title: string }) => (
    <li>
        <Link href="#">
            <span className="explore-text" data-text={title}>
                {title}
            </span>
        </Link>
    </li>
);

const AboutServiceList = () => (
    <ul>
        {services.map((service, index) => (
            <AboutServiceItem key={index} title={service} />
        ))}
    </ul>
);

const MotionGraphicAbout = () => {
    return (
        <div id="about" className="mg-about-area pb-120">
            <div className="container-fluid container-1886">
                <div className="row">
                    {/* Section Title */}
                    <div className="col-lg-12">
                        <div className="mg-about-title-wrap jump-anim text-center">
                            <h2 className="mg-about-bigtitle tp-ff-sequel-bold-head text-uppercase">
                                About Cunnet
                            </h2>
                            <div className="tp-about-border mt-45 pt-50" />
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="col-lg-5">
                        <div className="mg-about-subtitle tp_fade_anim" data-delay=".3">
                            <span className="ca-team-subtitle text-uppercase d-block mb-15">
                                <span>[ </span>About us<span> ]</span>
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-7">
                        <div className="mg-about-content ml-125 mb-40">
                            <h2 className="mg-about-title tp-ff-inter mb-35 tp_fade_anim" data-delay=".4">
                                Cunnet is a creative motion
                                <br />
                                design studio based in new york
                                <br />
                                we think <span>strategically</span> like an{" "}
                                <span>agency</span>
                                <br />
                                and craft powerful.
                            </h2>

                            <div className="row">
                                <div className="col-xl-8">
                                    {/* Services */}
                                    <div
                                        className="ca-hero-service mg-about-service mb-50 tp_fade_anim"
                                        data-delay=".5"
                                    >
                                        <AboutServiceList />
                                    </div>

                                    {/* Buttons */}
                                    <div className="mg-about-btn pp-about-btn d-flex flex-wrap gap-3">
                                        {/* Download CV */}
                                        <div
                                            className="tp_fade_anim"
                                            data-delay=".5"
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <Link href="assets/img/cv/mycv.docx"
                                                className="tp-btn pp-btn-download tp-btn-red"
                                            >
                                                <span>
                                                    <span className="text-1">Download CV</span>
                                                    <span className="text-2">Download CV</span>
                                                </span>
                                                <ArrowBottomIcon />
                                            </Link>
                                        </div>

                                        {/* Discover */}
                                        <div
                                            className="tp-btn-group tp-btn-group-transparent-2 tp_fade_anim"
                                            data-delay=".5"
                                            data-fade-from="bottom"
                                            data-ease="bounce"
                                        >
                                            <SmartLink className="tp-btn-circle" href="/about-us">
                                                <ArrowIconFive />
                                            </SmartLink>

                                            <SmartLink className="tp-btn z-index-1" href="/about-us">
                                                Discover now
                                            </SmartLink>

                                            <SmartLink className="tp-btn-circle" href="/about-us">
                                                <ArrowIconFive />
                                            </SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Content */}
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicAbout;
