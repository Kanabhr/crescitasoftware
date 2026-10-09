import LoginForm from "@/components/form/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <div className="tp-login-area pre-header pt-200 pb-140 p-relative z-index-1 fix">
                <div className="container container-1230 containers">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-8">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;