"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
    name: string;
    email: string;
    website: string;
    message: string;
};

const TeamContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row gx-20">
                <div className="col-lg-6">
                    <div className="mb-20">
                        <input
                            type="text"
                            placeholder="Your name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="mb-20">
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="mb-20">
                        <input
                            type="text"
                            placeholder="Your website url"
                            {...register("website", {
                                required: "Website URL is required",
                                pattern: {
                                    value:
                                        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
                                    message: "Enter a valid website URL",
                                },
                            })}
                        />
                        {errors.website && (
                            <p className="form-error">{errors.website.message}</p>
                        )}
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="mb-20">
                        <textarea
                            placeholder="Message"
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                        />
                        {errors.message && (
                            <p className="form-error">{errors.message.message}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="tp-team-details-input-btn">
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default TeamContactForm;
