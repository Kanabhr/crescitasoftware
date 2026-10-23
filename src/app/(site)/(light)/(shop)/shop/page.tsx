import ShopProduct from "@/components/product/ShopProduct";
import ShopTopArea from "@/components/shop/ShopTopArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/shop");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/shop" />
            <ShopTopArea category2="Shop" title="Our products" />
            <ShopProduct />
        </main>
    );
};

export default page;