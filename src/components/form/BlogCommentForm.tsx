"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

type FormValues = {
    name: string;
    email: string;
    website?: string;
    comment: string;
};

interface BlogCommentFormProps {
    postId?: number;
}

const BlogCommentForm = ({ postId }: BlogCommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<FormValues>();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("postId", String(postId ?? ""));
            formData.append("name", data.name);
            formData.append("email", data.email);
            if (data.website) formData.append("website", data.website);
            formData.append("comment", data.comment);

            const res = await fetch("/api/comment-submissions", { method: "POST", body: formData });
            const json = await res.json();

            if (json.ok) {
                toast.success("Comment submitted! It will appear after moderation.");
                reset();
            } else if (json.fieldErrors) {
                (Object.entries(json.fieldErrors) as [string, string][]).forEach(
                    ([field, msg]) => {
                        if (field === "name" || field === "email" || field === "comment") {
                            setError(field as keyof FormValues, { message: msg });
                        }
                    },
                );
                toast.error(json.error || "Please check the highlighted fields.");
            } else {
                toast.error(json.error || "Something went wrong.");
            }
        } catch {
            toast.error("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
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
                                            <span className="form-error">
                                                {errors.comment.message}
                                            </span>
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
                        <label htmlFor="remeber">
                            Save my name, email, and website in this browser for the next time I
                            comment.
                        </label>
                    </div>
                </div>
                <div className="postbox-details-input-box">
                    <button
                        type="submit"
                        className="tp-btn d-inline-flex align-items-center"
                        disabled={submitting}
                    >
                        <span>
                            <span className="text-1">Post Comment</span>
                            <span className="text-2">Post Comment</span>
                        </span>
                    </button>
                </div>
            </div>
            {/* Honeypot: real visitors never see this. Bots fill it and are silently ignored. */}
            <span
                aria-hidden="true"
                style={{ display: "none" }}
            >
                <input
                    type="text"
                    {...register("website")}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </span>
        </form>
    );
};

export default BlogCommentForm;