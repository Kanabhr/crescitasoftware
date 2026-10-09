import Link from "next/link";

const services = [
    "Complete Brand Design",
    "Logo Design",
    "Graphic Design",
    "Infographic An other",
];

const ServiceItem = ({ title }: { title: string }) => (
    <li>
        <Link href="#">
            {title}
            <span>
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.75 9.9375L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
        </Link>
    </li>
);

const CvButton = () => (
    <div className="pp-service-btn mb-30 tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
        <Link href="assets/img/cv/mycv.docx" className="tp-btn pp-btn-download">
            <span>
                <span className="text-1">Download CV</span>
                <span className="text-2">Download CV</span>
            </span>
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.27295 0.75C6.27295 0.335787 5.93716 1.07513e-07 5.52295 8.9407e-08C5.10874 7.13011e-08 4.77295 0.335786 4.77295 0.75L5.52295 0.75L6.27295 0.75ZM4.99262 14.2734C5.28551 14.5663 5.76039 14.5663 6.05328 14.2734L10.8262 9.50045C11.1191 9.20755 11.1191 8.73268 10.8262 8.43979C10.5334 8.14689 10.0585 8.14689 9.76559 8.43979L5.52295 12.6824L1.28031 8.43979C0.987416 8.14689 0.512542 8.14689 0.219649 8.43979C-0.0732447 8.73268 -0.0732448 9.20755 0.219649 9.50045L4.99262 14.2734ZM5.52295 0.75L4.77295 0.75L4.77295 13.7431L5.52295 13.7431L6.27295 13.7431L6.27295 0.75L5.52295 0.75Z"
                    fill="currentColor"
                />
            </svg>
        </Link>
    </div>
);

const PersonalPortfolioService = () => {
    return (
        <div className="pp-service-area pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-2 col-lg-3">
                        <div className="pp-service-subtitle-wrap mb-30 tp_fade_anim" data-delay=".3">
                            <span className="ca-team-subtitle pp-team-subtitle-black">
                                <span>[</span> What I Do <span>]</span>
                            </span>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-3 col-lg-3">
                        <CvButton />
                    </div>

                    <div className="col-xl-7 col-lg-6">
                        <div className="pp-service-list ml-35 tp_fade_anim" data-delay=".5">
                            <ul>
                                {services.map((service, idx) => (
                                    <ServiceItem key={idx} title={service} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolioService;
