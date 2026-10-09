import Image from "next/image";

const PortfolioGalleryDetailsBanner = () => {
    return (
        <div className="tp-pd-2-area pb-135">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-pd-2-banner scale-up-img">
                            <Image width={1905} height={950} data-speed=".8" className="img-cover scale-up" src="/assets/img/portfolio/details/gallery/bg.jpg" alt="gallery bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGalleryDetailsBanner;