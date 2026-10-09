"use client";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

type PasswordFormValues = {
    old_pass: string;
    new_pass: string;
    con_new_pass: string;
};

const ProfilePasswordChangeForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<PasswordFormValues>({
        mode: "onChange",
    });

    // SAFE replacement for watch()
    const newPassword = useWatch({
        control,
        name: "new_pass",
    });

    const onSubmit = () => {
        toast.success("Password updated successfully!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Old Password */}
                <div className="col-xxl-12">
                    <div className="tp-profile-input-box">
                        <div className="tp-profile-input-title">
                            <label htmlFor="old_pass">Old Password</label>
                        </div>
                        <div className="tp-contact-input">
                            <input
                                id="old_pass"
                                type="password"
                                {...register("old_pass", {
                                    required: "Old password is required",
                                })}
                            />
                            {errors.old_pass && (
                                <p className="form-error">{errors.old_pass.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* New Password */}
                <div className="col-xxl-6 col-md-6">
                    <div className="tp-profile-input-box">
                        <div className="tp-profile-input-title">
                            <label htmlFor="new_pass">New Password</label>
                        </div>
                        <div className="tp-profile-input">
                            <input
                                id="new_pass"
                                type="password"
                                {...register("new_pass", {
                                    required: "New password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            {errors.new_pass && (
                                <p className="form-error">{errors.new_pass.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="col-xxl-6 col-md-6">
                    <div className="tp-profile-input-box">
                        <div className="tp-profile-input-title">
                            <label htmlFor="con_new_pass">Confirm Password</label>
                        </div>
                        <div className="tp-profile-input">
                            <input
                                id="con_new_pass"
                                type="password"
                                {...register("con_new_pass", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === newPassword || "Passwords do not match",
                                })}
                            />
                            {errors.con_new_pass && (
                                <p className="form-error">
                                    {errors.con_new_pass.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="col-xxl-6 col-md-6">
                    <div className="profile__btn">
                        <button type="submit" className="tp-btn-cart sm">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ProfilePasswordChangeForm;
