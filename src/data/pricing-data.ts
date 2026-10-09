import { PricingPlanDT } from "@/types/custom-dt";

export const monthlyPlans: PricingPlanDT[] = [
    {
        name: "Basic",
        description: "Ideal for small businesses of startups.",
        price: "$00",
        period: "Free",
        buttonBorder: false,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "Social Media Setup",
        ],
    },
    {
        name: "Standard",
        description: "Ideal for small businesses of startups.",
        price: "$55",
        period: "/monthly",
        popular: true,
        buttonBorder: true,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "On-Demand Design Revisions",
        ],
    },
    {
        name: "Advanced",
        description: "Ideal for small businesses of startups.",
        price: "$79",
        period: "/monthly",
        buttonBorder: false,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "On-Demand Design Revisions",
        ],
    },
];

export const yearlyPlans: PricingPlanDT[] = [
    {
        name: "Basic",
        description: "Ideal for small businesses of startups.",
        price: "$00",
        period: "/Free",
        buttonBorder: false,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "Social Media Setup",
        ],
    },
    {
        name: "Standard",
        description: "Ideal for small businesses of startups.",
        price: "$95",
        period: "/Yearly",
        popular: true,
        buttonBorder: true,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "On-Demand Design Revisions",
        ],
    },
    {
        name: "Advanced",
        description: "Ideal for small businesses of startups.",
        price: "$199",
        period: "/Yearly",
        buttonBorder: false,
        features: [
            "Basic Branding Package",
            "Custom 5-Page Website",
            "SEO Optimization Basics",
            "Full Brand Strategy & Design",
            "On-Demand Design Revisions",
        ],
    },
];