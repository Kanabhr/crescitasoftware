import AnimatedCounter from "../shared/Counter/AnimatedCounter";

interface FunfactItem {
    number: number;
    suffix?: string;
    label: string;
    subtitle: string;
}

const funfacts: FunfactItem[] = [
    { number: 120, suffix: "+", label: "Projects Completed", subtitle: "[ Nice! ]" },
    { number: 16, suffix: "+", label: "Years of Experience", subtitle: "[ Holy Moly! ]" },
    { number: 185, suffix: "%", label: "Growing Agency", subtitle: "[ Ho Ho! ]" },
];

const ServiceTwoFunfact = () => {
    return (
        <div className="tp-funfact-area pt-150 pb-165">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-funfact-title-wrap mb-30">
                            <span className="tp-section-subtitle">Fun Facts</span>
                            <h2 className="tp-section-title reveal-text tp-ff-sequel-semi-bold">
                                Numbers that speak volumes
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-funfact-content-wrap mt-75">
                            <div className="tp-funfact-content-dec mb-80 ml-25">
                                <p>
                                    Whether you need stunning visuals for your website<br />
                                    captivating graphics for your marketing materials innovative<br />
                                    UI/UX designs for your app our team of experts.
                                </p>
                            </div>
                            <div className="tp-funfact-item-wrap">
                                {funfacts.map((item, idx) => (
                                    <div key={idx} className="tp-funfact-item d-flex align-items-center">
                                        <h2 className="tp-funfact-numbar tp-ff-sequel-semi-bold mr-40 mb-20">
                                            <AnimatedCounter min={0} max={item.number} />
                                            {item.suffix}
                                        </h2>
                                        <div className="tp-funfact-info mb-20">
                                            <span>{item.subtitle}</span>
                                            <h5 className="tp-funfact-info-title tp-ff-sequel-semi-bold">
                                                {item.label}
                                            </h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoFunfact;