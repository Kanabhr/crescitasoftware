import CursorAndBackgroundProvider from "@/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/animation/AnimationWrapper";
import HeaderSearch from "@/layouts/headers/subComponents/HeaderSearch";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import BootstrapLoader from "@/layouts/BootstrapLoader";
import ShopFooter from "@/layouts/footers/ShopFooter";
import ShopHeader from "@/layouts/headers/ShopHeader";
import AppProvider from "@/provider/AppProvider";

export default function ShopDetailsLayout({
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
                            <div id="magic-cursor" className="cursor-black-bg">
                                <div id="ball"></div>
                            </div>
                            <BackToTop />
                            <HeaderSearch />
                            <ShopHeader />
                            <div id="smooth-wrapper">
                                <div id="smooth-content">
                                    {children}
                                    <ShopFooter />
                                </div>
                            </div>
                        </BootstrapLoader>
                    </AppProvider>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
}
