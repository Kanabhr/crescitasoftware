"use client";

import { useState } from "react";

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

const initialOrders: OrderItem[] = [
    { name: "Xiaomi Redmi Note 9 Global V.", quantity: 2, price: 274 },
    { name: "Office Chair Multifun", quantity: 1, price: 74 },
    { name: "Apple Watch Series 6 Stainless", quantity: 3, price: 362 },
    { name: "Body Works Mens Collection", quantity: 1, price: 145 },
];

const shippingOptions = [
    { id: "flat_rate", label: "Flat rate", price: 20 },
    { id: "local_pickup", label: "Local pickup", price: 25 },
    { id: "free_shipping", label: "Free shipping", price: 0 },
];

const OrderList = () => {
    const [shipping, setShipping] = useState(shippingOptions[0].price);

    const subtotal = initialOrders.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const total = subtotal + shipping;

    return (
        <div className="tp-order-info-list">
            <ul>
                {/* Header */}
                <li className="tp-order-info-list-header">
                    <h4>Product</h4>
                    <h4>Total</h4>
                </li>

                {/* Products */}
                {initialOrders.map((item, index) => (
                    <li key={index} className="tp-order-info-list-desc">
                        <p>
                            {item.name} <span> x {item.quantity}</span>
                        </p>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}

                {/* Subtotal */}
                <li className="tp-order-info-list-subtotal">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </li>

                {/* Shipping */}
                <li className="tp-order-info-list-shipping">
                    <span>Shipping</span>
                    <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                        {shippingOptions.map((option) => (
                            <span key={option.id}>
                                <input
                                    id={option.id}
                                    type="radio"
                                    name="shipping"
                                    checked={shipping === option.price}
                                    onChange={() => setShipping(option.price)}
                                />
                                <label htmlFor={option.id}>
                                    {option.label}
                                    {option.price > 0 && <span>: ${option.price.toFixed(2)}</span>}
                                </label>
                            </span>
                        ))}
                    </div>
                </li>

                {/* Total */}
                <li className="tp-order-info-list-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </li>
            </ul>
        </div>
    );
};

export default OrderList;
