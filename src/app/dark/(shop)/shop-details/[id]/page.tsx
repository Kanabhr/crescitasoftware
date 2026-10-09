
import ShopDetailsAreaMain from "@/components/shop/ShopDetailsAreaMain";
import ShopDetailsRelatedProduct from "@/components/shop/ShopDetailsRelatedProduct";
import ShopTopArea from "@/components/shop/ShopTopArea";
import { PageParamsProps } from "@/types/custom-dt";

export default async function ShopDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    return (
        <main>
            <ShopTopArea category2="Shop Details" title="Shop Details" />
            <ShopDetailsAreaMain id={id} />
            <ShopDetailsRelatedProduct />
        </main>
    );
}
