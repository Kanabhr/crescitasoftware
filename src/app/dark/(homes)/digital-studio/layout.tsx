import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import DigitalStudioHeader from "@/layouts/headers/DigitalStudioHeader";
import DigitalStudioFooter from "@/layouts/footers/DigitalStudioFooter";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import AppProvider from "@/provider/AppProvider";

export default function DigitalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <AppProvider>
                        {/* -- global component -- */}
                        <div id="magic-cursor" className="cursor-black-bg">
                            <div id="ball"></div>
                        </div>
                        <BackToTop />
                        <HeaderSearch />
                        <DigitalStudioHeader />
                        <div id="smooth-wrapper">
                            <div id="smooth-content">
                                {children} {/* Render the main content of the current page here */}
                                <DigitalStudioFooter />
                            </div >
                        </div >
                    </AppProvider>
                </AnimationWrapper >
            </CursorAndBackgroundProvider >
        </ScrollSmoothProvider >
    );
}
