import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 Not Found - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <div className="tp-error-area pt-190">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-error-wrapper text-center">
                            <h4 className="tp-error-title">Oops!</h4>
                            <Image className="img-fluid" width={866} height={340} src="/assets/img/error/error.png" alt="error image" />
                            <div className="tp-error-content">
                                <h4 className="tp-error-title-sm">Something went Wrong...</h4>
                                <p>Sorry, we {`couldn't`} find your page.</p>
                                <Link className="tp-btn" href="/">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;