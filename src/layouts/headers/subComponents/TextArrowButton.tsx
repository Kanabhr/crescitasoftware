import SmartLink from "@/components/common/SmartLink";
import { ButtonArrowIcon } from "@/svg";

const TextArrowButton = ({
    label,
    href,
}: {
    label: string;
    href: string;
}) => (
    <SmartLink className="tp-btn pp-btn-nobg text-uppercase" href={href}>
        <span>
            <span className="text-1">{label}</span>
            <span className="text-2">{label}</span>
        </span>
        <i>
            <ButtonArrowIcon />
            <ButtonArrowIcon />
        </i>
    </SmartLink>
);
export default TextArrowButton;