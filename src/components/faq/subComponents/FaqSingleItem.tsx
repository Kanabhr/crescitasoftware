import { FaqItemDt } from "@/types/custom-dt";

interface FaqSingleItemProps {
    item: FaqItemDt;
    index: number;
}

const FaqSingleItem:React.FC<FaqSingleItemProps> = ({ item, index }) => {
    return (
        <div
            key={item.id}
            className="tp-faq-item tp_fade_anim"
            data-delay=".3"
        >
            <h2 className="accordion-header">
                <button
                    className={`tp-faq-button ${item.active ? "" : "collapsed"
                        }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${item.id}`}
                    aria-expanded={item.active ? "true" : "false"}
                    aria-controls={`faq${item.id}`}
                >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.title}
                </button>
            </h2>

            <div
                id={`faq${item.id}`}
                className={`tp-faq-collapse collapse ${item.active ? "show" : ""
                    }`}
                data-bs-parent="#accordionExample2"
            >
                <div className="tp-faq-body">
                    <p>{item.content}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqSingleItem;