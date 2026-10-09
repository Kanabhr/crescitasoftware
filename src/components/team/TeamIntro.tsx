import SmartLink from "../common/SmartLink";
import Image from "next/image";

const TeamIntro = () => {
    return (
        <div className="tp-service-details-banner-area about-us-spacing p-relative z-index-1 pb-90">
            <div className="tp-breadcrumb-bg">
                <Image style={{ width: "100%", height: "auto" }} width={1905} height={539} src="/assets/img/breadcrumb/background.png" alt="bg-img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-service-details-hero-title text-center">
                            <h2 className="tp-ff-sequel-bold-head mb-30 tp_fade_anim" data-delay=".3">Our <span className="text-red">Creative</span><br /> Team Members</h2>
                            <div className="tp-breadcrumb-list tp_fade_anim" data-delay=".5">
                                <ul>
                                    <li><SmartLink href="/">Home</SmartLink></li>
                                    <li>Expert Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamIntro;