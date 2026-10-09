import Image from "next/image";

const CareerBannerArea = () => {
    return (
        <div className="ar-banner-area pt-85">
            <div className="ar-banner-wrap ar-about-us-4">
                <Image style={{width:"100%", height:"auto"}} width={1905} height={1272} className="w-100" src="/assets/img/banner/thumb-8.jpg" alt="banner thumb" data-speed=".8" />
            </div>
        </div>
    );
};

export default CareerBannerArea;