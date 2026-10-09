import SmartLink from "@/components/common/SmartLink";
import { ProductDt } from "@/types/product-dt";
import Image from "next/image";

interface productPropsDt {
    product: ProductDt;
    spacingCls?: string;
}

const ProductRelatedSingleItem: React.FC<productPropsDt> = ({ product, spacingCls = "mb-40" }) => {
    return (
        <div className={`shop-product-item ${spacingCls}`}>
            <div className="shop-product-thumb p-relative mb-30">
                <SmartLink href={`/shop-details/${product.id}`}>
                    <Image width={442} height={462} className="img-fluid w-100" src={product.image} alt="product" />
                </SmartLink>

                {product.badge &&
                    <div className="shop-product-badge">
                        <span className="product-new">NEW</span>
                    </div>
                }
                <div className="shop-product-btn">
                    <button className="tp-btn tp-action-btn" type="button">
                        <span>
                            <span className="text-1">+ Add to Cart</span>
                            <span className="text-2">+ Add to Cart</span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="shop-product-content-wrap d-flex justify-content-between gap-3">
                <div className="shop-product-content">
                    <h5 className="shop-product-title tp-title-anim d-inline-block fix tp-ff-inter fw-500 mb-0 lh-1">
                        <SmartLink href={`/shop-details/${product.id}`} className="tp-title-text">{product.title}</SmartLink>
                    </h5>
                    <span className="shop-product-cetagory d-block">{product.category}</span>
                </div>
                <div className="shop-product-price d-flex align-items-center">
                    <del className="d-none">
                        <span className="shop-product-old-price">${product.price}</span>
                    </del>
                    <ins>
                        <span className="shop-product-new-price ml-5">${product.price}</span>
                    </ins>
                </div>
            </div>
        </div>
    );
};

export default ProductRelatedSingleItem;