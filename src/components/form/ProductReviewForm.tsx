"use client";

import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

type ReviewFormData = {
    rating: number;
    message: string;
    name: string;
    email: string;
    remember: boolean;
};

const ProductReviewForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors },
        reset,
    } = useForm<ReviewFormData>({
        defaultValues: {
            rating: 0,
            remember: false,
        },
    });

    const rating = useWatch({ control, name: "rating" });

    const onSubmit = (data: ReviewFormData) => {
        if (data.rating === 0) {
            toast.error("Please select a rating");
            return;
        }
        toast.success("Review submitted successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Rating */}
            <div className="tp-product-details-review-form-rating d-flex align-items-center">
                <p>Your Rating :</p>
                <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setValue("rating", star)}
                            style={{ cursor: "pointer" }}
                        >
                            <i
                                className={`fa-solid fa-star ${rating >= star ? "active" : ""
                                    }`}
                            ></i>
                        </span>
                    ))}
                </div>
            </div>

            {/* Inputs */}
            <div className="tp-product-details-review-input-wrapper">
                {/* Message */}
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="message">Your Review</label>
                    </div>
                    <div className="tp-product-details-review-input">
                        <textarea
                            id="message"
                            placeholder="Write your review here..."
                            {...register("message", {
                                required: "Review is required",
                                minLength: {
                                    value: 10,
                                    message: "Review must be at least 10 characters",
                                },
                            })}
                        />
                        {errors.message && (
                            <small className="text-danger">
                                {errors.message.message}
                            </small>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className="tp-product-details-review-input">
                        <input
                            id="name"
                            type="text"
                            placeholder="Md Harun"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <small className="text-danger">{errors.name.message}</small>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className="tp-product-details-review-input">
                        <input
                            id="email"
                            type="email"
                            placeholder="cunnet@mail.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <small className="text-danger">{errors.email.message}</small>
                        )}
                    </div>
                </div>
            </div>

            {/* Remember */}
            <div className="tp-product-details-review-suggetions mb-20">
                <div className="tp-product-details-review-remeber">
                    <input id="remember" type="checkbox" {...register("remember")} />
                    <label htmlFor="remember">
                        Save my name, email, and website in this browser for the next time I
                        comment.
                    </label>
                </div>
            </div>

            {/* Submit */}
            <div className="tp-product-details-review-btn-wrapper">
                <button className="tp-product-details-review-btn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ProductReviewForm;
