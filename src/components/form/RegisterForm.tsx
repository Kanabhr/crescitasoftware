"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/AuthSvgs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type RegisterFormValues = {
    name: string;
    email: string;
    password: string;
    terms: boolean;
};

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    const onSubmit = () => {
        toast.success("Register successful!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-login-option">
                {/* Social login */}
                <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="tp-login-option-item has-google">
                        <Link href="#">
                            <Image
                                width={22}
                                height={22}
                                src="/assets/img/login/google.svg"
                                alt="google image"
                            />{" "}
                            Sign in with google
                        </Link>
                    </div>
                    <div className="tp-login-option-item">
                        <Link href="#">
                            <Image
                                width={22}
                                height={22}
                                src="/assets/img/login/facebook.svg"
                                alt="facebook image"
                            />
                        </Link>
                    </div>
                    <div className="tp-login-option-item">
                        <Link href="#">
                            <Image
                                className="apple"
                                width={22}
                                height={22}
                                src="/assets/img/login/apple.svg"
                                alt="apple image"
                            />
                        </Link>
                    </div>
                </div>

                <div className="tp-login-mail text-center mb-40">
                    <p>
                        or Sign in with <Link href="#">Email</Link>
                    </p>
                </div>

                {/* Inputs */}
                <div className="tp-login-input-wrapper">
                    {/* Name */}
                    <div className="tp-login-input-box">
                        <div className="tp-login-input-title">
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="tp-login-input">
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must be at least 2 characters",
                                    },
                                })}
                            />
                        </div>
                        {errors.name && (
                            <p className="form-error">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="tp-login-input-box">
                        <div className="tp-login-input-title">
                            <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="tp-login-input">
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
                        </div>
                        {errors.email && (
                            <p className="form-error">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="tp-login-input-box">
                        <div className="tp-login-input-title">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="tp-login-input p-relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Min. 6 character"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            <div
                                className="tp-login-input-eye"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <span>
                                    {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                                </span>
                            </div>
                        </div>
                        {errors.password && (
                            <p className="form-error">{errors.password.message}</p>
                        )}
                    </div>
                </div>

                {/* Terms */}
                <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                    <div className="tp-login-remeber">
                        <input
                            id="terms"
                            type="checkbox"
                            {...register("terms", {
                                required: "You must accept the terms & privacy policy",
                            })}
                        />
                        <label htmlFor="terms">
                            I accept the terms of the Service & Privacy Policy.
                        </label>
                    </div>
                </div>
                {errors.terms && (
                    <p className="form-error">{errors.terms.message}</p>
                )}

                {/* Submit */}
                <div className="tp-login-bottom">
                    <button type="submit" className="tp-login-btn w-100">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
