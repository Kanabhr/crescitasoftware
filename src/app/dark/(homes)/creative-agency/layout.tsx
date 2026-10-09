import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import PageHeader from "@/layouts/headers/PageHeader";
import AppProvider from "@/provider/AppProvider";

export default function CreativeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CursorAndBackgroundProvider>
            <ScrollSmoothProvider>
                <AnimationWrapper>
                    <AppProvider>
                        {/* -- global component -- */}
                        <div id="magic-cursor" className="cursor-black-bg">
                            <div id="ball"></div>
                        </div>
                        <BackToTop />
                        <HeaderSearch />
                        <PageHeader />
                        <div id="smooth-wrapper">
                            <div id="smooth-content">
                                {children}
                                <CreativeAgencyFooter />
                            </div>
                        </div>
                    </AppProvider>
                </AnimationWrapper>
            </ScrollSmoothProvider >
        </CursorAndBackgroundProvider >
    );
}