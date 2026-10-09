import { DribbleIconLarge, FacebookIconLarge, InstragramThreeIcon, TwittorIconLarge } from "@/svg/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const authorSocialLinks = [
    { id: "fb", icon: <FacebookIconLarge />, href: "#" },
    { id: "tw", icon: <TwittorIconLarge />, href: "#" },
    { id: "dr", icon: <DribbleIconLarge />, href: "#" },
    { id: "ig", icon: <InstragramThreeIcon />, href: "#" },
];

const PostboxDetailsAuthor = () => {
    return (
        <div className="sidebar-widget-author d-flex align-items-start">
            <div className="sidebar-widget-author-img">
                <Image width={100} height={100} src="/assets/img/blog/details/user.png" alt="author" />
            </div>
            <div className="postbox-details-content">
                <div className="sidebar-widget-author-content">
                    <span>About Author</span>
                    <h4 className="sidebar-widget-author-name">Peter Bowman</h4>
                    <p>
                        Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. <br />
                        Praesent at nulla aliquam ligula.
                    </p>
                </div>
                <div className="sidebar-widget-author-social">
                    {authorSocialLinks.map(({ id, icon, href }) => (
                        <Link key={id} href={href}>
                            <span>{icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostboxDetailsAuthor;