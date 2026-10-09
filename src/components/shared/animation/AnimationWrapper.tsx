"use client";

import { fadeAnimation, imgZoomInAnimation, projectTitleAnimation, revealTextAnim, scrollScaleImgAnimation } from "@/hooks/useGsapAnimation";
import { animationConfig } from "@/config/animationConfig";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!pathname) return;

      //same animation for all pages
      fadeAnimation();
      revealTextAnim();
      projectTitleAnimation();
      imgZoomInAnimation();
      scrollScaleImgAnimation();

      //Route-based animations
      Object.entries(animationConfig).forEach(([route, animations]) => {
        if (pathname === route || pathname.startsWith(`${route}/`)) {
          animations.forEach((fn) => fn());
        }
      });
    },
    { scope: wrapperRef, dependencies: [pathname] }
  );

  return <div ref={wrapperRef}>{children}</div>;
};

export default AnimationWrapper;
