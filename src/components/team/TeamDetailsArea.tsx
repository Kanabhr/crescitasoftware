import { DribbleIcon, FacebookIcon, InstragramIcon, TwittorIcon } from '@/svg/SocialIcons';
import TeamContactForm from '../form/TeamContactForm';
import { IdProps } from '@/types/custom-dt';
import { teamData } from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';

const TeamDetailsArea = ({ id }: IdProps) => {
    // Find the team that matches the given ID
    const teamInfo = teamData.find((team) => team.id == id);

    return (
        <div className="tp-team-details-area tp-team-details-ptb pb-110">
            <div className="container container-1230">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-lg-6">
                        <div className="tp-team-details-wrap mb-30">
                            <div className="tp-team-details-thumb mb-40">
                                <Image style={{ width: "100%", height: "auto" }} width={845} height={862} src={teamInfo?.image || ''} alt={teamInfo?.name || ''} />
                            </div>
                            <div className="tp-team-details-info d-flex justify-content-between">
                                <div className="tp-team-details-info-contact">
                                    <Link href={`tel:${teamInfo?.phone}`}>
                                        {teamInfo?.phone}
                                    </Link>
                                    <Link href={`mailto:${teamInfo?.email}`}>
                                        {teamInfo?.email}
                                    </Link>
                                </div>
                                <div className="tp-team-details-info-social">
                                    <div className="tp-offcanvas-social">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <FacebookIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <TwittorIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <DribbleIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <InstragramIcon />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="tp-team-details-wrapper mr-115 mb-30">
                            <div className="tp-team-details-text">
                                <h4 className="tp-section-title fs-92 tp-ff-sequel-semi-bold mb-15">
                                    {teamInfo?.name.split(" ").map((w, i) => (
                                        <span key={i}>
                                            {w} <br />
                                        </span>
                                    ))}
                                </h4>
                                <span className="tp-team-details-text-sub mb-30 d-inline-block">
                                    {teamInfo?.role}
                                </span>
                                <p>{teamInfo?.description}</p>
                            </div>

                            {/* MORE DETAILS */}
                            <div className="tp-team-details-more mb-50">
                                <h4 className="tp-team-details-more-title">
                                    More details
                                </h4>
                                <ul>
                                    {teamInfo?.details.map((item, i) => (
                                        <li key={i}>
                                            <span>{item.label}:</span> {item.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* EXPERIENCE */}
                            <div className="tp-team-details-more mb-50">
                                <h4 className="tp-team-details-more-title">
                                    Experience
                                </h4>
                                <ul>
                                    {teamInfo?.experience.map((exp, i) => (
                                        <li key={i}>{exp}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* SKILLS */}
                            <div className="tp-team-details-progress mb-50">
                                <h4 className="tp-team-details-more-title mb-35">
                                    My Skills
                                </h4>

                                {teamInfo?.skills.map((skill, i) => (
                                    <div key={i} className="tp-team-details-progress mb-35">
                                        <h6 className="tp-team-details-progress-title">
                                            {skill.title}
                                        </h6>
                                        <div className="tp-team-details-progress-inner">
                                            <div
                                                className="tp-team-details-progress-bar"
                                                style={{ width: `${skill.value}%` }}
                                            >
                                                <h6 className="tp-team-details-progress-counter">
                                                    {skill.value}%
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="tp-team-details-input mb-50">
                                <h4 className="tp-team-details-more-title mb-35">Think I can help?</h4>
                                <div className="tp-team-details-input-content">
                                    <TeamContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsArea;