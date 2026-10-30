import CartAreaMain from "@/components/shop/CartAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/cart");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/cart" />
            <ShopTopArea category2="Shopping Cart" title="Shopping Cart" />
            <CartAreaMain />
        </main>
    );
};

export default page;