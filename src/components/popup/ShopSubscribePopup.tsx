"use client";

import Image from "next/image";

type SubscribePopupData = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    logo: string;
};

const popupData: SubscribePopupData = {
    title: "Save 15%",
    subtitle: "ON TODAYS ORDER",
    description: "SIGN UP BELOW FOR DISCOUNT CODE",
    image: "/assets/img/product/newsletter/window-popup.jpg",
    logo: "/assets/img/logo/logo.png",
};

type SubscribePopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SubscribePopup = ({ isOpen, onClose }: SubscribePopupProps) => {
    if (!isOpen) return null;

    return (
        <div className={`subscribe-popup ${isOpen ? "show" : ""}`}>
            <div className="tp-shop-popup-wrap">
                {/* LEFT IMAGE */}
                <div className="tp-shop-popup-img d-none d-md-block">
                    <Image src={popupData.image} alt="Subscribe" width={400} height={500} />
                </div>

                {/* CONTENT */}
                <div className="tp-shop-popup-content text-center">
                    <div className="close" onClick={onClose}>
                        <i className="fa-light fa-xmark" />
                    </div>

                    <div className="tp-shop-popup-logo">
                        <Image src={popupData.logo} alt="Logo" width={140} height={29} />
                    </div>

                    <div className="tp-shop-popup-text">
                        <h4>{popupData.title}</h4>
                        <p>{popupData.subtitle}</p>
                        <span>{popupData.description}</span>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="tp-shop-popup-inputbox">
                            <input type="email" placeholder="Email Address" required />
                            <button className="tp-btn-black-square w-100" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribePopup;
