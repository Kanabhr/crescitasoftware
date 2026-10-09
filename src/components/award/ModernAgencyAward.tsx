import { modernAgencyAwards } from "@/data/awards-data";
import Image from "next/image";

const ModernAgencyAward = () => {
    return (
        <div className="mp-awards-area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-10">
                        <div className="mp-awards-title-wrap mb-60">
                            <h2 className="tp-section-title fs-72 tp-ff-sequel-roman reveal-text">
                                Creating award-worthy work <br />
                                isn&apos;t the ultimate goal it&apos;s just the beginning of
                                building experiences that truly matter.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-9 offset-lg-3">
                        <div className="mp-awards-item-wrap fix ml-75">
                            {modernAgencyAwards.map((item) => (
                                <div key={item.id} className="right-item-animetion">
                                    <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
                                        <div className="mp-awards-left mb-20">
                                            <span className="count mr-80">{item.count}</span>
                                            <span>{item.title}</span>
                                        </div>

                                        <div className="mp-awards-right mb-20 d-flex align-items-center">
                                            <span className="mr-20">{item.date}</span>
                                            <div
                                                className="mp-awards-logo"
                                                style={{ backgroundColor: item.bgColor }}
                                            >
                                                <Image width={16} height={8} src={item.logo} alt="award logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyAward;
