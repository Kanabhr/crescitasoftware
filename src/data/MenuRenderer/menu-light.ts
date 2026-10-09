import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
    {
        id: 1,
        type: "mega",
        label: "Home",
        href: "#",
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
                    { label: "About Me", href: "/about-me" },
                    { label: "About Us", href: "/about-us" },
                    { label: "Service", href: "/service" },
                    { label: "Service Two", href: "/service-2" },
                    { label: "Service Details", href: "/service-details" },
                    { label: "Faq", href: "/faq" },
                ],
            },
            {
                title: "Special Pages",
                links: [
                    { label: "Team", href: "/team" },
                    { label: "Team Details", href: "/team-details" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "Login", href: "/login" },
                    { label: "Register", href: "/register" },
                    { label: "Forgot", href: "/forgot" },
                ],
            },
            {
                title: "Special Pages",
                links: [
                    { label: "Career", href: "/career" },
                    { label: "Career Details", href: "/career-details" },
                    { label: "Application Form", href: "/job-application-form" },
                    { label: "Profile", href: "/profile" },
                    { label: "404 Page", href: "/404" },
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
            { label: "Portfolio", href: "/portfolio" },
            { label: "Portfolio Two", href: "/portfolio-2" },
            { label: "Portfolio Three", href: "/portfolio-3" },
            { label: "Portfolio Four", href: "/portfolio-4" },
            { label: "Three Columns", href: "/portfolio-col-3" },
            { label: "Four Columns", href: "/portfolio-col-4" },
            { label: "Gallery", href: "/portfolio-details-gallery" },
            { label: "Modern", href: "/portfolio-details" },
        ],
    },
    {
        id: 4,
        type: "dropdown",
        label: "Shop",
        href: "#",
        links: [
            { label: "Shop", href: "/shop" },
            { label: "Shop Details", href: "/shop-details" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout", href: "/checkout" },
            { label: "Wishlist", href: "/wishlist" },
        ],
    },

    {
        id: 5,
        type: "dropdown",
        label: "News",
        href: "#",
        links: [
            { label: "Blog", href: "/blog" },
            { label: "Blog List", href: "/blog-list" },
            { label: "Blog Grid Sidebar", href: "/blog-grid-with-sidebar" },
            { label: "Blog Standard", href: "/blog-standard" },
            { label: "Blog Details", href: "/blog-details" },
        ],
    },

    {
        id: 6,
        type: "dropdown",
        label: "Contact",
        href: "#",
        links: [
            { label: "Contact Me", href: "/contact-me" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
];
