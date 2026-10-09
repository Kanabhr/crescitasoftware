"use client";

import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { ButtonArrowIcon } from "@/svg";

type ContactFormValues = {
    name: string;
    email: string;
    company?: string;
    website?: string;
    interests: string[];
    budget: string;
    exact?: string;
    timeline?: string;
    message: string;
};
const ContactMeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<ContactFormValues>({
        defaultValues: {
            interests: [],
        },
    });

    useWatch({ control, name: "interests" });

    const onSubmit = () => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="tp-contact-me-title tp-ff-sequel-semi-bold mb-25">
                Connect with Me...
            </h4>

            {/* Name */}
            <div className="mb-15">
                <input
                    type="text"
                    className="tp-input"
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <span className="form-error">{errors.name.message}</span>
                )}
            </div>

            {/* Email */}
            <div className="mb-15">
                <input
                    type="email"
                    className="tp-input"
                    placeholder="Your Email"
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
            <div className="mb-15">
                <input
                    type="text"
                    className="tp-input"
                    placeholder="Company Name"
                    {...register("company")}
                />
            </div>
            <div className="mb-45">
                <input
                    type="text"
                    className="tp-input"
                    placeholder="Company Website"
                    {...register("website")}
                />
            </div>
            <h4 className="tp-contact-me-title tp-ff-sequel-semi-bold mb-25">
                {`I'm`} Interested in...
            </h4>

            {/* Interests */}
            <div className="mb-45">
                <div className="tp-contact-me-category mr-180">
                    {[
                        "Branding",
                        "Design Concept",
                        "App Design",
                        "Android Development",
                        "iOS Development",
                        "Web Design",
                        "Logo",
                    ].map((item) => (
                        <label key={item}>
                            <input
                                type="checkbox"
                                value={item}
                                {...register("interests", {
                                    validate: (v) =>
                                        v.length > 0 || "Select at least one interest",
                                })}
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
                {errors.interests && (
                    <span className="form-error">
                        {errors.interests.message}
                    </span>
                )}
            </div>
            <h4 className="tp-contact-me-title tp-ff-sequel-semi-bold mb-25">
                MY Budget Is :
            </h4>

            {/* Budget */}
            <div className="mb-50">
                <div className="tp-contact-me-category tp-contact-me-budget">
                    {["<2k", "2-5k", "5-10k", "10-15k", "15-20k"].map((item) => (
                        <label key={item}>
                            <input
                                type="radio"
                                value={item}
                                {...register("budget", {
                                    required: "Please select a budget",
                                })}
                            />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
                {errors.budget && (
                    <span className="form-error">{errors.budget.message}</span>
                )}
            </div>

            <input
                type="text"
                className="tp-input mb-15"
                placeholder="Do you have an exact budget?"
                {...register("exact")}
            />

            <input
                type="text"
                className="tp-input mb-15"
                placeholder="What is your timeline ?"
                {...register("timeline")}
            />

            {/* Message */}
            <div className="mb-30">
            <textarea
                className="tp-input tp-textarea"
                placeholder="Message"
                {...register("message", {
                    required: "Message is required",
                })}
            />
            {errors.message && (
                <span className="form-error">{errors.message.message}</span>
                )}
            </div>

            <button
                type="submit"
                className="tp-btn tp-btn-red tp-btn-xl tp-ff-inter d-inline-block"
            >
                <span>
                    <span className="text-1">Submit Message</span>
                    <span className="text-2">Submit Message</span>
                </span>
                <i>
                    <ButtonArrowIcon />
                    <ButtonArrowIcon />
                </i>
            </button>
        </form>
    );
};

export default ContactMeForm;