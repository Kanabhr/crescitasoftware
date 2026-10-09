import { galleryColumns } from "@/data/gallery-columns-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const ServiceGallery = () => {
    return (
        <div className="mg-gallery-area fix">
            <div className="container-fluid container-1886">
                <div className="inner-service-gallery tp-gallery-wrapper">
                    <div className="inner-service-gallery-item about-us-history-title-wrap text-center mb-30">
                        <h2 className="about-us-history-title tp-ff-sequel-bold-head text-uppercase mb-50">Explore<br /> The Portfolio</h2>
                        <SmartLink className="tp-btn tp-btn-white tp-ff-inter text-uppercase" href="/portfolio-details">
                            <span>
                                <span className="text-1">Discover Now</span>
                                <span className="text-2">Discover Now</span>
                            </span>
                            <i>
                                <ButtonArrowIcon />
                                <ButtonArrowIcon />
                            </i>
                        </SmartLink>
                    </div>
                    <div className="row gx-30">
                        {galleryColumns.map((column, colIndex) => (
                            <div key={colIndex} className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="tp-gallery-item-wrapper" data-speed={column.speed}>
                                    {column.images.map((img, index) => (
                                        <div key={index} className="tp-gallery-item mb-30">
                                            <Link href="#">
                                                <Image width={599} height={617} className="img-fluid w-100" src={img} alt="gallery-image" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceGallery;