import ForgotPassForm from "@/components/form/ForgotPassForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forgot - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <div className="tp-login-area pt-200 pb-140 pre-header p-relative z-index-1 fix">
                <div className="container containers">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-xl-5 col-lg-8">
                            <div className="tp-login-wrapper">
                                <div className="tp-login-top text-center mb-30">
                                    <h3 className="tp-login-title">Forgot Password?</h3>
                                    <p>Enter your email address to request password reset.</p>
                                </div>
                                {/* Forgot password form */}
                                <ForgotPassForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;