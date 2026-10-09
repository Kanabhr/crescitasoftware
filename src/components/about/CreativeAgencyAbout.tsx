import AboutFeatureItem from "./subComponents/AboutFeatureItem";
import AboutIntro from "./subComponents/AboutIntro";

const features = [
    {
        title: "Creative-First Approach",
        description:
            "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
        image: "/assets/img/about/thumb.jpg",
    },
    {
        title: "Tailored Digital Solutions",
        description:
            "We craft digital experiences uniquely aligned with your brand goals and audience needs.",
        image: "/assets/img/about/thumb-2.jpg",
    },
];

const CreativeAgencyAbout = () => {
    return (
        <section className="tp-about-area pt-85">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-10 col-xl-12">
                        <AboutIntro />
                    </div>
                </div>

                <div className="tp-about-border mt-20 pt-55">
                    <div className="row">
                        <div className="col-lg-4" />
                        <div className="col-lg-8">
                            <div className="tp-about-thumb-wrap ml-75">
                                <div className="row gx-80">
                                    {features.map((item, index) => (
                                        <div className="col-lg-6 col-md-6" key={index}>
                                            <AboutFeatureItem {...item} />
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

export default CreativeAgencyAbout;
