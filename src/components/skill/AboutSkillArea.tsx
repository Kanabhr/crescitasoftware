import Image from "next/image";

type SkillItem = {
    id: number;
    name: string;
    icon: string;
    delay: number;
};

const skills: SkillItem[] = [
    { id: 1, name: "Photoshop", icon: "/assets/img/skil/photoshop.png", delay: 0.3 },
    { id: 2, name: "Figma", icon: "/assets/img/skil/figma.png", delay: 0.4 },
    { id: 3, name: "Adobe XD", icon: "/assets/img/skil/adobe.png", delay: 0.5 },
    { id: 4, name: "Sketch", icon: "/assets/img/skil/sketch.png", delay: 0.6 },
    { id: 5, name: "HTML", icon: "/assets/img/skil/html.png", delay: 0.7 },
    { id: 6, name: "JavaScript", icon: "/assets/img/skil/js.png", delay: 0.8 },
];

const AboutSkillArea = () => {
    return (
        <div className="tp-skill-area pt-160">
            <div className="container">
                <div className="row">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="col-xl-2 col-lg-4 col-md-4 col-sm-6"
                        >
                            <div
                                className="tp-skill-item d-flex flex-column mb-25 align-items-center tp_fade_anim"
                                data-delay={skill.delay}
                            >
                                <div className="tp-skill-icon mb-20">
                                    <Image className="img-fluid w-100 h-100" width={70} height={70} src={skill.icon} alt={skill.name} />
                                </div>
                                <span className="tp-skill-text">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSkillArea;