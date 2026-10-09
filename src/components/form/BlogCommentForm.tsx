"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
    name: string;
    email: string;
    website?: string;
    comment: string;
};

const BlogCommentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = () => {
        toast.success("Comment submitted successfully!");
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="postbox-details-form-wrapper">
                <div className="postbox-details-form-inner">
                    <div className="row">
                        {/* Name */}
                        <div className="col-xl-6">
                            <div className="postbox-details-input-box">
                                <div className="postbox-details-input">
                                    <label>Name *</label>
                                    <div className="mb-25">
                                        <input
                                            type="text"
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                        />
                                        {errors.name && (
                                            <span className="form-error">{errors.name.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-xl-6">
                            <div className="postbox-details-input-box">
                                <div className="postbox-details-input">
                                    <label>Email *</label>
                                    <div className="mb-25">
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <span className="form-error">{errors.email.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="col-xl-12">
                            <div className="postbox-details-input-box">
                                <div className="postbox-details-input mb-25">
                                    <label>Website</label>
                                    <input
                                        type="text"
                                        {...register("website")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="col-xl-12">
                            <div className="postbox-details-input-box">
                                <div className="postbox-details-input">
                                    <label>Comment *</label>
                                    <div className="mb-20">
                                        <textarea
                                            id="msg"
                                            {...register("comment", {
                                                required: "Comment is required",
                                                minLength: {
                                                    value: 5,
                                                    message: "Comment must be at least 5 characters",
                                                },
                                            })}
                                        />
                                        {errors.comment && (
                                            <span className="form-error">{errors.comment.message}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="postbox-details-suggetions mb-20">
                    <div className="postbox-details-remeber">
                        <input id="remeber" type="checkbox" />
                        <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                </div>
                <div className="postbox-details-input-box">
                    <button type="submit" className="tp-btn d-inline-flex align-items-center">
                        <span>
                            <span className="text-1">Post Comment</span>
                            <span className="text-2">Post Comment</span>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default BlogCommentForm;
