import PersonalPortfolioHeader from "@/layouts/headers/PersonalPortfolioHeader";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import MotionGraphicFooter from "@/layouts/footers/MotionGraphicFooter";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
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
                            {/* <AboutMeHeader /> */}
                            <PersonalPortfolioHeader wrapClass="pp-header-white" textColor={false} />
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
