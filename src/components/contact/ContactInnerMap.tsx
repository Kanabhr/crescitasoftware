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
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3667.708797548765!2d79.924633!3d23.180826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDEwJzUxLjAiTiA3OcKwNTUnMjguNyJF!5e0!3m2!1sen!2sin!4v1792181129264!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
></iframe>
            </div>
        </div>
    );
};

export default ContactInnerMap;
