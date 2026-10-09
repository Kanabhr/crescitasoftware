import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import PersonalPortfolioFooter from "@/layouts/footers/PersonalPortfolioFooter";
import PersonalPortfolioHeader from "@/layouts/headers/PersonalPortfolioHeader";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import AppProvider from "@/provider/AppProvider";

export default function PersonalPortLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CursorAndBackgroundProvider>
            <ScrollSmoothProvider>
                <AnimationWrapper>
                    <AppProvider>
                        <BootstrapLoader>
                            {/* -- global component -- */}
                            <div id="magic-cursor" className="cursor-black-bg">
                                <div id="ball"></div>
                            </div>
                            <BackToTop />
                            <HeaderSearch />
                            <PersonalPortfolioHeader textColor={true} />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children} {/* Render the main content of the current page here */}
                                    <PersonalPortfolioFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </ScrollSmoothProvider>
        </CursorAndBackgroundProvider>
    );
}
