"use client";

import ProductSingleItem from "./subComponents/ProductSingleItem";
import productsData from "@/data/product-data";

const ShopAgencyProduct = () => {
    //display product data
    const displayProductItem = productsData.slice(0, 8);

    return (
        <div className="shop-product-area pb-85">
            <div className="container-fluid container-1886">
                <div className="row">
                    {displayProductItem.map((product) => (
                        <ProductSingleItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopAgencyProduct;
