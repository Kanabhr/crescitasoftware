import SmartLink from "@/components/common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

type HeroButtonProps = {
    href: string;
    text: string;
    variant?: "light" | "outline";
};

const PersonalPHeroButton = ({
    href,
    text,
    variant = "light",
}: HeroButtonProps) => {
    const className =
        variant === "light"
            ? "tp-btn text-black bg-white mb-10"
            : "tp-btn tp-btn-border-white text-white mb-10";

    return (
        <SmartLink className={className} href={href}>
            <span>
                <span className="text-1">{text}</span>
                <span className="text-2">{text}</span>
            </span>
            <i>
                <ButtonArrowIcon />
                <ButtonArrowIcon />
            </i>
        </SmartLink>
    );
};
export default PersonalPHeroButton;