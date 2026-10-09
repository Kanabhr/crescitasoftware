import Link from "next/link";

const ContactUsTopIntro = () => {
    return (
        <>
            <div className="tp-pd-2-ptb pt-175 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-pd-2-top pb-50 text-center">
                                <div className="tp-pd-2-categories mb-10 tp_fade_anim" data-delay=".3">
                                    <span><Link href="/">Website</Link></span>
                                    <span>Contact</span>
                                </div>
                                <h3 className="tp-section-title fs-92 tp-ff-sequel-semi-bold tp_fade_anim" data-delay=".5">Get In Tuch</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-service-banner-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10">
                                <Link className="tp-ff-sequel-semi-bold text-uppercase tp-smooth" href="#contact">
                                    scroll to explore
                                    <span>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.75 0.75L7.75 7.75L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="inner-service-banner-scroll smooth mb-10 text-sm-end">
                                <span className="tp-ff-sequel-semi-bold text-uppercase">10 years of experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsTopIntro;