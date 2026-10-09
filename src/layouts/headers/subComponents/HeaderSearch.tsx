"use client"
import SearchForm from "@/components/form/SearchForm";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";

const HeaderSearch = () => {
    const { openSearch, toggleSearch } = useGlobalContext();

    return (
        <>
            <div onClick={toggleSearch} className={`tp-search-body-overlay ${openSearch ? "active" : ""}`}></div>
            <div className={`tp-search-form-toggle ${openSearch ? "active" : ""}`}>
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-lg-12">
                            <div className="tp-search-top d-flex justify-content-between align-items-center">
                                <div className="tp-header-logo tp-search-logo">
                                    <Link href="/">
                                        <Image className="logo-1" width={140} height={29} src="/assets/img/logo/logo.png" alt="logo" />
                                        <Image className="logo-2" width={140} height={29} src="/assets/img/logo/logo-white.png" alt="logo white" />
                                    </Link>
                                </div>
                                <button onClick={toggleSearch} className="tp-search-close">
                                    <i className="fa-light fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="tp-search-form">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;