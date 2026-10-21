import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import PersonalPortfolioHeader from "@/layouts/headers/PersonalPortfolioHeader";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import MotionGraphicFooter from "@/layouts/footers/MotionGraphicFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import AppProvider from "@/provider/AppProvider";

export default function AboutMeLayout({
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
                            <PersonalPortfolioHeader wrapClass="pp-header-white" textColor={true} />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children} {/* Render the main content of the current page here */}
                                    <MotionGraphicFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
}
