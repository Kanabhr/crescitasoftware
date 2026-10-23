import ShopDetailsRelatedProduct from "@/components/shop/ShopDetailsRelatedProduct";
import ShopDetailsAreaMain from "@/components/shop/ShopDetailsAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/shop-details");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/shop-details" />
            <ShopTopArea category2="Shop Details" title="Shop Details" />
            <ShopDetailsAreaMain id={1} />
            <ShopDetailsRelatedProduct />
        </main>
    );
};

export default page;