"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ContactUsFormValues = {
    name: string;
    email: string;
    website?: string;
    message: string;
};

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactUsFormValues>();

    const onSubmit = () => {
        toast.success("Your message has been sent!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Full Name */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Full name*</label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Full name is required",
                            })}
                        />
                        {errors.name && (
                            <span className="form-error">{errors.name.message}</span>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Email address*</label>
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

                {/* Website */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Website link</label>
                        <input
                            type="text"
                            {...register("website")}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>How Can We Help You*</label>
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                        />
                        {errors.message && (
                            <span className="form-error">{errors.message.message}</span>
                        )}
                    </div>

                    <div className="tp-contact-form-btn">
                        <button
                            type="submit"
                            className="tp-btn tp-btn-xxl tp-btn-red d-inline-flex align-items-center w-100"
                        >
                            <span>
                                <span className="text-1">Contact Us</span>
                                <span className="text-2">Contact Us</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactUsForm;
