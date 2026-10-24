import { DribbleIconLarge, FacebookIconLarge, InstragramThreeIcon, TwittorIconLarge } from "@/svg/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const authorSocialLinks = [
    { id: "fb", icon: <FacebookIconLarge />, href: "#" },
    { id: "tw", icon: <TwittorIconLarge />, href: "#" },
    { id: "dr", icon: <DribbleIconLarge />, href: "#" },
    { id: "ig", icon: <InstragramThreeIcon />, href: "#" },
];

interface PostboxDetailsAuthorProps {
    name?: string;
    bio?: string;
    photo?: string;
    /** True when the post was found in the database (even if author fields are empty). */
    postExistsInDb?: boolean;
}

const PostboxDetailsAuthor = ({ name, bio, photo, postExistsInDb }: PostboxDetailsAuthorProps) => {
    // When the post exists in DB but has no author attached, hide the author box entirely.
    if (postExistsInDb && !name) return null;

    const displayName = name || "Peter Bowman";
    const displayBio = bio || "Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis.";
    const displayPhoto = photo || "/assets/img/blog/details/user.png";

    return (
        <div className="sidebar-widget-author d-flex align-items-start">
            <div className="sidebar-widget-author-img">
                <Image width={100} height={100} src={displayPhoto} alt={displayName} />
            </div>
            <div className="postbox-details-content">
                <div className="sidebar-widget-author-content">
                    <span>About Author</span>
                    <h4 className="sidebar-widget-author-name">{displayName}</h4>
                    <p>{displayBio}</p>
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
