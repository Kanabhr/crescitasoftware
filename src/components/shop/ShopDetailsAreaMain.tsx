"use client";
import { AskQueestionIcon, CompareIcon, ShopAddIcon, ShopMinusIcon, WishlistIcon } from "@/svg/ShopIcons";
import ProductAdditionalInfo from "@/components/product/subComponents/ProductAdditionalInfo";
import ProductCustomerReviews from "@/components/product/subComponents/ProductCustomerReviews";
import ProductDescription from "@/components/product/subComponents/ProductDescription";
import ProductReviewForm from "@/components/form/ProductReviewForm";
import { renderStars } from "./subComponents/renderStars";
import { TwittorIcon } from "@/svg/SocialIcons";
import productsData from "@/data/product-data";
import { IdProps } from "@/types/custom-dt";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ShopDetailsAreaMain = ({ id }: IdProps) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState(1);

    // Find the product based on the ID
    const product = productsData.find((project) => project.id == id);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };
    // handle color change toggle
    const handleColorClick = (index: number) => {
        setSelectedColorIndex(index);
    };
    return (
        <div className="tp-product-details-area pt-130">
            <div className="tp-product-details-top pb-115">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="tp-product-details-thumb-wrapper tp-tab">
                                        <div className="tab-content m-img" id="productDetailsNavContent2">
                                            {product?.gallery?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                                                    id={`nav-${index + 1}`}
                                                    role="tabpanel"
                                                    aria-labelledby={`nav-${index + 1}-tab`}
                                                >
                                                    <Image
                                                        style={{width:"100%", height:"auto"}}
                                                        src={item}
                                                        alt={`Product image ${index + 1}`}
                                                        width={727}
                                                        height={659}
                                                        priority
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <nav>
                                            <div className="nav nav-tab gap-xxl-4 gap-1" id="productDetailsNavThumb2" role="tablist">
                                                {product?.gallery?.map((image, index) => (
                                                    <button
                                                        key={index}
                                                        className={`nav-links ${index === 0 ? "active" : ""}`}
                                                        id={`nav-${index + 1}-tab`}
                                                        data-bs-toggle="tab"
                                                        data-bs-target={`#nav-${index + 1}`}
                                                        type="button"
                                                        role="tab"
                                                        aria-controls={`nav-${index + 1}`}
                                                        aria-selected={index === 0 ? "true" : "false"}
                                                    >
                                                        <Image width={98} height={118} src={image} alt={`Thumbnail ${index + 1}`} />
                                                    </button>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="tp-product-details-wrapper">
                                        <div className="tp-product-details-category">
                                            <span>{product?.categories}</span>
                                        </div>
                                        <h3 className="tp-product-details-title">{product?.title}</h3>

                                        <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                                            <div className="tp-product-details-stock mb-10">
                                                <span>{product?.stock}</span>
                                            </div>
                                            <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                                                <div className="tp-product-details-rating">
                                                    <span>
                                                        {renderStars(product?.rating || 0)}
                                                    </span>
                                                </div>
                                                <div className="tp-product-details-reviews">
                                                    <span>(${product?.reviewsCount} Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-product-details-sort-desc">
                                            <p>{product?.description}</p>
                                        </div>

                                        <div className="tp-product-details-price-wrapper mb-20">
                                            <span className="tp-product-details-price old-price">${product?.oldPrice}</span>{" "}
                                            <span className="tp-product-details-price new-price">${product?.price}</span>
                                        </div>

                                        <div className="tp-product-details-variation">
                                            <div className="tp-product-details-variation-item">
                                                <h4 className="tp-product-details-variation-title">Color :</h4>
                                                <div className="tp-product-details-variation-list">
                                                    {product?.colors?.map((color, index) => (
                                                        <button
                                                            key={index}
                                                            type="button"
                                                            className={`color tp-color-variation-btn ${selectedColorIndex === index ? "active" : ""}`}
                                                            style={{ marginRight: "5px" }}
                                                            onClick={() => handleColorClick(index)}
                                                        >
                                                            <span style={{ backgroundColor: color.code }}></span>
                                                            <span className="tp-color-variation-tootltip">{color.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tp-product-details-action-wrapper">
                                            <h3 className="tp-product-details-action-title">Quantity</h3>
                                            <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                                                <div className="tp-product-details-quantity">
                                                    <div className="tp-product-quantity mb-15 mr-15">
                                                        <span className="tp-cart-minus" onClick={handleDecrease}>
                                                            <ShopMinusIcon />
                                                        </span>
                                                        <input
                                                            className="tp-cart-input"
                                                            type="text"
                                                            value={quantity}
                                                            readOnly />
                                                        <span className="tp-cart-plus" onClick={handleIncrease}>
                                                            <ShopAddIcon />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tp-product-details-add-to-cart mb-15 w-100">
                                                    <button className="tp-product-details-add-to-cart-btn w-100">Add To Cart</button>
                                                </div>
                                            </div>
                                            <button className="tp-product-details-buy-now-btn w-100">Buy Now</button>
                                        </div>
                                        <div className="tp-product-details-action-sm">
                                            <button type="button" className="tp-product-details-action-sm-btn">
                                                <CompareIcon />{" "}
                                                Compare
                                            </button>
                                            <button type="button" className="tp-product-details-action-sm-btn">
                                                <WishlistIcon />{" "}
                                                Add Wishlist
                                            </button>
                                            <button type="button" className="tp-product-details-action-sm-btn">
                                                <AskQueestionIcon />{" "}
                                                Ask a question
                                            </button>
                                        </div>
                                        <div className="tp-product-details-query">
                                            <div className="tp-product-details-query-item d-flex align-items-center">
                                                <span>SKU: </span>
                                                <p>{product?.sku}</p>
                                            </div>
                                            <div className="tp-product-details-query-item d-flex align-items-center">
                                                <span>Category: </span>
                                                <p>{product?.categories?.join(" & ")}</p>
                                            </div>
                                            <div className="tp-product-details-query-item d-flex align-items-center">
                                                <span>Tag: </span>
                                                <p>{product?.categories}</p>
                                            </div>
                                        </div>
                                        <div className="tp-product-details-social">
                                            <span>Share: </span>
                                            <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>{" "}
                                            <Link href="#"><TwittorIcon /></Link>{" "}
                                            <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>{" "}
                                            <Link href="#"><i className="fa-brands fa-vimeo-v"></i></Link>
                                        </div>
                                        <div className="tp-product-details-msg mb-15">
                                            <ul>
                                                <li>{product?.returnPolicy}</li>
                                                <li>{product?.deliveryInfo}</li>
                                            </ul>
                                        </div>
                                        <div className="tp-product-details-payment d-inline-flex align-items-center flex-wrap justify-content-between">
                                            <p>Guaranteed safe <br /> & secure checkout</p>
                                            <Image width={236} height={34} src="/assets/img/product/shop/payment-option.png" alt="payment method" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-product-details-bottom pb-140">
                <div className="container container-1230">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tp-product-details-tab-nav tp-tab">
                                        <nav>
                                            <div className="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
                                                <button className="nav-link" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>
                                                <button className="nav-link active" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="false">Additional information</button>
                                                <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews (2)</button>
                                                <span id="productTabMarker" className="tp-product-details-tab-line"></span>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="navPresentationTabContent">
                                            <div className="tab-pane fade" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabIndex={0}>
                                                <div className="tp-product-details-desc-wrapper pt-50">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-10">
                                                            <ProductDescription />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade show active" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab" tabIndex={0}>
                                                <div className="tp-product-details-additional-info ">
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-10">
                                                            <ProductAdditionalInfo />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabIndex={0}>
                                                <div className="tp-product-details-review-wrapper pt-60">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ProductCustomerReviews />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="tp-product-details-review-form">
                                                                <h3 className="tp-product-details-review-form-title">Review this product</h3>
                                                                <p>Your email address will not be published. Required fields are marked *</p>
                                                                <ProductReviewForm />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetailsAreaMain;