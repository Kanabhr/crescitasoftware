import ContactMeForm from "../form/ContactMeForm";
import Image from "next/image";
import Link from "next/link";

const ContactUsFormArea = () => {
    return (
        <div id="contact" className="tp-contact-area pt-160 pb-110">
            <div className="container">
                <div className="tp-contact-bg">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-contact-author-wrap d-flex align-items-center mb-30">
                                <div className="tp-contact-author-thumb mr-15">
                                    <Image width={60} height={60} src="/assets/img/contact/author.png" alt="Anant Tiwari" />
                                </div>
                                <div className="tp-contact-author-content">
                                    <h6>Anant Tiwari</h6>
                                    <span>Founder Sales-Head</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="tp-contact-info mb-30">
                                <div className="mb-20">
                                    <Link className="tp-contact-tel" href="tel:+919203784927">(+91) 9203784927</Link>
                                </div>
                                <div className="mb-30">
                                    <Link className="tp-contact-mail" href="mailto:info@crescitasoftware.com">info@crescitasoftware.com</Link>
                                </div>
                                <div className="tp-contact-address mb-30">
                                    <h4>Address</h4>
                                    <Link href="https://www.google.com/maps" className="common-underline" target="_blank">House No. 1803, Rajeev Nagar, Cherital, Jabalpur, Madhya Pradesh<br /> India - 482002</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form-wrap ml-95 mb-30">
                                <ContactMeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFormArea;