import Link from "next/link";

const PriceTopArea = () => {
    return (
        <div className="tp-blog-grid-area tp-pd-2-ptb pt-175 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pd-2-top tp-breadcrumb-border pb-15">
                            <h3 className="tp-section-title fs-92 tp_fade_anim mb-20" data-delay=".3">Our Pricing Plan</h3>
                            <div className="tp-pd-2-categories mb-10 tp_fade_anim" data-delay=".5">
                                <span><Link href="/">Website</Link></span>{" "}
                                <span>Pricing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceTopArea;