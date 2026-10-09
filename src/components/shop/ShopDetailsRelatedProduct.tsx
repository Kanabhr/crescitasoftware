import ProductRelatedSingleItem from "../product/subComponents/ProductRelatedSingleItem";
import productsData from "@/data/product-data";

const ShopDetailsRelatedProduct = () => {
    const displayProductItem = productsData.slice(0, 4);
    return (
        <div className="shop-product-area pb-85 pt-140">
            <div className="container-fluid container-1886">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mb-50">
                            <h2 className="tp-section-title reveal-text">Related Product</h2>
                        </div>
                    </div>
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

export default ShopDetailsRelatedProduct;