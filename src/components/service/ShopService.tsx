import servicesData from "@/data/service-data";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

const ShopService = () => {
    //display service item 
    const displayServiceItem = servicesData.slice(6, 9);

    return (
        <div className="shop-service-area pt-135 pb-120">
            <div className="container">
                <div className="row">
                    {displayServiceItem.map((item) => (
                        <div key={item.title} className="col-lg-4 col-md-6">
                            <div className="shop-service-item d-flex ml-115 mb-30 tp_fade_anim" data-delay={item.delay}>
                                <span className="shop-service-icon">
                                    {item.icon && <item.icon />}
                                </span>
                                <div className="shop-service-content">
                                    <h3 className="shop-service-title tp-ff-jost mb-15">{item.title}</h3>
                                    <p className="shop-service-dec mb-30">{item.description}</p>
                                    <SmartLink className="tp-btn tp-ff-inter" href={`/service-details/${item.id}`}>
                                        <span>
                                            <span className="text-1">Read more</span>
                                            <span className="text-2">Read more</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopService;
