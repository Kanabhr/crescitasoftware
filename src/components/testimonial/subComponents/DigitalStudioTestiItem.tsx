import { TestimonialDt } from "@/types/custom-dt";
import Image from "next/image";

const TestimonialItem = ({ item }: { item: TestimonialDt }) => {
    return (
        <div className="swiper-slide">
            <div className="ca-testimonial-item text-center">
                <span className="ca-testimonial-reviewed d-block">
                    reviewed on {item.platform}
                </span>
                <Image width={163} height={31} className="mb-30" src="/assets/img/testimonial/envato-logo.png" alt="logo" />

                <p className="ca-testimonial-comment mb-30">
                    “ {item.comment} ”
                </p>

                <div className="ca-testimonial-author-name">
                    <b>{item.name}</b>
                    <span className="d-block">{item.designation}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
