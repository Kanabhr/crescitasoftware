import ShopAgencyTestimonial from "@/components/testimonial/ShopAgencyTestimonial";
import ShopRelatedProduct from "@/components/product/ShopRelatedProduct";
import ShopAgencyProduct from "@/components/product/ShopAgencyProduct";
import ShopCategories from "@/components/product/ShopCategories";
import ShopTextSlider from "@/components/product/ShopTextSlider";
import ShopInstagram from "@/components/product/ShopInstagram";
import ShopPayment from "@/components/product/ShopPayment";
import ShopService from "@/components/service/ShopService";
import ShopHero from "@/components/hero/ShopHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agency Shop - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ShopHero />
            <ShopService />
            <ShopAgencyProduct />
            <ShopCategories />
            <ShopAgencyTestimonial />
            <ShopRelatedProduct />
            <ShopPayment />
            <ShopTextSlider />
            <ShopInstagram />
        </main>
    );
};

export default page;