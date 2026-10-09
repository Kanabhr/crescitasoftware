import { RectangleIcon } from "@/svg/BreadcrumbIcons";
import SmartLink from "../common/SmartLink";
import Image from "next/image";

const PortfolioColFourBreadcrumb = () => {
    return (
        <div className="tp-breadcrumb-area about-us-spacing p-relative z-index-1 pb-50">
            <div className="tp-breadcrumb-bg">
                <Image style={{ width: "100%", height: "auto" }} width={1905} height={539} src="/assets/img/breadcrumb/background.png" alt="background image" />
            </div>
            <div className="container">
                <div className="tp-breadcrumb-border">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tp-breadcrumb-list tp_fade_anim" data-delay=".3">
                                <ul>
                                    <li><SmartLink href="/">Home</SmartLink></li>
                                    <li>Our Project</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-breadcrumb-main p-relative mb-30">
                                <h2 className="tp-breadcrumb-title tp-ff-sequel-bold-head mb-20 tp_fade_anim" data-delay=".4">Our <span>Creative</span><br /> Team Members</h2>
                                <div className="tp_fade_anim" data-delay=".5">
                                    <p className="tp-breadcrumb-dec ml-240">Cunnet is a beacon of best innovation the <br /> dynamic parent a company of wealcoder many<br /> other subsidiaries.</p>
                                </div>
                                <span className="tp-breadcrumb-shape d-none d-md-block tp_fade_anim" data-delay=".6">
                                    <RectangleIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioColFourBreadcrumb;