"use client"
import { ShopAddIcon, ShopMinusIcon } from "@/svg/ShopIcons";
import { CroseIconThree } from "@/svg/CroseIcons";
import productsData from "@/data/product-data";
import SmartLink from "../common/SmartLink";
import { useState } from "react";
import Image from "next/image";

// Sample data
const CartAreaMain = () => {
    const [products, setProducts] = useState(productsData.slice(0, 4));

    const handleQuantityChange = (id: number, type: "inc" | "dec") => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? {
                        ...p,
                        quantity:
                            type === "inc" ? p.quantity + 1 : Math.max(p.quantity - 1, 1),
                    }
                    : p
            )
        );
    };

    const handleRemove = (id: number) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    const subtotal = products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    );

    return (
        <div className="tp-cart-area pre-header pb-120 pt-60">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="tp-cart-list mb-25 mr-30">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="tp-cart-header-product">
                                            Product
                                        </th>
                                        <th className="tp-cart-header-price">Price</th>
                                        <th className="tp-cart-header-quantity">Quantity</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="tp-cart-img">
                                                <SmartLink href={`/shop-details/${product.id}`}>
                                                    <Image width={78} height={100} src={product.image} alt={product.title} />
                                                </SmartLink>
                                            </td>
                                            <td className="tp-cart-title">
                                                <SmartLink href={`/shop-details/${product.id}`}>{product.title}</SmartLink>
                                            </td>
                                            <td className="tp-cart-price">
                                                <span>${product.price.toFixed(2)}</span>
                                            </td>
                                            <td className="tp-cart-quantity tp-product-details-quantity">
                                                <div className="tp-product-quantity mt-10 mb-10">
                                                    <span
                                                        className="tp-cart-minus"
                                                        onClick={() =>
                                                            handleQuantityChange(product.id, "dec")
                                                        }
                                                    >
                                                        <ShopMinusIcon />
                                                    </span>
                                                    <input
                                                        className="tp-cart-input"
                                                        type="text"
                                                        value={product.quantity}
                                                        readOnly
                                                    />
                                                    <span
                                                        className="tp-cart-plus"
                                                        onClick={() =>
                                                            handleQuantityChange(product.id, "inc")
                                                        }
                                                    >
                                                        <ShopAddIcon />
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="tp-cart-action">
                                                <button
                                                    className="tp-cart-action-btn"
                                                    onClick={() => handleRemove(product.id)}
                                                >
                                                    <CroseIconThree />{" "}
                                                    <span>Remove</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Coupon + Update Cart */}
                        <div className="tp-cart-bottom">
                            <div className="row align-items-end">
                                <div className="col-xl-6 col-md-8">
                                    <div className="tp-cart-coupon">
                                        <form action="#">
                                            <div className="tp-cart-coupon-input-box">
                                                <label>Coupon Code:</label>
                                                <div className="tp-cart-coupon-input d-flex align-items-center">
                                                    <input type="text" placeholder="Enter Coupon Code" />
                                                    <button type="submit">Apply</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-4">
                                    <div className="tp-cart-update text-md-end">
                                        <button type="button" className="tp-cart-update-btn">
                                            Update Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Sidebar */}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="tp-cart-checkout-wrapper">
                            <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                                <span className="tp-cart-checkout-top-title">Subtotal</span>
                                <span className="tp-cart-checkout-top-price">
                                    ${subtotal.toFixed(2)}
                                </span>
                            </div>
                            <div className="tp-cart-checkout-shipping">
                                <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
                                <div className="tp-cart-checkout-shipping-option-wrapper">
                                    <div className="tp-cart-checkout-shipping-option">
                                        <input id="flat_rate" type="radio" name="shipping" />
                                        <label htmlFor="flat_rate">
                                            Flat rate: <span>$20.00</span>
                                        </label>
                                    </div>
                                    <div className="tp-cart-checkout-shipping-option">
                                        <input id="local_pickup" type="radio" name="shipping" />
                                        <label htmlFor="local_pickup">
                                            Local pickup: <span>$25.00</span>
                                        </label>
                                    </div>
                                    <div className="tp-cart-checkout-shipping-option">
                                        <input id="free_shipping" type="radio" name="shipping" />
                                        <label htmlFor="free_shipping">Free shipping</label>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                                <span>Total</span>
                                <span>${(subtotal + 20).toFixed(2)}</span>
                            </div>
                            <div className="tp-cart-checkout-proceed">
                                <SmartLink
                                    href="/checkout"
                                    className="tp-cart-checkout-btn w-100"
                                >
                                    Proceed to Checkout
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartAreaMain;
