"use client";

import Image from "next/image";

type PageBannerProps = {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
};

const PageBanner = ({
    src = "/assets/img/banner/thumb-3.jpg",
    alt = "banner image",
    width = 1905,
    height = 820,
}: PageBannerProps) => {
    return (
        <div className="tp-banner-thumb fix w-100 scale-up-img">
            <Image
                width={width}
                height={height}
                data-speed="0.4"
                className="img-cover scale-up"
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default PageBanner;