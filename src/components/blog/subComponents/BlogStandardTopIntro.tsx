interface PageTopIntroProps {
    title: string;
    className?: string;
    animationDelay?: string;
    uppercase?: boolean;
}

const PageTopIntro = ({
    title,
    className = "",
    animationDelay = ".5",
    uppercase = true,
}: PageTopIntroProps) => {
    return (
        <div className={`blog-standard-area tp-pd-2-ptb pt-175 pb-30 ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jump-anim text-center">
                            <h3
                                className={`tp-pd-3-title fs-186 tp-ff-sequel-bold-head lh-1 tp_fade_anim ${uppercase ? "text-uppercase" : ""
                                    }`}
                                data-delay={animationDelay}
                            >
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTopIntro;
