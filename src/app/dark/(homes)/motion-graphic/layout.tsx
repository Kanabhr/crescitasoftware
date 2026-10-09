import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import MotionGraphicHeader from "@/layouts/headers/MotionGraphicHeader";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import MotionGraphicFooter from "@/layouts/footers/MotionGraphicFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import AppProvider from "@/provider/AppProvider";
import BootstrapLoader from "@/layouts/BootstrapLoader";

export default function MotionLayout({
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
                            <MotionGraphicHeader />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children}
                                    <MotionGraphicFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </ScrollSmoothProvider>
        </CursorAndBackgroundProvider>
    );
}
