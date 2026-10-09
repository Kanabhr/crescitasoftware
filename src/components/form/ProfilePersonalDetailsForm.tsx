"use client";
import { useForm, Controller } from "react-hook-form";
import {
    LocationIcon,
    PhoneIcon,
    ProfileEmailIcon,
    ProfileUserIcon,
} from "@/svg/ProfileIcons";
import { TwittorIcon } from "@/svg/SocialIcons";
import NiceSelect from "@/ui/NiceSelect";
import { toast } from "react-toastify";

type FormValues = {
    name: string;
    email: string;
    facebook: string;
    twitter: string;
    phone: string;
    gender: string;
    address: string;
    bio: string;
};

const ProfilePersonalDetailsForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            name: "Md Shagor",
            email: "example@mail.com",
            facebook: "Md Shagor",
            twitter: "Md Shagor",
            phone: "0123 456 7889",
            gender: "",
            address: "3304 Randall Drive",
            bio: "Hi there, this is my bio...",
        },
    });

    const onSubmit = () => {
        toast.success("Profile updated successfully!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile__info">
                <h3 className="profile__info-title">Personal Details</h3>

                <div className="profile__info-content">
                    <div className="row">
                        {/* Name */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    <span><ProfileUserIcon /></span>
                                </div>
                                {errors.name && <p className="error-text">{errors.name.message}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    <span><ProfileEmailIcon /></span>
                                </div>
                                {errors.email && <p className="error-text">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Facebook */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="text"
                                        placeholder="Facebook username"
                                        {...register("facebook")}
                                    />
                                    <span><i className="fa-brands fa-facebook-f"></i></span>
                                </div>
                            </div>
                        </div>

                        {/* Twitter */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="text"
                                        placeholder="Twitter username"
                                        {...register("twitter")}
                                    />
                                    <span><TwittorIcon /></span>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="text"
                                        placeholder="Enter your number"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                        })}
                                    />
                                    <span><PhoneIcon /></span>
                                </div>
                                {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="col-xxl-6 col-md-6">
                            <div className="profile__input-box">
                                <div className="profile__input tp-checkout-input">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{ required: "Gender is required" }}
                                        render={({ field }) => (
                                            <NiceSelect
                                                name={field.name}
                                                className="tp-select tp-input"
                                                defaultCurrent={0}
                                                options={[
                                                    { value: "", text: "Gender" },
                                                    { value: "male", text: "Male" },
                                                    { value: "female", text: "Female" },
                                                    { value: "others", text: "Others" },
                                                ]}
                                                onChange={(item) => field.onChange(item.value)}
                                            />
                                        )}
                                    />
                                </div>
                                {errors.gender && <p className="error-text">{errors.gender.message}</p>}
                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-xxl-12">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        {...register("address", { required: "Address is required" })}
                                    />
                                    <span><LocationIcon /></span>
                                </div>
                                {errors.address && <p className="error-text">{errors.address.message}</p>}
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="col-xxl-12">
                            <div className="profile__input-box">
                                <div className="profile__input">
                                    <textarea
                                        placeholder="Enter your bio"
                                        {...register("bio")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="col-xxl-12">
                            <div className="profile__btn">
                                <button type="submit" className="tp-btn-cart sm">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ProfilePersonalDetailsForm;
