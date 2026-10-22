"use client";

import { useForm, type FieldValues, type RegisterOptions } from "react-hook-form";
import { ButtonArrowIcon } from "@/svg";
import { toast } from "react-toastify";
import type { ApplicationFieldDT } from "@/types/career-dt";

interface Props {
    fields: ApplicationFieldDT[];
}

const rulesFor = (f: ApplicationFieldDT): RegisterOptions<FieldValues, string> => ({
    required: f.required ? `${f.label} is required` : false,
    ...(f.type === "email"
        ? { pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }
        : {}),
});

const JobApplicationForm = ({ fields }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>();

    // Step 3 will send the answers and the file to the server.
    const onSubmit = () => {
        toast.success("Application submitted successfully!");
        reset();
    };

    const labelOf = (f: ApplicationFieldDT) => `${f.label}${f.required ? "*" : ""}`;
    const errorOf = (key: string) => errors[key]?.message as string | undefined;

    const regularFields = fields.filter((f) => f.type !== "file");
    const fileFields = fields.filter((f) => f.type === "file");

    return (
        <div className="tp-application-aera pb-140">
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-form-wrap tp-application-form-wrap">
                            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    {regularFields.map((f) => (
                                        <div
                                            key={f.key}
                                            className={f.width === "half" ? "col-lg-6" : "col-lg-12"}
                                        >
                                            <div className="tp-contact-form-input mb-20">
                                                <label>{labelOf(f)}</label>
                                                {f.type === "textarea" ? (
                                                    <textarea {...register(f.key, rulesFor(f))} />
                                                ) : f.type === "select" ? (
                                                    <select defaultValue="" {...register(f.key, rulesFor(f))}>
                                                        <option value="" disabled>
                                                            Select an option
                                                        </option>
                                                        {f.options.map((o) => (
                                                            <option key={o} value={o}>
                                                                {o}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input type={f.type} {...register(f.key, rulesFor(f))} />
                                                )}
                                                {errorOf(f.key) && (
                                                    <p className="form-error">{errorOf(f.key)}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Uploads + Submit */}
                                    <div className="col-lg-12">
                                        <div className="tp-application-form-btn d-flex justify-content-between">
                                            <div>
                                                {fileFields.map((f) => (
                                                    <div key={f.key} className="tp-application-upload mb-15">
                                                        <span>{labelOf(f)}</span>
                                                        <input type="file" {...register(f.key, rulesFor(f))} />
                                                        {errorOf(f.key) && (
                                                            <p className="form-error">{errorOf(f.key)}</p>
                                                        )}
                                                    </div>
                                                ))}
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