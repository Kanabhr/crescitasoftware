import ShopProduct from "@/components/product/ShopProduct";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopTopArea category2="Shop" title="Our products" />
            <ShopProduct />
        </main>
    );
};

export default page;