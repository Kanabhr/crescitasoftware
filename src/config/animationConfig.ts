// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route
import { AboutThumbAnimation, AwardAnimation, charAnimation, heroMagneticAnimation, jumpTextAnimation, portfolioTextZoomAnim, servicePanelPinAnim, textPerspectiveAnim, textScaleHoverAnim, titleMiddleAnimetion, tpHoverWebGL, panelPinAnimation, productPinAnimation, initPrimaryMarqueeAnimation, initSecondaryMarqueeAnimation, careerPinAnimation, milScaleAnimation, heroScaleGallery } from "@/hooks/useGsapAnimation";

export const animationConfig: Record<string, (() => void)[]> = {
    //Light page animation
    "/creative-agency": [titleMiddleAnimetion, textPerspectiveAnim, servicePanelPinAnim, textScaleHoverAnim, heroScaleGallery],
    "/digital-studio": [tpHoverWebGL, portfolioTextZoomAnim, textScaleHoverAnim, milScaleAnimation],
    "/modern-agency": [charAnimation, heroMagneticAnimation, jumpTextAnimation, AboutThumbAnimation, AwardAnimation, tpHoverWebGL, textScaleHoverAnim],
    "/personal-portfolio": [tpHoverWebGL, textScaleHoverAnim, charAnimation],
    "/branding-studio": [textPerspectiveAnim, AwardAnimation],
    "/motion-graphic": [textPerspectiveAnim, panelPinAnimation, jumpTextAnimation],
    "/agency-shop": [jumpTextAnimation, productPinAnimation],
    "/about-me": [charAnimation, initPrimaryMarqueeAnimation],
    "/about-us": [textPerspectiveAnim, initPrimaryMarqueeAnimation, initSecondaryMarqueeAnimation, AwardAnimation],
    "/service": [servicePanelPinAnim],
    "/service-2": [charAnimation],
    "/team": [tpHoverWebGL],
    "/career-details": [careerPinAnimation],
    "/portfolio-details-gallery": [initPrimaryMarqueeAnimation],
    "/blog": [tpHoverWebGL],

    //Dark page animation
    "/dark/creative-agency": [titleMiddleAnimetion, textPerspectiveAnim, servicePanelPinAnim, textScaleHoverAnim, heroScaleGallery],
    "/dark/digital-studio": [tpHoverWebGL, portfolioTextZoomAnim, textScaleHoverAnim, milScaleAnimation],
    "/dark/modern-agency": [charAnimation, heroMagneticAnimation, jumpTextAnimation, AboutThumbAnimation, AwardAnimation, tpHoverWebGL, textScaleHoverAnim],
    "/dark/personal-portfolio": [tpHoverWebGL, textScaleHoverAnim, charAnimation],
    "/dark/branding-studio": [textPerspectiveAnim, AwardAnimation],
    "/dark/motion-graphic": [textPerspectiveAnim, panelPinAnimation, jumpTextAnimation],
    "/dark/agency-shop": [jumpTextAnimation, productPinAnimation],
    "/dark/about-me": [charAnimation, initPrimaryMarqueeAnimation],
    "/dark/about-us": [textPerspectiveAnim, initPrimaryMarqueeAnimation, initSecondaryMarqueeAnimation, AwardAnimation],
    "/dark/service": [servicePanelPinAnim],
    "/dark/service-2": [charAnimation],
    "/dark/team": [tpHoverWebGL],
    "/dark/career-details": [careerPinAnimation],
    "/dark/portfolio-details-gallery": [initPrimaryMarqueeAnimation],
    "/dark/blog": [tpHoverWebGL],
}