import { MenuItem } from "@/types/menu-dt";

export const darkMenu: MenuItem[] = [
    {
        id:1,
        type: "mega",
        label: "Home",
        href: "/",
        columns: [
            {
                title: "Light Version",
                links: [
                    { label: "Creative Agency", href: "/" },
                    { label: "Digital Studio", href: "/digital-studio" },
                    { label: "Modern Agency", href: "/modern-agency" },
                    { label: "Personal Portfolio", href: "/personal-portfolio" },
                    { label: "Branding Studio", href: "/branding-studio" },
                    { label: "Motion Graphics", href: "/motion-graphic" },
                    { label: "Agency Shop", href: "/agency-shop" },
                ],
            },
            {
                title: "Dark Version",
                links: [
                    { label: "Creative Agency", href: "/dark" },
                    { label: "Digital Studio", href: "/dark/digital-studio" },
                    { label: "Modern Agency", href: "/dark/modern-agency" },
                    { label: "Personal Portfolio", href: "/dark/personal-portfolio" },
                    { label: "Branding Studio", href: "/dark/branding-studio" },
                    { label: "Motion Graphics", href: "/dark/motion-graphic" },
                    { label: "Agency Shop", href: "/dark/agency-shop" },
                ],
            },
            {
                title: "All Showcase",
                links: [
                    { label: "Mix Slicer", href: "/portfolio-mix-slicer" },
                    { label: "Creative Skew", href: "/portfolio-creative-skew-slider" },
                    { label: "Creative Thumb", href: "/portfolio-creative-thumb-slider" },
                    { label: "Revealing Slider", href: "/portfolio-revealing-slider" },
                ],
            },
        ],
    },
    {
        id: 2,
        type: "mega",
        label: "Page",
        href: "#",
        columns: [
            {
                title: "Special Pages",
                links: [
                    { label: "About Me", href: "/dark/about-me" },
                    { label: "About Us", href: "/dark/about-us" },
                    { label: "Service", href: "/dark/service" },
                    { label: "Service Two", href: "/dark/service-2" },
                    { label: "Service Details", href: "/dark/service-details" },
                    { label: "Faq", href: "/dark/faq" },
                ],
            },
            {
                title: "Special Pages",
                links: [
                    { label: "Team", href: "/dark/team" },
                    { label: "Team Details", href: "/dark/team-details" },
                    { label: "Pricing", href: "/dark/pricing" },
                    { label: "Login", href: "/dark/login" },
                    { label: "Register", href: "/dark/register" },
                    { label: "Forgot", href: "/dark/forgot" },
                ],
            },
            {
                title: "Special Pages",
                links: [
                    { label: "Career", href: "/dark/career" },
                    { label: "Career Details", href: "/dark/career-details" },
                    { label: "Application Form", href: "/dark/job-application-form" },
                    { label: "Profile", href: "/dark/profile" },
                    { label: "404 Page", href: "/dark/404" },
                ],
            },
        ],
    },
    {
        id: 3,
        type: "dropdown",
        label: "Project",
        href: "#",
        links: [
            { label: "Portfolio", href: "/dark/portfolio" },
            { label: "Portfolio Two", href: "/dark/portfolio-2" },
            { label: "Portfolio Three", href: "/dark/portfolio-3" },
            { label: "Portfolio Four", href: "/dark/portfolio-4" },
            { label: "Three Columns", href: "/dark/portfolio-col-3" },
            { label: "Four Columns", href: "/dark/portfolio-col-4" },
            { label: "Gallery", href: "/dark/portfolio-details-gallery" },
            { label: "Modern", href: "/dark/portfolio-details" },
        ],
    },
    {
        id: 4,
        type: "dropdown",
        label: "Shop",
        href: "#",
        links: [
            { label: "Shop", href: "/dark/shop" },
            { label: "Shop Details", href: "/dark/shop-details" },
            { label: "Cart", href: "/dark/cart" },
            { label: "Checkout", href: "/dark/checkout" },
            { label: "Wishlist", href: "/dark/wishlist" },
        ],
    },
    {
        id: 5,
        type: "dropdown",
        label: "News",
        href: "#",
        links: [
            { label: "Blog", href: "/dark/blog" },
            { label: "Blog List", href: "/dark/blog-list" },
            { label: "Blog Grid Sidebar", href: "/dark/blog-grid-with-sidebar" },
            { label: "Blog Standard", href: "/dark/blog-standard" },
            { label: "Blog Details", href: "/dark/blog-details" },
        ],
    },
    {
        id: 6,
        type: "dropdown",
        label: "Contact",
        href: "#",
        links: [
            { label: "Contact Me", href: "/dark/contact-me" },
            { label: "Contact Us", href: "/dark/contact-us" },
        ],
    },
];
