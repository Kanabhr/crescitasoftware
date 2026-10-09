"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface CouponFormData {
    coupon: string;
}

const CouponForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CouponFormData>();

    const onSubmit = (data: CouponFormData) => {
        // Example: Just show toast
        toast.success(`Coupon "${data.coupon}" applied successfully!`);
        reset(); // optional: clear input after submit
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tp-return-customer-input">
                    <label>Coupon Code :</label>
                    <input
                        type="text"
                        placeholder="Coupon"
                        {...register("coupon", { required: "Coupon code is required" })}
                    />
                    {errors.coupon && (
                        <p className="text-red-500 mt-1">{errors.coupon.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="tp-return-customer-btn tp-checkout-btn"
                >
                    Apply
                </button>
            </form>
    );
};

export default CouponForm;
