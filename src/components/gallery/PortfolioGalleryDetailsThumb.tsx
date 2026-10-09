import { PortfolioDetailsNextIcon, PortfolioDetailsPrevIcon } from "@/svg/ArrowIcons";
import Image from "next/image";
import Link from "next/link";

const thumbImages = [
    {
        src: "/assets/img/portfolio/details/gallery/bg-2.jpg",
        col: "col-lg-12",
        extraClass: "tp-pd-2-thumb-item-2",
    },
    {
        src: "/assets/img/portfolio/details/gallery/bg-3.jpg",
        col: "col-lg-6",
    },
    {
        src: "/assets/img/portfolio/details/gallery/bg-4.jpg",
        col: "col-lg-6",
    },
];

const PortfolioGalleryDetailsThumb = () => {
    return (
        <>
            <div className="tp-pd-2-thumb-ptb pb-20">
                <div className="container">
                    <div className="row gx-60">
                        {thumbImages.map((item, index) => (
                            <div className={item.col} key={index}>
                                <div
                                    className={`tp-pd-2-thumb-item scale-up-img mb-60 ${item.extraClass || ""
                                        }`}
                                >
                                    <Image
                                        width={1720}
                                        height={843}
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
            <div className="tp-pd-2-np-ptb pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-pd-2-np-content d-flex justify-content-center align-items-center flex-wrap">
                                <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                                    <Link href="#">
                                        <span>
                                            <PortfolioDetailsPrevIcon />
                                        </span>
                                        Prev Work
                                    </Link>
                                </div>
                                <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <Link href="#">
                                        Next Work
                                        <span>
                                            <PortfolioDetailsNextIcon />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioGalleryDetailsThumb;
