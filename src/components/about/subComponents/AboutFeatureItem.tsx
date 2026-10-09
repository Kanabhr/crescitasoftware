import Image from "next/image";

interface Props {
    title: string;
    description: string;
    image: string;
}

const AboutFeatureItem = ({ title, description, image }: Props) => {
    return (
        <div className="tp-about-item anim-zoomin-wrap mb-40">
            <div className="mb-35">
                <div className="tp-about-thumb fix anim-zoomin">
                    <Image data-speed=".8"
                        src={image}
                        alt={title}
                        width={491}
                        height={600}
                    />
                </div>
            </div>
            <div className="tp-about-content">
                <h3 className="tp-about-title mb-10">{title}</h3>
                <p className="tp-about-dec">{description}</p>
            </div>
        </div>
    );
};

export default AboutFeatureItem;
