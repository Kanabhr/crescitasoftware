import FaqSingleItem from "./subComponents/FaqSingleItem";
import { faqItems } from "@/data/faq-data";

const FaqArea = () => {
    return (
        <div id="faq" className="tp-faq-area pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-3">
                        <div className="tp-faq-subtitle mb-30 pt-10">
                            <span className="text-uppercase fw-500">what i do</span>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-9">
                        <div className="tp-faq tp-service-details-faq-two tp-service-details-faq mb-30">
                            <h2 className="tp-section-title reveal-text fs-72 mb-40">Explore Answers to<br />
                                Our Most Asked Questions</h2>
                            <div className="accordion" id="accordionExample2">
                                {faqItems.map((item, index) => (
                                    <FaqSingleItem key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqArea;