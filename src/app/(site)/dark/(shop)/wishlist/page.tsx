import WishlistAreaMain from "@/components/shop/WishlistAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/wishlist");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/wishlist" />
            <ShopTopArea category2="Wishlist" title="Wishlist" spacingCls="pb-80" />
            <WishlistAreaMain />
        </main>
    );
};

export default page;