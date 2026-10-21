import CartAreaMain from "@/components/shop/CartAreaMain";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cart - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopTopArea category2="Shopping Cart" title="Shopping Cart" />
            <CartAreaMain />
        </main>
    );
};

export default page;