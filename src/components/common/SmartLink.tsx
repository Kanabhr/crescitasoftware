"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function SmartLink({ className, href, children, onClick }: Props) {
    const pathname = usePathname() || "";
    const isDark = pathname.startsWith("/dark");

    if (href.startsWith("http")) {
        return <Link href={href}>{children}</Link>;
    }

    const cleanHref = href.startsWith("/") ? href : `/${href}`;

    const finalHref = isDark
        ? cleanHref.startsWith("/dark")
            ? cleanHref
            : `/dark${cleanHref}`
        : cleanHref.replace(/^\/dark/, "");

    return <Link className={className} href={finalHref} onClick={onClick}>{children}</Link>;
}
