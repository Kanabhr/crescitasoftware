import Image from "next/image";

const ContactInnerMap = () => {
    return (
        <div className="tp-contact-map-ptb p-relative">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image width={24} height={24} src="/assets/img/contact/map-icon.svg" alt="map-icon" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002818075!2d-74.1443121872927!3d40.69728463485858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1745055504744!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactInnerMap;