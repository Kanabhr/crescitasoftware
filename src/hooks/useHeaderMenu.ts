import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types/menu-dt";

export const useHeaderMenu = (): MenuItem[] => {
    const pathname = usePathname();

    // Detect dark version route
    const isDark = pathname?.startsWith("/dark") ?? false;

    // Return menu based on theme
    return isDark ? darkMenu : lightMenu;
};
