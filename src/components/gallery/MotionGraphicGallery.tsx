import { galleryColumns } from "@/data/gallery-columns-data";
import Image from "next/image";
import Link from "next/link";

const MotionGraphicGallery = () => {
    return (
        <div className="mg-gallery-area fix">
            <div className="container-fluid container-1886">
                <div className="tp-gallery-wrapper">
                    <div className="row gx-30">
                        {galleryColumns.map((column, colIndex) => (
                            <div key={colIndex} className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="tp-gallery-item-wrapper" data-speed={column.speed}>
                                    {column.images.map((img, index) => (
                                        <div key={index} className="tp-gallery-item mb-30">
                                            <Link href="#">
                                                <Image style={{ width: "100%", height: "auto" }} width={599} height={617} className="w-100" src={img} alt="gallery-image" />
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

export default MotionGraphicGallery;
