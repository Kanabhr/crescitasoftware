const stepData = {
    title: (
        <>
            Out of love for stylish & functional <br />
            WP themes and for taking pride to <br />
            support you.
        </>
    ),
    steps: [
        {
            title: "01. Development",
            desc: (
                <>
                    A wonderful serenity has taken possession <br />
                    of my entire soul, like these sweet mornings <br />
                    which I enjoy with my whole heart.
                </>
            ),
        },
        {
            title: "02. Concept Design",
            desc: (
                <>
                    A wonderful serenity has taken possession <br />
                    of my entire soul, like these sweet mornings <br />
                    which I enjoy with my whole heart.
                </>
            ),
        },
        {
            title: "03. Implementation",
            desc: (
                <>
                    A wonderful serenity has taken possession <br />
                    of my entire soul, like these sweet mornings <br />
                    which I enjoy with my whole heart.
                </>
            ),
        },
        {
            title: "04. Design Pride",
            desc: (
                <>
                    A wonderful serenity has taken possession <br />
                    of my entire soul, like these sweet mornings <br />
                    which I enjoy with my whole heart.
                </>
            ),
        },
    ],
};

const PortfolioDetailsStep = ({ animateCls=""}) => {
    return (
        <div className="tp-pd-2-step-ptb pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="tp-pd-2-step-heading pb-60 tp_fade_anim"
                            data-delay=".3"
                        >
                            <h3 className={`tp-pd-2-step-title ${animateCls}`}>
                                {stepData.title}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {stepData.steps.map((step, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="tp-pd-2-step-item mb-30">
                                <h4 className="tp-pd-2-step-item-title">
                                    {step.title}
                                </h4>
                                <span>{step.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsStep;
