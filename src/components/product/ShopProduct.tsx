"use client";
import ProductRelatedSingleItem from "./subComponents/ProductRelatedSingleItem";
import productsData from "@/data/product-data";
import NiceSelect from "@/ui/NiceSelect";

const ShopProduct = () => {
    //display product data
    const displayProductItem = [
        ...productsData.slice(0, 8),
        ...productsData.slice(4, 8),
    ];

    return (
        <div className="tp-product-ptb pre-header pt-50 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="tp-shop-top-left mb-25 mt-10">
                            <p className="mb-0">Showing 1–14 of 26 results</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="tp-product-top-select d-flex justify-content-sm-end mb-30">
                            <NiceSelect
                                className="tp-select tp-input shop-product-select"
                                defaultCurrent={0}
                                options={[
                                    { value: "Default Sorting", text: "Default Sorting" },
                                    { value: "Low to Hight", text: "Low To Hight" },
                                    { value: "High to Low", text: "High To Low" },
                                    { value: "New Added", text: "New Added" },
                                    { value: "On Sale", text: "On Sale" }
                                ]}
                                onChange={() => { }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displayProductItem.map((product, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={`${product.id}-${index}`}>
                            <ProductRelatedSingleItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopProduct;