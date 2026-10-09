"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/AuthSvgs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LoginFormValues = {
    email: string;
    password: string;
    remember: boolean;
};

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const onSubmit = () => {
        toast.success("Login successful!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-30">
                    <h3 className="tp-login-title">Login to Cunnet.</h3>
                    <p>
                        Don&apos;t have an account?{" "}
                        <span>
                            <Link href="/register">Create a free account</Link>
                        </span>
                    </p>
                </div>

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

                    {/* Remember & Forgot */}
                    <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-30">
                        <div className="tp-login-remeber">
                            <input
                                id="remember"
                                type="checkbox"
                                {...register("remember")}
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="tp-login-forgot">
                            <Link href="/forgot">Forgot Password?</Link>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="tp-login-bottom">
                        <button type="submit" className="tp-login-btn w-100">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
