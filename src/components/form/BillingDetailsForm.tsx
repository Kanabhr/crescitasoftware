"use client";

import { BillingFormDataDT } from "@/types/custom-dt";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BillingDetailsForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<BillingFormDataDT>({
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            company: "Example LTD.",
            country: "United States (US)",
            address1: "123 Main St",
            address2: "Apartment 4B",
            city: "New York",
            state: "New York US",
            postcode: "10001",
            phone: "+1 123 456 7890",
            email: "john@example.com",
            createAccount: false,
            shipToDifferent: false,
            orderNotes: "Please deliver between 9am-5pm",
        }
    });

    const onSubmit = () => {
        toast.success("Billing details submitted successfully!");
        reset(); // optional: clear form
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-checkout-bill-inner">
                <div className="row">
                    {/* First Name */}
                    <div className="col-md-6">
                        <div className="tp-checkout-input">
                            <label>First Name <span>*</span></label>
                            <input
                                type="text"
                                {...register("firstName", { required: "First name is required" })}
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                        <div className="tp-checkout-input">
                            <label>Last Name <span>*</span></label>
                            <input
                                type="text"
                                {...register("lastName", { required: "Last name is required" })}
                            />
                            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    {/* Company */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Company name (optional)</label>
                            <input type="text" {...register("company")} />
                        </div>
                    </div>

                    {/* Country */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Country / Region</label>
                            <input type="text" {...register("country")} />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Street address</label>
                            <input type="text" {...register("address1")} />
                        </div>
                        <div className="tp-checkout-input">
                            <input type="text" {...register("address2")} placeholder="Apartment, suite, unit, etc. (optional)" />
                        </div>
                    </div>

                    {/* City */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Town / City</label>
                            <input type="text" {...register("city")} />
                        </div>
                    </div>

                    {/* State */}
                    <div className="col-md-6">
                        <div className="tp-checkout-input">
                            <label>State / County</label>
                            <select {...register("state")} className="tp-select mb-20">
                                <option value="New York US">New York US</option>
                                <option value="Berlin Germany">Berlin Germany</option>
                                <option value="Paris France">Paris France</option>
                                <option value="Tokiyo Japan">Tokiyo Japan</option>
                            </select>
                        </div>
                    </div>

                    {/* Postcode */}
                    <div className="col-md-6">
                        <div className="tp-checkout-input">
                            <label>Postcode ZIP</label>
                            <input type="text" {...register("postcode")} />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Phone <span>*</span></label>
                            <input
                                type="text"
                                {...register("phone", { required: "Phone is required" })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Email address <span>*</span></label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email",
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Options */}
                    <div className="col-md-12">
                        <div className="tp-checkout-option-wrapper">
                            <div className="tp-checkout-option">
                                <input type="checkbox" {...register("createAccount")} id="create_free_account" />
                                <label htmlFor="create_free_account">Create an account?</label>
                            </div>
                            <div className="tp-checkout-option">
                                <input type="checkbox" {...register("shipToDifferent")} id="ship_to_diff_address" />
                                <label htmlFor="ship_to_diff_address">Ship to a different address?</label>
                            </div>
                        </div>
                    </div>

                    {/* Order notes */}
                    <div className="col-md-12">
                        <div className="tp-checkout-input">
                            <label>Order notes (optional)</label>
                            <textarea {...register("orderNotes")} placeholder="Notes about your order, e.g. special notes for delivery." />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BillingDetailsForm;
