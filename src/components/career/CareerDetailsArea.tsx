import { careerData } from "@/data/career-data";
import { IdProps } from "@/types/custom-dt";
import Link from "next/link";

const CareerDetailsArea = ({ id }: IdProps) => {
    // Find the career that matches the given ID
    const careerItem = careerData.find((item) => item.id == id);

    return (
        <section className="tp-career-details-ptb pt-120 pb-100">
            <div className="container container-1230">
                <div className="row">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="tp-career-details-wrapper pb-40">
                            {/* Top Info */}
                            <div className="tp-career-details-top pb-80">
                                <span className="tp-career-details-subtitle">{careerItem?.topInfo.subtitle}</span>
                                <h4 className="tp-career-details-title">{careerItem?.topInfo.title}</h4>
                                <div className="tp-career-details-info d-flex align-items-center">
                                    {careerItem?.topInfo.info.map((item, idx) => (
                                        <div className="tp-career-details-info-item" key={idx}>
                                            <span>{item.label}:</span>
                                            <h5>{item.value}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Job Summary */}
                            <div className="tp-career-details-wrap">
                                <h4 className="tp-career-details-title-2">Job Summary</h4>
                                <p className="pb-50">{careerItem?.summary}</p>

                                {/* Key Responsibilities */}
                                <h4 className="tp-career-details-title-2">Key Responsibilities</h4>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {careerItem?.keyResponsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                {/* Qualifications */}
                                <h4 className="tp-career-details-title-2">Qualifications</h4>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {careerItem?.qualifications.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                {/* Perks & Benefits */}
                                <h4 className="tp-career-details-title-2">Perks & Benefits</h4>
                                <p>We are seeking a Product Designer to join our team at Agntix. In this role, you will help craft <br />
                                    the visual and interactive elements of our software products.</p>
                                <div className="tp-career-details-list pb-20">
                                    <ul>
                                        {careerItem?.perks.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>
                                <p>We&apos;re committed to creating the happiest company working for and is proud to provide equal opportunity to all. All the qualified applicants will receive consideration for employment without regard to race, color, ancestry, religion.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="tp-career-details-sidebar">
                            <div className="tp-career-details-sidebar-box">
                                <div className="tp-career-details-sidebar-heading">
                                    <span>Avg. Salary</span>
                                    <h4 className="tp-career-details-sidebar-title">{careerItem?.salary}</h4>
                                </div>

                                {careerItem?.sidebar.map((item, idx) => (
                                    <div className="tp-career-details-sidebar-item d-flex" key={idx}>
                                        <div className="tp-career-details-sidebar-item-icon"><span>{item.icon && <item.icon />}</span></div>
                                        <div className="tp-career-details-sidebar-item-content">
                                            <span>{item.label}</span>
                                            <h5>{item.value}</h5>
                                        </div>
                                    </div>
                                ))}

                                <div className="tp-career-details-sidebar-btn">
                                    <Link href={careerItem?.applyLink || "#"}>Apply for the Job</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerDetailsArea;
