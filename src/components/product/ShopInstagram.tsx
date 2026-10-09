"use client";

import Image from "next/image";
import Link from "next/link";

type ShopInstagramItem = {
    id: number;
    image: string;
    link?: string;
};

const shopInstagramData: ShopInstagramItem[] = [
    { id: 1, image: "/assets/img/instagram/thumb.jpg" },
    { id: 2, image: "/assets/img/instagram/thumb-2.jpg" },
    { id: 3, image: "/assets/img/instagram/thumb-3.jpg" },
    { id: 4, image: "/assets/img/instagram/thumb-4.jpg" },
    { id: 5, image: "/assets/img/instagram/thumb-5.jpg" },
    { id: 6, image: "/assets/img/instagram/thumb-6.jpg" },
];

const ShopInstagram = () => {
    return (
        <div className="shop-ins-area">
            <div className="container-fluid p-0">
                <div className="row gx-0 row-cols-xl-6 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-2">
                    {shopInstagramData.map((item) => (
                        <div key={item.id} className="col">
                            <div className="shop-ins-thumb">
                                <Link href={item.link ?? "#"}>
                                    <Image width={317} height={317}
                                        className="img-fluid w-100"
                                        src={item.image}
                                        alt={`Instagram ${item.id}`}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopInstagram;
