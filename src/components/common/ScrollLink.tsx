"use client";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";

type ScrollLinkProps = {
    target: string;
    children: React.ReactNode;
    className?: string;
};

export const ScrollLink = ({ target, children, className = "tp-ff-sequel-semi-bold text-uppercase tp-smooth" }: ScrollLinkProps) => (
    <Link href="#"
        className={className}
        onClick={(e) => {
            e.preventDefault();
            scrollToSection(target);
        }}
    >
        {children}
    </Link>
);