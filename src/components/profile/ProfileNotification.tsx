"use client";
import { useState } from "react";

const ProfileNotification = () => {
    const [notifications, setNotifications] = useState({
        like: true,
        post: true,
        new: true,
        sale: true,
        payment: true,
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="profile__notification">
            <div className="profile__notification-top mb-30">
                <h3 className="profile__notification-title">
                    My activity settings
                </h3>
                <p>
                    Stay up to date with notification on activity that involves
                    you including mentions, messages, replies to your bids, new
                    items, sale and administrative updates
                </p>
            </div>

            <div className="profile__notification-wrapper">

                <NotificationItem
                    id="like"
                    label="Like & Follows Notifications"
                    checked={notifications.like}
                    onChange={() => handleToggle("like")}
                />

                <NotificationItem
                    id="post"
                    label="Post, Comments & Replies Notifications"
                    checked={notifications.post}
                    onChange={() => handleToggle("post")}
                />

                <NotificationItem
                    id="new"
                    label="New Product Notifications"
                    checked={notifications.new}
                    onChange={() => handleToggle("new")}
                />

                <NotificationItem
                    id="sale"
                    label="Product on sale Notifications"
                    checked={notifications.sale}
                    onChange={() => handleToggle("sale")}
                />

                <NotificationItem
                    id="payment"
                    label="Payment Notifications"
                    checked={notifications.payment}
                    onChange={() => handleToggle("payment")}
                />

            </div>
        </div>
    );
};

const NotificationItem = ({
    id,
    label,
    checked,
    onChange,
}: {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}) => (
    <div className="profile__notification-item mb-20">
        <div className="form-check form-switch d-flex align-items-center">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    </div>
);

export default ProfileNotification;
