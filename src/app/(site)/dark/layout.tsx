"use client";

import { useEffect } from "react";

export default function DarkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // add class to html when entering dark page
        document.documentElement.classList.add("cunnet-dark");

        // class remove when exiting dark page
        return () => {
            document.documentElement.classList.remove("cunnet-dark");
        };
    }, []);

    return <>{children}</>;
}
