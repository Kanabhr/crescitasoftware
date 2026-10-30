import LoginForm from "@/components/form/LoginForm";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/login");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/login" />
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