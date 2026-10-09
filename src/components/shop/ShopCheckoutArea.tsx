"use client";
import CheckoutPayment from "./subComponents/CheckoutPayment";
import BillingDetailsForm from "../form/BillingDetailsForm";
import CheckoutLoginForm from "../form/CheckoutLoginForm";
import OrderList from "./subComponents/OrderList";
import CouponForm from "../form/CouponForm";
import { useState } from "react";
import Link from "next/link";

const ShopCheckoutArea = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);

    return (
        <div className="tp-checkout-area pre-header pb-160 pt-60">
            <div className="container containers">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="tp-checkout-verify">
                            <div className="tp-checkout-verify-item">
                                <p className="tp-checkout-verify-reveal">Returning customer? <button onClick={() => setShowLogin((prev) => !prev)} type="button" className="tp-checkout-login-form-reveal-btn">Click here to login</button></p>
                                <div className="tp-return-customer" style={{
                                    display: showLogin ? "block" : "none",
                                }}>
                                    <CheckoutLoginForm />
                                </div>
                            </div>
                            <div className="tp-checkout-verify-item">
                                <p className="tp-checkout-verify-reveal">Have a coupon? <button onClick={() => setShowCoupon((prev) => !prev)} type="button" className="tp-checkout-coupon-form-reveal-btn">Click here to enter your code</button></p>
                                <div className="tp-return-customer" style={{
                                    display: showCoupon ? "block" : "none",
                                }}>
                                    <CouponForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-checkout-bill-area">
                            <h3 className="tp-checkout-bill-title">Billing Details</h3>
                            <div className="tp-checkout-bill-form">
                                <BillingDetailsForm />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="tp-checkout-place white-bg">
                            <h3 className="tp-checkout-place-title">Your Order</h3>
                            <OrderList />
                            <CheckoutPayment />
                            <div className="tp-checkout-agree">
                                <div className="tp-checkout-option">
                                    <input id="read_all" type="checkbox" />
                                    <label htmlFor="read_all">I have read and agree to the website.</label>
                                </div>
                            </div>
                            <div className="tp-checkout-btn-wrapper">
                                <Link href="#" className="tp-checkout-btn w-100">Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCheckoutArea;