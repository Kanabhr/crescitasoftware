interface PortfolioItem {
    id: number;
    image: string;
    smallImage: string;
    name: string;
    link: string;
}

export const portfolioThumbSliderItems: PortfolioItem[] = [
    {
        id: 1,
        image: "/assets/img/portfolio/creative/cr-slider-6.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-6.jpg",
        name: 'Jon Piterson',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 2,
        image: "/assets/img/portfolio/creative/cr-slider-1.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-1.jpg",
        name: 'Jean Gomez',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 3,
        image: "/assets/img/portfolio/creative/cr-slider-8.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-8.jpg",
        name: 'Katia Ivanova',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 4,
        image: "/assets/img/portfolio/creative/cr-slider-9.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-9.jpg",
        name: 'Adaora Musa',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 5,
        image: "/assets/img/portfolio/creative/cr-slider-10.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-10.jpg",
        name: 'Mia Tobez',
        link: '/portfolio-details-image-comparison'
    },
    {
        id: 6,
        image: "/assets/img/portfolio/creative/cr-slider-1.jpg",
        smallImage: "/assets/img/portfolio/creative/cr-slider-1.jpg",
        name: 'Anni Marire',
        link: '/portfolio-details-image-comparison'
    }
];

export const filterItems = [
    { key: "all", label: "All" },
    { key: "design", label: "Design" },
    { key: "motion", label: "Motion" },
    { key: "web", label: "Web dev" },
    { key: "ai", label: "AI Tools" },
];