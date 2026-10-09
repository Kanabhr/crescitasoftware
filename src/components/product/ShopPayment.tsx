import { FlexibleEasyIcon, FreeShippingIcon, PaymentIcon } from "@/svg/ShopIcons";

type ShopPaymentItem = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: string;
};

const shopPaymentData: ShopPaymentItem[] = [
    {
        id: 1,
        title: "Fast & free shipping",
        description:
            "Every single order ships for free. No minimums, no tiers, no fine print whatsoever.",
        icon: <FreeShippingIcon />,
        delay: ".3",
    },
    {
        id: 2,
        title: "Secure payment",
        description:
            "Every single order ships for free. No minimums, no tiers, no fine print whatsoever.",
        icon: <PaymentIcon />,
        delay: ".5",
    },
    {
        id: 3,
        title: "Flexible & Easy Return",
        description:
            "Every single order ships for free. No minimums, no tiers, no fine print whatsoever.",
        icon: <FlexibleEasyIcon />,
        delay: ".7",
    },
];

const ShopPayment = () => {
    return (
        <div className="shop-payment-area shop-payment-border pb-60">
            <div className="container">
                <div className="row">
                    {shopPaymentData.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div
                                className="shop-payment-item text-center mb-30 tp_fade_anim"
                                data-delay={item.delay}
                            >
                                <span className="shop-payment-icon mb-20 d-inline-block">
                                    {item.icon}
                                </span>

                                <div className="shop-payment-content">
                                    <h4 className="shop-payment-title tp-ff-inter fw-600">
                                        {item.title}
                                    </h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPayment;
