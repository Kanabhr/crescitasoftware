import { portfolioDT } from "@/types/portfolio-dt";

const portfolioData: portfolioDT[] = [
    //Home Creative Agency Portfolio data start
    {
        id: 1,
        title: "Mirela Vienna",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio.jpg"
    },
    {
        id: 2,
        title: "Dorma Tokyo",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-2.jpg"
    },
    {
        id: 3,
        title: "Dorma Tokyo",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-3.jpg"
    },
    {
        id: 4,
        title: "Luneth Prague",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-4.jpg"
    },
    //Home Creative Agency Portfolio data end
    //Digital Studio Portfolio data start
    {
        id: 5,
        col: "col-xxl-3 col-xl-4 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item tp-hover-item mb-30",
        image: "/assets/img/portfolio/ca/portfolio.jpg",
        title: "Saudi Lime Green",
        year: "2025",
    },
    {
        id: 6,
        col: "col-xxl-4 col-xl-4 offset-xxl-5 offset-xl-4 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item mb-30 ca-portfolio-item-2 mt-110 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-2.jpg",
        title: "Digital Farming",
        year: "2025",
    },
    {
        id: 7,
        col: "col-xl-4 offset-xl-2 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item ca-portfolio-item-3 mb-30 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-3.jpg",
        title: "Acme Studio",
        year: "2025",
    },
    {
        id: 8,
        col: "col-xl-3 offset-xl-1 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item ca-portfolio-item-4 mt-110 mb-30 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-4.jpg",
        title: "Virtual Reality",
        year: "2025",
    },
    {
        id: 9,
        col: "col-xl-4 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item ca-portfolio-item-3 mb-30 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-5.jpg",
        title: "Smart Cities",
        year: "2025",
    },
    {
        id: 10,
        col: "col-xl-4 offset-xl-4 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item ca-portfolio-item-6 mb-30 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-6.jpg",
        title: "Saudi Lime Green",
        year: "2025",
    },
    {
        id: 11,
        col: "col-xxl-3 col-xl-4 offset-xxl-3 offset-xl-2 col-lg-6 col-md-6",
        itemClass: "ca-portfolio-item ca-portfolio-item-3 mb-30 tp-hover-item",
        image: "/assets/img/portfolio/ca/portfolio-7.jpg",
        title: "Cloud Computing",
        year: "2025",
    },
    //Digital Studio Portfolio data end
    {
        id: 12,
        title: "Reshape",
        image: "/assets/img/portfolio/mp/portfolio.jpg",
        subtitle: "Branding - product design"
    },
    {
        id: 13,
        title: "Designshop",
        image: "/assets/img/portfolio/mp/portfolio-2.jpg",
        subtitle: "product design"
    },
    {
        id: 14,
        title: "NeoMarket",
        image: "/assets/img/portfolio/mp/portfolio-3.jpg",
        subtitle: "Branding - product design"
    },
    {
        id: 15,
        title: "LocalArt",
        image: "/assets/img/portfolio/mp/portfolio-4.jpg",
        subtitle: "product design",
    },
    {
        id: 16,
        title: "Storefront",
        image: "/assets/img/portfolio/mp/portfolio-5.jpg",
        subtitle: "Branding - product design",
    },
    //personal portfolio data start
    {
        id: 17,
        image: "/assets/img/portfolio/pp/portfolio.jpg",
        title: "Design Build",
        category: "Photography",
        year: "2024",
        bgClass: "pp-porfolio-bg-1",
    },
    {
        id: 18,
        image: "/assets/img/portfolio/pp/portfolio-2.jpg",
        title: "Website Design",
        category: "Website Design",
        year: "2024",
        bgClass: "pp-porfolio-bg-2",
    },
    {
        id: 19,
        image: "/assets/img/portfolio/pp/portfolio-3.jpg",
        title: "Smart Digital",
        category: "Web branding",
        year: "2024",
        bgClass: "pp-porfolio-bg-3",
    },
    {
        id: 20,
        image: "/assets/img/portfolio/pp/portfolio-4.jpg",
        title: "User Flow",
        category: "Photography",
        year: "2024",
        bgClass: "pp-porfolio-bg-4",
    },
    //personal portfolio data end
    {
        id: 21,
        col: "col-12",
        itemClass: "cs-portfolio-item anim-zoomin-wrap mb-50",
        image: "/assets/img/portfolio/cs/portfolio.jpg",
        title: "Storefront",
        tags: ["Branding", "Web Design", "Web development"],
    },
    {
        id: 22,
        col: "col-xl-5",
        itemClass: "cs-portfolio-item cs-portfolio-item-2 anim-zoomin-wrap mb-50",
        image: "/assets/img/portfolio/cs/portfolio-2.jpg",
        title: "Shophoria",
        tags: ["Web Design", "Web development"],
    },
    {
        id: 23,
        col: "col-xl-7",
        itemClass: "cs-portfolio-item cs-portfolio-item-3 anim-zoomin-wrap mb-50",
        image: "/assets/img/portfolio/cs/portfolio-3.jpg",
        title: "Marketly",
        tags: ["Web Design", "Web development"],
    },
    {
        id: 24,
        col: "col-12",
        itemClass: "cs-portfolio-item anim-zoomin-wrap mb-50",
        image: "/assets/img/portfolio/cs/portfolio-4.jpg",
        title: "Shopline",
        tags: ["Branding", "Web Design", "Web development"],
    },
    //Motion graphic portfolio data start
    {
        id: 25,
        title: "Epic Strategy App",
        image: "/assets/img/portfolio/mg/portfolio.jpg",
        tags: ["Branding", "Web Design", "Web development"],
    },
    {
        id: 26,
        title: "Polygona Arct Design",
        image: "/assets/img/portfolio/mg/portfolio-2.jpg",
        tags: ["Branding", "Web Design", "Web development"],
    },
    {
        id: 27,
        title: "Built For Success",
        image: "/assets/img/portfolio/mg/portfolio-3.jpg",
        tags: ["Branding", "Web Design", "Web development"],
    },
    //Motion graphic portfolio data end
    //portfolio mix slicer data start
    {
        id: 28,
        image: "/assets/img/portfolio/mix/thumb.jpg",
        tags: ["Greetings", "Traveler"],
        title: "Smart platform",
    },
    {
        id: 29,
        image: "/assets/img/portfolio/mix/thumb-2.jpg",
        tags: ["Interactive Mind"],
        title: "World’s Relays",
    },
    {
        id: 30,
        image: "/assets/img/portfolio/mix/thumb-3.jpg",
        tags: ["Greetings", "Traveler"],
        title: "Bright Captive",
    },
    {
        id: 31,
        image: "/assets/img/portfolio/mix/thumb-4.jpg",
        tags: ["UI", "Web Design"],
        title: "Top Paddock",
    },
    {
        id: 32,
        image: "/assets/img/portfolio/mix/thumb-5.jpg",
        tags: ["Digital platform"],
        title: "Royal Benz",
    },
    //portfolio mix slicer data end
    //portfolio skew slider data start
    {
        id: 33,
        image: "/assets/img/portfolio/skew/skew-1.jpg",
        title: 'Digital platform',
        tags: ['simple', 'logistics'],
    },
    {
        id: 34,
        image: "/assets/img/portfolio/skew/skew-2.jpg",
        title: 'Digital platform',
        tags: ['Smart', 'platform']
    },
    {
        id: 35,
        image: "/assets/img/portfolio/skew/skew-3.jpg",
        title: 'Digital platform',
        tags: ['Royal', 'Benz']
    },
    {
        id: 36,
        image: "/assets/img/portfolio/skew/skew-4.jpg",
        title: 'Digital platform',
        tags: ['World\'s', 'Relays']
    },
    {
        id: 37,
        image: "/assets/img/portfolio/skew/skew-5.jpg",
        title: 'Digital platform',
        tags: ['Bright', 'Captive']
    },
    {
        id: 38,
        image: "/assets/img/portfolio/skew/skew-6.jpg",
        title: 'Interactive Mind',
        tags: ['Bright', 'Mind']
    },
    //portfolio skew slider data end
    //portflio revealing slider data start
    {
        id: 39,
        image: "assets/img/portfolio/revealing/webgl-1.jpg",
        subtitle: "Digital platform",
        title: "Royal Benz",
    },
    {
        id: 40,
        image: "assets/img/portfolio/revealing/webgl-2.jpg",
        subtitle: "Greetings, Traveler!",
        title: "Smart platform",
    },
    {
        id: 41,
        image: "assets/img/portfolio/revealing/webgl-3.jpg",
        subtitle: "Interactive Mind",
        title: "World's Relays",
    },
    {
        id: 42,
        image: "assets/img/portfolio/revealing/webgl-4.jpg",
        subtitle: "Greetings, Traveler!",
        title: "Bright Captive",
    },
    {
        id: 43,
        image: "assets/img/portfolio/revealing/webgl-5.jpg",
        subtitle: "[ UI, Web Design ]",
        title: "Top Paddock",
    },
    //portflio revealing slider data end
    //portfolio page main portfolio data start
    {
        id: 44,
        title: "Times One Hundred",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        filterCategory: ["design", "web"],
    },
    {
        id: 45,
        title: "Built For Success",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio-2.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        category: "motion",
        filterCategory: ["motion", "ai"],
    },
    {
        id: 46,
        title: "Trust In Time",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio-3.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        filterCategory: ["design", "ai"],
    },
    {
        id: 47,
        title: "Future In Focus",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio-4.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        filterCategory: ["motion", "web"],
    },
    {
        id: 48,
        title: "Light The Way",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio-5.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        filterCategory: ["ai", "web"],
    },
    {
        id: 49,
        title: "Path To Victory",
        image: "/assets/img/portfolio/portfolio-col-2/portfolio-6.jpg",
        tags: ["Branding", "Web Design", "Web development"],
        filterCategory: ["design", "motion"],
    },
    //portfolio page main portfolio data end
    //portfolio page two main portfolo data start
    {
        id: 50,
        title: "Times One Hundred",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["design", "web"],
    },
    {
        id: 51,
        title: "Built For Success",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-2.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["motion", "ai"],
    },
    {
        id: 52,
        title: "Trust In Time",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-3.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["design", "ai"],
    },
    {
        id: 53,
        title: "Future In Focus",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-4.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["motion", "web"],
    },
    {
        id: 54,
        title: "Light The Way",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-5.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["ai", "web"],
    },
    {
        id: 55,
        title: "Path To Victory",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-6.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["design", "motion"],
    },
    {
        id: 56,
        title: "Future In Focus",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-7.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["web", "ai"],
    },
    {
        id: 57,
        title: "Stronger Every Day",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-8.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["ai", "design"],
    },
    {
        id: 58,
        title: "Built For Success",
        image: "/assets/img/portfolio/portfolio-col-3/portfolio-2.jpg",
        tags: ["Branding", "Web Design"],
        filterCategory: ["motion", "ai"],
    },
    //portfolio page two main portfolo data end
    //portfolio page three main portfolo data start
    {
        id: 59,
        title: "Shophoria",
        image: "/assets/img/portfolio/cs/inner/portfolio.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["design", "web"],
    },
    {
        id: 60,
        title: "Storefront",
        image: "/assets/img/portfolio/cs/inner/portfolio-2.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["motion", "ai"],
    },
    {
        id: 61,
        title: "Marketly",
        image: "/assets/img/portfolio/cs/inner/portfolio-3.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["design", "ai"],
    },
    {
        id: 62,
        title: "Shopline",
        image: "/assets/img/portfolio/cs/inner/portfolio-4.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["motion", "web"],
    },
    {
        id: 63,
        title: "Shophoria",
        image: "/assets/img/portfolio/cs/inner/portfolio-5.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["ai", "web"],
    },
    {
        id: 64,
        title: "Storefront",
        image: "/assets/img/portfolio/cs/inner/portfolio-6.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["design", "motion"],
    },
    {
        id: 65,
        title: "DropMarket",
        image: "/assets/img/portfolio/cs/inner/portfolio-7.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["web", "ai"],
    },
    {
        id: 66,
        title: "NeoMarket",
        image: "/assets/img/portfolio/cs/inner/portfolio-8.jpg",
        tags: ["Web Design", "Development"],
        filterCategory: ["ai", "design"],
    },
    //portfolio page three main portfolo data end
    //Portfolio page four data start
    {
        id: 67,
        title: "Mirela Vienna",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-col-4/portfolio.jpg",
        filterCategory: ["design", "web", "ai"],
    },
    {
        id: 68,
        title: "Dorma Tokyo",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-col-4/portfolio-2.jpg",
        filterCategory: ["motion", "ai", "web"],
    },
    {
        id: 69,
        title: "Dorma Tokyo",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-col-4/portfolio-3.jpg",
        filterCategory: ["design", "web", "ai"],
    },
    {
        id: 70,
        title: "Luneth Prague",
        subtitle: "Branding 2019",
        image: "/assets/img/portfolio/portfolio-col-4/portfolio-4.jpg",
        filterCategory: ["ai", "web", "design", "motion"],
    },
    //Portfolio page four data end
    //Portfolio Col 4 portfolio data start
    {
        id: 71,
        title: "Reshape",
        image: "/assets/img/portfolio/mp/portfolio.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["motion", "web", "ai"],
    },
    {
        id: 72,
        title: "Designshop",
        image: "/assets/img/portfolio/mp/portfolio-2.jpg",
        subtitle: "product design",
        filterCategory: ["motion", "ai", "design"],
    },
    {
        id: 73,
        title: "NeoMarket",
        image: "/assets/img/portfolio/mp/portfolio-3.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["ai", "design", "motion"],
    },
    {
        id: 74,
        title: "Storefront",
        image: "/assets/img/portfolio/mp/portfolio-4.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["design", "motion", "ai"],
    },
    {
        id: 75,
        title: "DropMarket",
        image: "/assets/img/portfolio/mp/portfolio-5.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["design", "web", "motion"],
    },
    {
        id: 76,
        title: "Falcon Route",
        image: "/assets/img/portfolio/mp/portfolio-6.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["design", "motion", "ai", "web"],
    },
    {
        id: 77,
        title: "Cobra Path",
        image: "/assets/img/portfolio/mp/portfolio-7.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["motion", "ai", "web", "motion"],
    },
    {
        id: 78,
        title: "Wolf Orbit",
        image: "/assets/img/portfolio/mp/portfolio-8.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["ai", "motion", "web", "design"],
    },
    {
        id: 79,
        title: "Reshape",
        image: "/assets/img/portfolio/mp/portfolio-9.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["design", "web", "ai", "motion"],
    },
    {
        id: 80,
        title: "Marketly",
        image: "/assets/img/portfolio/mp/portfolio-10.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["web", "ai", "design", "motion"],
    },
    {
        id: 81,
        title: "Reshape",
        image: "/assets/img/portfolio/mp/portfolio-11.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["ai", "motion", "design", "web"],
    },
    {
        id: 82,
        title: "Storefront",
        image: "/assets/img/portfolio/mp/portfolio-12.jpg",
        subtitle: "Branding - product design",
        filterCategory: ["design", "ai", "design", "web"],
    },
    //Portfolio Col 4 portfolio data end
];
export default portfolioData;