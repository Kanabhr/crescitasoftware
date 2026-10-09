import RegisterForm from "@/components/form/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Register - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <div className="tp-login-area pre-header pt-200 pb-140 p-relative z-index-1 fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-8">
                            <div className="tp-login-wrapper">
                                <div className="tp-login-top text-center mb-30">
                                    <h3 className="tp-login-title">Sign up Cunnet.</h3>
                                    <p>Don&apos;t have an account? <span><Link href="/login">Sign In</Link></span></p>
                                </div>
                                {/* Register form */}
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;