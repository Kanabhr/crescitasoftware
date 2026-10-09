import Link from "next/link";

interface ShopTopAreaProps {
    category1?: string;
    category2: string;
    title: string;
    category1Link?: string;
    spacingCls?: string;
}

const ShopTopArea = ({
    category1 = "Website",
    category2,
    title,
    category1Link = "/",
    spacingCls = ""
}: ShopTopAreaProps) => {
    return (
        <div className={`tp-pd-2-ptb pt-200 ${spacingCls}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pd-2-top tp-breadcrumb-border pb-90 text-center">
                            <div className="tp-pd-2-categories mb-10 tp_fade_anim" data-delay=".3">
                                <span><Link href={category1Link}>{category1}</Link></span>{" "}
                                <span>{category2}</span>
                            </div>
                            <h3
                                className="tp-section-title fs-92 tp-ff-sequel-semi-bold tp_fade_anim"
                                data-delay=".5"
                            >
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopTopArea;
