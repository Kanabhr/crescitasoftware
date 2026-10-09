import Image from "next/image";

const AboutMeBanner = () => {
    return (
        <div className="tp-banner-about-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-banner-about fix scale-up-img">
                            <Image width={1720} height={780} data-speed="0.4" className="img-fluid img-cover scale-up" src="/assets/img/banner/thumb-2.jpg" alt="thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMeBanner;