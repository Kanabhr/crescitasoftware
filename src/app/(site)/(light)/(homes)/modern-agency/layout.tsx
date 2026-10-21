import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import ModernAgencyFooter from "@/layouts/footers/ModernAgencyFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import PageHeader from "@/layouts/headers/PageHeader";
import AppProvider from "@/provider/AppProvider";

export default function ModernAgencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <AppProvider>
                        <BootstrapLoader>
                            {/* -- global component -- */}
                            <div id="magic-cursor" className="cursor-black-bg">
                                <div id="ball"></div>
                            </div>
                            <BackToTop />
                            <HeaderSearch />
                            <PageHeader hideMainMenu sideColumnClass="col-6" useSecondaryMenu />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children} {/* Render the main content of the current page here */}
                                    <ModernAgencyFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
}
