import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import PortfolioHeader from "@/layouts/headers/PortfolioHeader";
import AppProvider from "@/provider/AppProvider";

export default function PortfolioMixLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CursorAndBackgroundProvider>
            <AppProvider>
                <div id="magic-cursor" className="cursor-black-bg">

                    <div id="ball"></div>
                </div>
                {/* Global Components */}
                <PortfolioHeader buttonVariantClass="tp-header-sidebar-btn-bg-white"
                    buttonBackgroundClass="tp-header-sidebar-btn-bg"
                    stickyButtonClass="" />
                {children}
            </AppProvider>
        </CursorAndBackgroundProvider>
    );
}
