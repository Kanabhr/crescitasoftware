"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollToPlugin);
  } catch {}
}

export const scrollToSection = (
  target: string | Element | number,
  duration: number = 1
) => {
  if (typeof window === "undefined") return;
  gsap.to(window, { duration, scrollTo: target, ease: "power2.out" });
};
