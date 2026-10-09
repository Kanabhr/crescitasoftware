
type LogoType = "default" | "brand";
type StyleVariant = "default" | "cs";

export interface PageHeaderProps {
    hideMainMenu?: boolean;
    sideColumnClass?: string;
    useSecondaryMenu?: boolean;
    styleVariant?: StyleVariant;
    logoType?: LogoType;
}