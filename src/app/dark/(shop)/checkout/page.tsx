import ShopCheckoutArea from "@/components/shop/ShopCheckoutArea";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopTopArea category2="Checkout" title="Checkout" />
            <ShopCheckoutArea />
        </main>
    );
};

export default page;