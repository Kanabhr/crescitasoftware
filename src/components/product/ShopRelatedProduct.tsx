import ProductRelatedSingleItem from "./subComponents/ProductRelatedSingleItem";
import productsData from "@/data/product-data";
import Image from "next/image";

const ShopRelatedProduct = () => {
    //display product data
    const displayProductItem = productsData.slice(12, 18);

    return (
        <div className="shop-related-product-area shop-related-product-area pb-115">
            <div className="container-fluid container-1886">
                <div className="row gx-24">
                    <div className="col-xl-6 col-md-8">
                        <div className="shop-related-product-main-thumb shop-related-product-pin fix mb-25">
                            <Image width={913} height={935} className="img-fluid" src="/assets/img/product/related/product-main.jpg" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            {displayProductItem.map((product) => (
                                <div className="col-lg-6 col-md-6" key={product.id}>
                                    <ProductRelatedSingleItem product={product} spacingCls="mb-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopRelatedProduct;