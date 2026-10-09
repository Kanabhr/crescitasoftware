//define interface for PageParams props
export interface PageParamsProps {
    params: Promise<{ id: number }>;
}
//define interface for app context props
export interface AppContextType {
    isPrimaryOffcanvasOpen: boolean;
    setIsPrimaryOffcanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
    togglePrimaryOffcanvas: () => void;
    isSecondaryOffcanvasOpen: boolean;
    setIsSecondaryOffcanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleSecondaryOffcanvas: () => void;
    toggleSearch: () => void;
    openSearch: boolean;
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMiniCart: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMiniCart: () => void;
    openMiniCart: boolean;
}
// Fetch the data based on the provided 'id' prop
export interface IdProps {
    id?: number;
};

//define interface for section bg color DT
export interface SectionBgColorPropsDT {
    sectionBackgroundColor?: string;
}
//define interface for prop type
export interface offcanvasIProps {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
    bgClassName?: string
};

//define interface for image DT
export interface ImageDT {
    id: number,
    imgSrc: string
}
//define interface for Testimonial DT
export interface TestimonialDt {
    id: number;
    platform: string;
    platformLogo: string;
    comment: string;
    name: string;
    designation: string;
};
//define interface for Faq DT
export interface FaqItemDt {
    id: string;
    question?: string;
    answer?: string;
    isOpen?: boolean;
    title?: string;
    content?: string;
    active?: boolean;
};
//define interface for Blog DT
export interface BlogItemDt {
    id: number;
    title: string;
    image: string;
    delay?: string;
    tag?: string
    fadeFrom?: "left" | "bottom" | "right";
    description?: string;
    year: number,
    date?: string;
    type?: string;
    videoId?: string;
    desc?: string;
    images?: string[]
};
//define interface for shop hero DT
export interface ShopHeroItemDT {
    id: number;
    image: string;
    title: React.ReactNode;
    description: string;
    href: string;
    col: string;
    extraClass?: string;
};
//define interface for shop footer menu DT
interface FooterLink {
    label: string;
    href: string;
};
export interface FooterSectionDT {
    id: number;
    title: string;
    delay: string;
    links: FooterLink[];
};
//about me testimonial item dt
export interface ShopTestimonialItem {
    id: number;
    comment: string;
    name: string;
    brand: string;
    industry: string;
};
//define interface for pricing plan DT
export interface PricingPlanDT {
    name: string;
    description: string;
    price: string;
    period: string;
    popular?: boolean;
    features: string[];
    buttonBorder: boolean;
};
//define interface for checkout Billing Form DT
export interface BillingFormDataDT {
    firstName: string;
    lastName: string;
    company?: string;
    country: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postcode: string;
    phone: string;
    email: string;
    createAccount: boolean;
    shipToDifferent: boolean;
    orderNotes?: string;
}
//define interface for blog comment DT
export interface BlogComment {
    id: string;
    author: string;
    avatar: string;
    date: string;
    content: string;
    replies?: BlogComment[];
}
