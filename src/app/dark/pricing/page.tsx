import PriceTopArea from '@/components/pricing/PriceTopArea';
import PricingArea from '@/components/pricing/PricingArea';
import FaqArea from '@/components/faq/FaqArea';

const page = () => {
    return (
        <main>
            <PriceTopArea />
            <PricingArea />
            <FaqArea />
        </main>
    );
};

export default page;