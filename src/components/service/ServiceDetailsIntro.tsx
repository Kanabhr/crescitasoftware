import { ArrowIconEleven } from "@/svg/ArrowIcons";
import servicesData from "@/data/service-data";
import { IdProps } from "@/types/custom-dt";
import Link from "next/link";

interface ServiceLink {
    title: string;
    href?: string;
}

const serviceLinks: ServiceLink[] = [
    { title: "API Development" },
    { title: "WordPress" },
    { title: "Cloud Migration" },
    { title: "Front End Development" },
    { title: "JavaScript" },
    { title: "Flutter Framework" },
];

const ServiceDetailsIntro = ({ id }: IdProps) => {
    // Find the service that matches the given ID
    const service = servicesData.find((service) => service.id == id);

    return (
        <div className="tp-service-details-banner-area about-us-spacing pb-80">
            <div className="container">
                <div className="row">
                    {/* Subtitle */}
                    <div className="col-xl-2 col-lg-4">
                        <div className="tp-service-details-hero-subtitle mb-20 tp_fade_anim" data-delay=".3">
                            <span className="text-uppercase fw-500">
                                Web Design{" "}
                                <ArrowIconEleven />
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="col-xl-6 col-lg-8">
                        <div className="tp-service-details-hero-title ml-115 tp_fade_anim" data-delay=".5">
                            <h2 className="tp-ff-sequel-bold-head">{service?.title || "Services Capabilities"}</h2>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-xl-4 col-lg-6">
                        <div className="ca-hero-service tp-service-details-hero-link ml-90 mt-90 tp_fade_anim" data-delay=".7">
                            <ul>
                                {serviceLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href || "#"}>
                                            <span className="explore-text" data-text={`+ ${link.title}`}>
                                                + {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsIntro;