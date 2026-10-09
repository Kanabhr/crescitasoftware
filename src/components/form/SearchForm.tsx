"use client";

import { useForm } from "react-hook-form";

type SearchFormValues = {
    query: string;
};

const SearchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SearchFormValues>();

    const onSubmit = () => {
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tp-search-form-input">
                <input
                    type="text"
                    placeholder="What are you looking foor?"
                    {...register("query", {
                        required: "Please enter a search keyword",
                        minLength: {
                            value: 2,
                            message: "Enter at least 2 characters",
                        },
                    })}
                />

                <span className="tp-search-focus-border"></span>

                <button className="tp-search-form-icon" type="submit">
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                </button>
            </div>

            {errors.query && (
                <p className="form-error mt-10">{errors.query.message}</p>
            )}
        </form>
    );
};

export default SearchForm;
