"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

interface LoginFormData {
    email: string;
    password: string;
    remember: boolean;
}

const CheckoutLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginFormData>();

    const onSubmit = (data: LoginFormData) => {
        // Example: Just show a toast for demo
        toast.success(`Welcome back, ${data.email}!`);
        reset(); // optional: clear form after submit
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tp-return-customer-input">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Your Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="tp-return-customer-input">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                    <div className="tp-return-customer-remeber">
                        <input
                            id="remember"
                            type="checkbox"
                            {...register("remember")}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="tp-return-customer-forgot">
                        <Link href="/forgot">Forgot Password?</Link>
                    </div>
                </div>

                <button
                    type="submit"
                    className="tp-return-customer-btn tp-checkout-btn"
                >
                    Login
                </button>
            </form>
    );
};

export default CheckoutLoginForm;
