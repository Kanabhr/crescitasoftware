import ShopAgencyTestimonial from "@/components/testimonial/ShopAgencyTestimonial";
import ShopRelatedProduct from "@/components/product/ShopRelatedProduct";
import ShopAgencyProduct from "@/components/product/ShopAgencyProduct";
import ShopCategories from "@/components/product/ShopCategories";
import ShopTextSlider from "@/components/product/ShopTextSlider";
import ShopInstagram from "@/components/product/ShopInstagram";
import ShopService from "@/components/service/ShopService";
import ShopPayment from "@/components/product/ShopPayment";
import ShopHero from "@/components/hero/ShopHero";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";


export async function generateMetadata() {
    return buildMetadata("/agency-shop");
}

const page = () => {
    return (
        <main>
<BreadcrumbJsonLd path="/agency-shop" />
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