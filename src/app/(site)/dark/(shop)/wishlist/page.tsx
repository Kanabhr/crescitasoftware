import WishlistAreaMain from "@/components/shop/WishlistAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wishlist - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopTopArea category2="Wishlist" title="Wishlist" spacingCls="pb-80" />
            <WishlistAreaMain />
        </main>
    );
};

export default page;