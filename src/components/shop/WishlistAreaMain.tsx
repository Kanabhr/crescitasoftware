"use client";
import { ShopAddIcon, ShopMinusIcon } from "@/svg/ShopIcons";
import { CroseIconThree } from "@/svg/CroseIcons";
import productsData from "@/data/product-data";
import SmartLink from "../common/SmartLink";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WishlistAreaMain = () => {
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
    return (
        <div className="tp-cart-area pre-header pb-160 pt-60">
            <div className="container containers">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-8">
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
                        <div className="tp-cart-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-md-4">
                                    <div className="profile__btn">
                                        <Link href="/cart" className="tp-btn-cart sm">Go To Cart</Link>
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

export default WishlistAreaMain;