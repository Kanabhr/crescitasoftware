import Image from "next/image";
import Link from "next/link";

const ratingSummary = {
    average: 4.5,
    totalReviews: 36,
    breakdown: [
        { star: 5, percent: 82 },
        { star: 4, percent: 30 },
        { star: 3, percent: 15 },
        { star: 2, percent: 6 },
        { star: 1, percent: 10 },
    ],
};

const reviews = [
    {
        name: "Sagor Mahmud",
        date: "06 March, 2025",
        image: "/assets/img/product/details/user-5.png",
        comment:
            "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
        rating: 5,
    },
    {
        name: "Salim Rana",
        date: "06 March, 2025",
        image: "/assets/img/product/details/user-4.jpg",
        comment:
            "This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.",
        rating: 5,
    },
];

const ProductCustomerReviews = () => {
    return (
        <div className="tp-product-details-review-statics">
            {/* Review summary */}
            <div className="tp-product-details-review-number d-inline-block mb-50">
                <h3 className="tp-product-details-review-number-title">
                    Customer reviews
                </h3>

                <div className="tp-product-details-review-summery d-flex align-items-center">
                    <div className="tp-product-details-review-summery-value">
                        <span>{ratingSummary.average}</span>
                    </div>

                    <div className="tp-product-details-review-summery-rating d-flex align-items-center">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        ))}
                        <p>({ratingSummary.totalReviews} Reviews)</p>
                    </div>
                </div>

                <div className="tp-product-details-review-rating-list">
                    {ratingSummary.breakdown.map((item) => (
                        <div
                            key={item.star}
                            className="tp-product-details-review-rating-item d-flex align-items-center"
                        >
                            <span>{item.star} Star</span>
                            <div className="tp-product-details-review-rating-bar">
                                <span
                                    className="tp-product-details-review-rating-bar-inner"
                                    style={{ width: `${item.percent}%` }}
                                ></span>
                            </div>
                            <div className="tp-product-details-review-rating-percent">
                                <span>{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review list */}
            <div className="tp-product-details-review-list pr-110">
                <h3 className="tp-product-details-review-title">Rating & Review</h3>

                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="tp-product-details-review-avater d-flex align-items-start"
                    >
                        <div className="tp-product-details-review-avater-thumb">
                            <Link href="#">
                                <Image width={60} height={60} src={review.image} alt={review.name} />
                            </Link>
                        </div>

                        <div className="tp-product-details-review-avater-content">
                            <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                ))}
                            </div>

                            <h3 className="tp-product-details-review-avater-title">
                                {review.name}
                            </h3>
                            <span className="tp-product-details-review-avater-meta">
                                {review.date}
                            </span>

                            <div className="tp-product-details-review-avater-comment">
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCustomerReviews;
