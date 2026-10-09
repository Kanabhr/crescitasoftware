
import ContactMeForm from "../form/ContactMeForm";
import Link from "next/link";

const ContactMeArea = () => {
    return (
        <div className="tp-contact-me-area tp-pd-2-ptb pt-175 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="tp-contact-me-title-wrap mb-30">
                            <h3
                                className="tp-section-title tp-ff-sequel-semi-bold fs-72 tp_fade_anim mb-20"
                                data-delay=".3"
                            >
                                Contact Me for Your <br /> Next Project.
                            </h3>
                            <div className="tp-pd-2-categories tp_fade_anim" data-delay=".5">
                                <span>
                                    <Link href="/">Website</Link>
                                </span>{" "}
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="tp-contact-me-form mb-30">
                            <ContactMeForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMeArea;
