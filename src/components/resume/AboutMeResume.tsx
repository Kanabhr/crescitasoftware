import { ArrowIconSix } from "@/svg";

const resumeData = [
    {
        id: 1,
        year: "2015 - 2018",
        title: "Bachelor’s in Graphic Design",
        location: "New York School of Visual Arts",
        description:
            "Gained strong foundations in design theory, typography, and visual communication.",
        delay: 0.3,
    },
    {
        id: 2,
        year: "2019 - 2021",
        title: "Diploma in Motion Graphics",
        location: "Los Angeles Creative Institute",
        description:
            "Gained strong foundations in design theory, typography, and visual communication.",
        delay: 0.4,
    },
    {
        id: 3,
        year: "2022 - 2024",
        title: "UI/UX Design Certification",
        location: "San Francisco Design Academy",
        description:
            "Gained strong foundations in design theory, typography, and visual communication.",
        delay: 0.5,
    },
];

const AboutMeResume = () => {
    return (
        <div className="about-me-resume-area pt-115">
            <div className="container">
                <div className="row">
                    {/* Subtitle */}
                    <div className="col-lg-2">
                        <div className="tp-about-subtitle-wrap mb-20 mt-15">
                            <span className="tp-about-subtitle text-uppercase">
                                <ArrowIconSix />{" "} resume
                            </span>
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="col-lg-7">
                        <div className="about-me-resume-content mb-20">
                            <h2 className="about-me-resume-maintitle text-uppercase reveal-text">
                                The digital
                                <br /> journey
                            </h2>
                        </div>
                    </div>

                    {/* Side Subtitle */}
                    <div className="col-lg-3">
                        <div className="about-me-subtitle-wrap d-flex justify-content-lg-end align-items-end h-100">
                            <span className="tp-about-subtitle text-uppercase mb-30">
                                [ My Education ]
                            </span>
                        </div>
                    </div>

                    {/* Resume Items */}
                    <div className="col-xl-10 offset-xl-2">
                        <div className="about-me-resume-wrap mt-40">
                            {resumeData.map((item) => (
                                <div
                                    key={item.id}
                                    className="about-me-resume-item tp_fade_anim"
                                    data-delay={item.delay}
                                >
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <div className="about-me-resume-date mb-30">
                                                <span>{item.year}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-me-resume-info ml-40 mb-30">
                                                <h3 className="about-me-resume-title tp-ff-inter">
                                                    {item.title}
                                                </h3>
                                                <span className="about-me-resume-location">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-me-resume-dec ml-50 mb-30">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeResume;