"use client";

import Image from "next/image";

const categoriesData = [
    {
        id: 1,
        title: "Woman",
        image: "/assets/img/cetagory/cetagory.jpg",
    },
    {
        id: 2,
        title: "Man",
        image: "/assets/img/cetagory/cetagory-2.jpg",
    },
    {
        id: 3,
        title: "Retro Sunglasses",
        image: "/assets/img/cetagory/cetagory-3.jpg",
    },
];

const ShopCategories = () => {
    return (
        <div className="shop-cetagory-area text-center pb-130">
            <div className="jump-anim">
                <h2 className="shop-product-bigtext tp-ff-inter fw-600 text-uppercase mb-140">Cunnet</h2>
            </div>
            <div className="container-fluid container-1886">
                <div className="row">
                    {categoriesData.map((category) => (
                        <div key={category.id} className="col-lg-4 col-md-6">
                            <div className="shop-cetagory-item mb-30 fix p-relative">
                                <Image width={599} height={601} className="img-fluid w-100" src={category.image} alt={category.title} />
                                <span className="shop-cetagory-badge fw-500">{category.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopCategories;
