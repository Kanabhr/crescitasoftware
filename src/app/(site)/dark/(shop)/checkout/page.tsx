import ShopCheckoutArea from "@/components/shop/ShopCheckoutArea";
import ShopTopArea from "@/components/shop/ShopTopArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/checkout");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/checkout" />
            <ShopTopArea category2="Checkout" title="Checkout" />
            <ShopCheckoutArea />
        </main>
    );
};

export default page;