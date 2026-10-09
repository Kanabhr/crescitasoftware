type ShopAgencyTestiItemProps = {
    id: number;
    comment: string;
    name: string;
    brand: string;
    role: string;
};

const ShopAgencyTestiItem = ({ id, comment, name, brand, role }: ShopAgencyTestiItemProps) => {
    return (
        <div key={id} className="swiper-slide">
            <div className="shop-testimonial-item text-center">
                <h4 className="shop-testimonial-comment tp-ff-jost fw-500 mb-30">
                    {comment}
                </h4>
                <span className="shop-testimonial-name fw-500 mb-40 d-block">
                    {name}
                </span>
                <div className="shop-testimonial-brand-name">
                    <b className="fw-500">{brand}</b>
                    <span className="d-block">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default ShopAgencyTestiItem;
