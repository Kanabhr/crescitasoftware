import Link from "next/link";

const introData = {
    categories: [
        { label: "Website", href: "/" },
        { label: "Envato Market" },
    ],
    title: "Olivia Rivers",
    details: [
        { label: "Role", value: "Envato Market" },
        { label: "Service", value: "UX, UI Design, Development" },
        { label: "Duration", value: "8 March 2025" },
        { label: "Designer", value: "ThemePure" },
    ],
};

const PortfolioGalleryDetailsIntro = () => {
    return (
        <div className="tp-pd-2-ptb pt-175 pb-40">
            <div className="container">
                <div className="row">
                    {/* top area */}
                    <div className="col-12">
                        <div className="tp-pd-2-top pb-50 text-center">
                            <div
                                className="tp-pd-2-categories mb-10 tp_fade_anim"
                                data-delay=".3"
                            >
                                {introData.categories.map((item, index) => (
                                    <span key={index}>
                                        {item.href ? (
                                            <Link href={item.href}>{item.label}</Link>
                                        ) : (
                                            item.label
                                        )}
                                    </span>
                                ))}
                            </div>

                            <h3
                                className="tp-pd-2-title tp-ff-sequel-bold-head tp_fade_anim"
                                data-delay=".5"
                            >
                                {introData.title}
                            </h3>
                        </div>
                    </div>

                    {/* bottom info */}
                    {introData.details.map((item, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className="tp-pd-2-bottom-item text-center mb-20">
                                <span>{item.label}</span>
                                <h6>{item.value}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioGalleryDetailsIntro;
