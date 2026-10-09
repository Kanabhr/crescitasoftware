import Image from "next/image";

const thumbImages = [
    {
        src: "/assets/img/portfolio/details/main/thumb-2.jpg",
        col: "col-lg-3 col-md-6",
    },
    {
        src: "/assets/img/portfolio/details/main/thumb-3.jpg",
        col: "col-lg-6 col-md-6",
    },
    {
        src: "/assets/img/portfolio/details/main/thumb-4.jpg",
        col: "col-lg-3 col-md-6",
    },
];

const PortfolioDetailsThumb = () => {
    return (
        <div className="tp-pd-2-area pb-110">
            <div className="container-fluid p-0">
                <div className="row gx-20">
                    {/* banner */}
                    <div className="col-lg-12">
                        <div className="tp-pd-2-banner mb-20 scale-up-img">
                            <Image
                                style={{ width: "100%", height: "auto" }}
                                width={1905}
                                height={950}
                                src="/assets/img/portfolio/details/main/thumb.jpg"
                                alt="Portfolio banner"
                                data-speed=".8"
                                className="img-cover scale-up"
                            />
                        </div>
                    </div>

                    {/* thumbs */}
                    {thumbImages.map((item, index) => (
                        <div className={item.col} key={index}>
                            <div className="tp-pd-2-thumb-item scale-up-img mb-20">
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    width={943}
                                    height={600}
                                    src={item.src}
                                    alt={`Portfolio thumb ${index + 1}`}
                                    data-speed=".8"
                                    className="img-cover scale-up"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThumb;
