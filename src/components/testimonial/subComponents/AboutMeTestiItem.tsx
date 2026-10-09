import { ShopTestimonialItem } from "@/types/custom-dt";
import React from "react";

const AboutMeTestiItem: React.FC<ShopTestimonialItem> = ({ comment, name, brand, industry }) => {
    return (
        <div className="shop-testimonial-item text-center">
            <h4 className="shop-testimonial-comment tp-ff-jost fw-500 mb-30">
                {comment}
            </h4>
            <span className="shop-testimonial-name fw-500 mb-40 d-block">
                {name}
            </span>
            <div className="shop-testimonial-brand-name">
                <b className="fw-500">{brand}</b>
                <span className="d-block">{industry}</span>
            </div>
        </div>
    );
};

export default AboutMeTestiItem;