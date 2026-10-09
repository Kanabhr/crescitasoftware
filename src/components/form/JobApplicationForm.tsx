"use client";

import { useForm } from "react-hook-form";
import { ButtonArrowIcon } from "@/svg";
import { toast } from "react-toastify";

type JobFormValues = {
    name: string;
    email: string;
    motivation: string;
    project: string;
    portfolio: string;
    salary: string;
    cv: FileList;
};

const JobApplicationForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<JobFormValues>();

    const onSubmit = () => {
        toast.success("Application submitted successfully!");
        reset(); // form clear
    };

    return (
        <div className="tp-application-aera pb-140">
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-form-wrap tp-application-form-wrap">
                            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">

                                    {/* Name */}
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Your Name*</label>
                                            <input
                                                type="text"
                                                {...register("name", { required: "Name is required" })}
                                            />
                                            {errors.name && <p className="form-error">{errors.name.message}</p>}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Your Email address*</label>
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
                                            {errors.email && <p className="form-error">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    {/* Motivation */}
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Why you decided to apply here and why should we select you?*</label>
                                            <textarea
                                                {...register("motivation", { required: "This field is required" })}
                                            />
                                            {errors.motivation && <p className="form-error">{errors.motivation.message}</p>}
                                        </div>
                                    </div>

                                    {/* Project */}
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Tell us about a project you felt proud of</label>
                                            <textarea {...register("project")} />
                                        </div>
                                    </div>

                                    {/* Portfolio */}
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Share your portfolio (Behance, Dribbble, etc.)*</label>
                                            <textarea
                                                {...register("portfolio", { required: "Portfolio link is required" })}
                                            />
                                            {errors.portfolio && <p className="form-error">{errors.portfolio.message}</p>}
                                        </div>
                                    </div>

                                    {/* Salary */}
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Your current salary & expected salary*</label>
                                            <textarea
                                                {...register("salary", { required: "Salary information is required" })}
                                            />
                                            {errors.salary && <p className="form-error">{errors.salary.message}</p>}
                                        </div>
                                    </div>

                                    {/* Upload + Submit */}
                                    <div className="col-lg-12">
                                        <div className="tp-application-form-btn d-flex justify-content-between">
                                            <div className="tp-application-upload mb-15">
                                                <span>Upload your CV *</span>
                                                <input
                                                    type="file"
                                                    {...register("cv", { required: "CV is required" })}
                                                />
                                                {errors.cv && <p className="form-error">{errors.cv.message}</p>}
                                            </div>

                                            <div className="tp-application-btn mb-15 mt-10">
                                                <button className="tp-btn" type="submit">
                                                    <span>
                                                        <span className="text-1">Submit Now</span>
                                                        <span className="text-2">Submit Now</span>
                                                    </span>
                                                    <i>
                                                        <ButtonArrowIcon />
                                                        <ButtonArrowIcon />
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationForm;
