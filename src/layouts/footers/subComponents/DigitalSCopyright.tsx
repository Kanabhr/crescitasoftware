import { getCurrentYear } from "@/utils/getCurrentYear";
import Link from "next/link";

const DigitalSCopyright = () => {
    return (
        <div className="tp-footer-copyright-area">
            <div className="tp-about-border pt-25 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-footer-copyright-wrap mb-20">
                                <span className="tp-footer-copyright ca-footer-copyright">©<span className="update-year">{getCurrentYear()}</span> Cunnet Design Studio.</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-footer-copyright-wrap text-lg-end mb-20">
                                <span className="tp-footer-copyright ca-footer-copyright"><Link href="#">Terms and Conditions</Link></span>
                                <span className="tp-footer-copyright ca-footer-copyright ml-140"><Link href="#">Privacy Policy</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalSCopyright;