import { BillingAddressIcon, ShippingAddressIcon } from "@/svg/ProfileIcons";

const addresses = [
    {
        title: "Billing Address",
        icon: <BillingAddressIcon />,
        data: [
            { label: "Street", value: "4076 Glen Street" },
            { label: "City", value: "Summer Shade" },
            { label: "State/province/area", value: "Kentucky" },
            { label: "Phone number", value: "270-428-8478" },
            { label: "Zip code", value: "42166" },
            { label: "Country calling code", value: "+1" },
            { label: "Country", value: "United States" },
        ],
    },
    {
        title: "Shipping Address",
        icon: <ShippingAddressIcon />,
        data: [
            { label: "Street", value: "21986 Lewis Street" },
            { label: "City", value: "Naperville" },
            { label: "State/province/area", value: "Illinois" },
            { label: "Phone number", value: "680-887-9127" },
            { label: "Zip code", value: "60060" },
            { label: "Country calling code", value: "+1" },
            { label: "Country", value: "United States" },
        ],
    },
];

const ProfileAddress = () => {
    return (
        <div className="profile__address">
            <div className="row">
                {addresses.map((address, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="profile__address-item d-sm-flex align-items-start">
                            <div className="profile__address-icon">
                                <span>{address.icon}</span>
                            </div>

                            <div className="profile__address-content">
                                <h3 className="profile__address-title">{address.title}</h3>

                                {address.data.map((item, i) => (
                                    <p key={i}>
                                        <span>{item.label}:</span> {item.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileAddress;
