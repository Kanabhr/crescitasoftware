import { ProductDt } from "@/types/product-dt";
import Image from "next/image";
import Link from "next/link";

const MiniCartItem: React.FC<ProductDt> = ({ id, image, title, price, quantity }) => {
    return (
        <div key={id} className="cartmini__widget-item">
            <div className="cartmini__thumb">
                <Link href={"#"}>
                    <Image
                        style={{width:"100%", height:"auto"}}
                        src={image}
                        alt={title}
                        width={70}
                        height={70}
                    />
                </Link>
            </div>

            <div className="cartmini__content">
                <h5 className="cartmini__title">
                    <Link href={"#"}>{title}</Link>
                </h5>

                <div className="cartmini__price-wrapper">
                    <span className="cartmini__price">
                        ${price.toFixed(2)}
                    </span>
                    <span className="cartmini__quantity">
                        x{quantity}
                    </span>
                </div>
            </div>

            <button className="cartmini__del">
                <i className="fa-regular fa-xmark" />
            </button>
        </div>
    );
};

export default MiniCartItem;