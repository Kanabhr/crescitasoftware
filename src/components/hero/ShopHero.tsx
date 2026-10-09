import { ShopHeroItemDT } from "@/types/custom-dt";
import SmartLink from "../common/SmartLink";
import Image from "next/image";

const shopHeroData: ShopHeroItemDT[] = [
    {
        id: 1,
        image: "/assets/img/hero/shop/thumb.jpg",
        title: "Premium streetwear",
        description: "Discover beauty in imperfection",
        href: "/shop-details",
        col: "col-lg-6",
    },
    {
        id: 2,
        image: "/assets/img/hero/shop/thumb-2.jpg",
        title: "Premium outerwear",
        description: "Discover beauty in imperfection",
        href: "/shop-details",
        col: "col-lg-6",
    },
    {
        id: 3,
        image: "/assets/img/hero/shop/thumb-3.jpg",
        title: (
            <>
                Flash sale up to <br /> 50% off on accessories
            </>
        ),
        description: "Discover beauty in imperfection",
        href: "/shop-details",
        col: "col-lg-12",
        extraClass: "shop-hero-item-3",
    },
];

const ShopHero = () => {
    return (
        <div className="shop-hero-area shop-hero-spacing">
            <div className="container-fluid container-1886">
                <div className="row gx-20">
                    {shopHeroData.map(
                        ({ id, image, title, description, href, col, extraClass }) => (
                            <div key={id} className={col}>
                                <div className={`shop-hero-item mb-20 p-relative ${extraClass ?? ""}`}>
                                    <div className="shop-hero-thumb fix">
                                        <Image width={1856} height={750} className="img-fluid w-100" src={image} alt="shop hero" />
                                    </div>
                                    <div className="shop-hero-content">
                                        <h2 className="shop-hero-title tp-title-anim fix d-inline-block tp-ff-jost fw-600 mb-5">
                                            <SmartLink href={href} className="tp-title-text">
                                                {title}
                                            </SmartLink>
                                        </h2>

                                        <p className="shop-hero-dec mb-35">{description}</p>

                                        <SmartLink href={href} className="tp-btn shop-btn">
                                            <span>
                                                <span className="text-1">Shop Now!</span>
                                                <span className="text-2">Shop Now!</span>
                                            </span>
                                        </SmartLink>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopHero;
