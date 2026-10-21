import Image from "next/image";
import Link from "next/link";

const contactInfo = [
    {
        title: "Jabalpur",
        image: "/assets/img/contact/contact-us-thumb-1.jpg",
        speed: "1.2",
        offset: false,
        mapUrl: "https://maps.app.goo.gl/t3Kwz8Rpc6brCyZMA?g_st=aw",   // replace
    },
    {
        title: "Jabalpur (HQ)",
        image: "/assets/img/contact/contact-us-thumb-2.jpg",
        speed: ".9",
        offset: true,
        mapUrl: "https://maps.app.goo.gl/xXcULMjdCcWLuMaw9?g_st=ac",  // HQ pin from your embed
    },
];

const ContactUsInfoArea = () => {
    return (
        <div className="tp-contact-us-info-area pb-120">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-lg-6 col-md-6 mb-30"
                        >
                            <div
                                className={`tp-contact-us-content text-center ${item.offset ? "mt-60" : ""}`}
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
                                        <Link href="mailto:info@crescitasoftware.com">
                                            info@crescitasoftware.com
                                        </Link>
                                        <Link href="tel:+919203784927">
                                            (+91) 9203784927
                                        </Link>
                                    </div>

                                    <div className="tp-contact-us-btn">
                                        <Link
                                            href={item.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
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