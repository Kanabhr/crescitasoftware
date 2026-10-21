import ShopDetailsRelatedProduct from "@/components/shop/ShopDetailsRelatedProduct";
import ShopDetailsAreaMain from "@/components/shop/ShopDetailsAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop Details - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopTopArea category2="Shop Details" title="Shop Details" />
            <ShopDetailsAreaMain id={1} />
            <ShopDetailsRelatedProduct />
        </main>
    );
};

export default page;