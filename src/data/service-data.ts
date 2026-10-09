import { AutomationIcon, BrainstormingIcon, PrintProofIcon } from "@/svg/ServiceIcons";
import { serviceDT } from "@/types/service-dt";

const servicesData: serviceDT[] = [
    {
        id: 1,
        title: "Branding",
        image: "/assets/img/service/service.jpg",
        description: "Creating a unique brand identity that stands out and connects with your audience.",
    },
    {
        id: 2,
        title: "Infodesign",
        image: "/assets/img/service/service-2.jpg",
        description: "Designing clear and engaging visual information for easy understanding and impact.",
    },
    {
        id: 3,
        title: "Digital",
        image: "/assets/img/service/service-3.jpg",
        description: "Delivering innovative digital solutions to grow your online presence effectively.",
    },
    {
        id: 4,
        title: "Editorial",
        image: "/assets/img/service/service-4.jpg",
        description: "Crafting compelling editorial layouts that communicate your story visually.",
    },
    {
        id: 5,
        title: "Raum",
        image: "/assets/img/service/service-4.jpg",
        description: "Designing immersive spatial experiences that blend aesthetics and functionality.",
    },
    {
        id: 6,
        title: "Champagne",
        image: "/assets/img/service/service-4.jpg",
        description: "Providing premium, elegant designs that reflect sophistication and style.",
    },
    //agency shop service data start
    {
        id: 7,
        title: "Brainstorming",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: BrainstormingIcon,
        delay: ".3",
    },
    {
        id: 8,
        title: "Automation",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: AutomationIcon,
        delay: ".5",
    },
    {
        id: 9,
        title: "Print Proof",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: PrintProofIcon,
        delay: ".7",
    },
    //agency shop service data end
    //service two service data start
    {
        id: 10,
        year: "2015 - 2018",
        title: "Web Design",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 11,
        year: "2019 - 2021",
        title: "Brand Identity",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 12,
        year: "2022 - 2024",
        title: "Motion Graphics",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 13,
        year: "2022 - 2024",
        title: "Creative Direction",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    //service two service data end
];

export default servicesData;