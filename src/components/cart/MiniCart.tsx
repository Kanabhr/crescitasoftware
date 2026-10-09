"use client";

import productsData from "@/data/product-data";
import MiniCartItem from "./subComponent.tsx/MiniCartItem";
import useGlobalContext from "@/hooks/useContext";
import Link from "next/link";

const MiniCart = () => {
    const { openMiniCart, toggleMiniCart } = useGlobalContext()
    const displayCartItem = productsData.slice(18, 21);

    const subtotal = displayCartItem.slice(18,21).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <div className={`cartmini__area ${openMiniCart ? "cartmini-opened" : ""}`}>
                <div className="cartmini__wrapper d-flex justify-content-between flex-column">
                    {/* TOP */}
                    <div className="cartmini__top-wrapper">
                        <div className="cartmini__top p-relative">
                            <div className="cartmini__top-title">
                                <h4>Shopping cart</h4>
                            </div>
                            <div className="cartmini__close">
                                <button onClick={toggleMiniCart}
                                    type="button"
                                    className="cartmini__close-btn cartmini-close-btn"
                                >
                                    <i className="fal fa-times" />
                                </button>
                            </div>
                        </div>

                        {/* SHIPPING INFO */}
                        <div className="cartmini__shipping">
                            <p>
                                Free Shipping for all orders over <span>$50</span>
                            </p>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow={70}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </div>

                        {/* CART ITEMS */}
                        <div className="cartmini__widget">
                            {displayCartItem.map((item) => (
                                <MiniCartItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* CHECKOUT */}
                    <div className="cartmini__checkout">
                        <div className="cartmini__checkout-title mb-30">
                            <h4>Subtotal:</h4>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="cartmini__checkout-btn">
                            <Link
                                href="/cart"
                                className="tp-btn shop-btn text-center mb-10 w-100"
                            >
                                <span>
                                    <span className="text-1">View Cart</span>
                                    <span className="text-2">View Cart</span>
                                </span>
                            </Link>

                            <Link href="/checkout" className="tp-btn text-center w-100">
                                <span>
                                    <span className="text-1">Checkout</span>
                                    <span className="text-2">Checkout</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* overlay */}
            <div
                onClick={toggleMiniCart}
                className={`body-overlay ${openMiniCart ? "apply" : ""}`}
            />
        </>
    );
};

export default MiniCart;
