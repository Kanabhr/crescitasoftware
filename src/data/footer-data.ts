import { FooterSectionDT } from "@/types/custom-dt";

export const QUICK_LINKS = [
    "About",
    "Who we are",
    "Services",
    "Projects",
    "Blog",
    "Pricing",
    "Contact Us",
];

export const SOCIAL_LINKS = [
    "Facebook",
    "Twitter",
    "Dribbble",
    "Instagram",
    "YouTube",
];

export const OFFICE_LOCATIONS = [
    "New York",
    "France",
    "German",
    "Italy",
    "Mexico",
];

//shop footer section data
export const footerMenuData: FooterSectionDT[] = [
    {
        id: 1,
        title: "STORE",
        delay: ".3",
        links: [
            { label: "Home", href: "#" },
            { label: "About", href: "#" },
            { label: "Journal", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        id: 2,
        title: "SHOP",
        delay: ".5",
        links: [
            { label: "All", href: "#" },
            { label: "Lookbook", href: "#" },
            { label: "Collections", href: "#" },
            { label: "Featured", href: "#" },
        ],
    },
    {
        id: 3,
        title: "COLLECTIONS",
        delay: ".7",
        links: [
            { label: "Decors", href: "#" },
            { label: "Furnitures", href: "#" },
            { label: "Ceramic", href: "#" },
            { label: "Lamps", href: "#" },
        ],
    },
    {
        id: 4,
        title: "HELP",
        delay: ".9",
        links: [
            { label: "Contact", href: "#" },
            { label: "Login & Account", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Refund policy", href: "#" },
        ],
    },
];