"use client";

import { useForm, type FieldValues, type RegisterOptions } from "react-hook-form";
import { ButtonArrowIcon } from "@/svg";
import { toast } from "react-toastify";
import type { ApplicationFieldDT } from "@/types/career-dt";
import { ALLOWED_EXTENSIONS, MAX_FILE_BYTES } from "@/lib/applicationRules";

interface Props {
    jobId: number;
    fields: ApplicationFieldDT[];
}

const ACCEPT = ALLOWED_EXTENSIONS.map((e) => `.${e}`).join(",");

const rulesFor = (f: ApplicationFieldDT): RegisterOptions<FieldValues, string> => {
    if (f.type === "file") {
        return {
            required: f.required ? `${f.label} is required` : false,
            validate: (files: FileList | undefined) => {
                const file = files?.[0];
                if (!file) return true;
                const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
                if (!ALLOWED_EXTENSIONS.includes(ext)) return "Upload a PDF or DOCX file.";
                if (file.size > MAX_FILE_BYTES) return "File must be 5 MB or smaller.";
                return true;
            },
        };
    }
    return {
        required: f.required ? `${f.label} is required` : false,
        ...(f.type === "email"
            ? { pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }
            : {}),
    };
};

const JobApplicationForm = ({ jobId, fields }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FieldValues>();

    const onSubmit = async (values: FieldValues) => {
        const body = new FormData();
        body.append("jobId", String(jobId));
        body.append("website", String(values.website ?? "")); // honeypot
        for (const f of fields) {
            if (f.type === "file") {
                const file = (values[f.key] as FileList | undefined)?.[0];
                if (file) body.append(f.key, file);
            } else {
                body.append(f.key, String(values[f.key] ?? ""));
            }
        }

        try {
            const res = await fetch("/api/job-applications", { method: "POST", body });
            const data: { error?: string; fieldErrors?: Record<string, string> } = await res
                .json()
                .catch(() => ({}));

            if (res.ok) {
                toast.success("Application submitted successfully!");
                reset();
                return;
            }
            if (data.fieldErrors) {
                for (const [key, message] of Object.entries(data.fieldErrors)) {
                    setError(key, { type: "server", message });
                }
            }
            toast.error(data.error ?? "Something went wrong. Please try again.");
        } catch {
            toast.error("Network error. Please check your connection and try again.");
        }
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
                                {/* Honeypot: hidden from people, bots fill it */}
                                <div
                                    aria-hidden="true"
                                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                                >
                                    <label>Website</label>
                                    <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                                </div>

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

                                    {/* Upload + Submit */}
                                    <div className="col-lg-12">
                                        <div className="tp-application-form-btn d-flex justify-content-between">
                                            <div>
                                                {fileFields.map((f) => (
                                                    <div key={f.key} className="tp-application-upload mb-15">
                                                        <span>{labelOf(f)}</span>
                                                        <input
                                                            type="file"
                                                            accept={ACCEPT}
                                                            {...register(f.key, rulesFor(f))}
                                                        />
                                                        {errorOf(f.key) && (
                                                            <p className="form-error">{errorOf(f.key)}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="tp-application-btn mb-15 mt-10">
                                                <button className="tp-btn" type="submit" disabled={isSubmitting}>
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