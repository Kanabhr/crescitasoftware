import Image from "next/image";
import Link from "next/link";

const contactInfo = [
    {
        title: "San Francisco",
        image: "/assets/img/contact/contact-us-thumb-1.jpg",
        speed: "1.2",
        offset: false,
    },
    {
        title: "Germany",
        image: "/assets/img/contact/contact-us-thumb-2.jpg",
        speed: ".9",
        offset: true,
    },
    {
        title: "New Zealand",
        image: "/assets/img/contact/contact-us-thumb-3.jpg",
        speed: "1.2",
        offset: false,
    },
    {
        title: "France",
        image: "/assets/img/contact/contact-us-thumb-4.jpg",
        speed: ".9",
        offset: true,
    },
];

const ContactUsInfoArea = () => {
    return (
        <div className="tp-contact-us-info-area pb-120">
            <div className="container container-1230">
                <div className="row">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-6 col-md-6 mb-30"
                        >
                            <div
                                className={`tp-contact-us-content text-center ${item.offset ? "mt-60" : ""
                                    }`}
                                data-speed={item.speed}
                            >
                                <div className="tp-contact-us-thumb d-flex justify-content-center">
                                    <Image width={378} height={240} src={item.image} alt={item.title} />
                                </div>

                                <div className="tp-contact-us-bottom">
                                    <div className="tp-contact-us-info-details">
                                        <h4 className="tp-contact-us-info-title">
                                            {item.title}
                                        </h4>
                                        <Link href="mailto:sydney@contact.com">
                                            sydney@contact.com
                                        </Link>
                                        <Link href="tel:(+91)76001726">
                                            (+91) 76001726
                                        </Link>
                                    </div>

                                    <div className="tp-contact-us-btn">
                                        <Link
                                            href="https://www.google.com/maps"
                                            target="_blank"
                                            className="tp-btn tp-btn-border d-inline-flex align-items-center w-100"
                                        >
                                            <span>
                                                <span className="text-1">View Location</span>
                                                <span className="text-2">View Location</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsInfoArea;
