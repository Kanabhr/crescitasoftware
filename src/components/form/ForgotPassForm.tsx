"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

type ForgotPassFormValues = {
    email: string;
};

const ForgotPassForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ForgotPassFormValues>();

    const onSubmit = () => {
        toast.success("Password reset link sent to your email!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-login-option">
                <div className="tp-login-input-wrapper">
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
                </div>

                <div className="tp-login-bottom">
                    <button type="submit" className="tp-login-btn w-100">
                        Send Request
                    </button>
                </div>

                <div className="tp-login-top text-center mt-30">
                    <p className="mb-0">
                        Remember your password?{" "}
                        <span>
                            <Link href="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default ForgotPassForm;
