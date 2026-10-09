import {
    DribbleIconLarge,
    FacebookIconLarge,
    InstragramThreeIcon,
    TwittorIconLarge,
} from "@/svg/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    { id: "fb", icon: <FacebookIconLarge />, href: "#" },
    { id: "tw", icon: <TwittorIconLarge />, href: "#" },
    { id: "dr", icon: <DribbleIconLarge />, href: "#" },
    { id: "ig", icon: <InstragramThreeIcon />, href: "#" },
];
const BlogSidebarAuthor = () => {
    return (
        <div className="sidebar-widget-author">
            <div className="sidebar-widget-author-img d-flex align-items-center">
                <Image
                    width={60}
                    height={60}
                    src="/assets/img/blog/blog-standard/av-1.png"
                    alt="author image"
                />

                <div className="sidebar-widget-author-content">
                    <h4 className="sidebar-widget-author-name mb-0">Kate Johnson</h4>
                    <span>Digital Artist</span>
                </div>
            </div>

            <div className="sidebar-widget-author-content">
                <p>
                    Crafting Digital Experiences <br /> with Purpose!
                </p>
            </div>

            <div className="sidebar-widget-author-social">
                {socialLinks.map(({ id, icon, href }) => (
                    <Link key={id} href={href}>
                        <span>{icon}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogSidebarAuthor;
