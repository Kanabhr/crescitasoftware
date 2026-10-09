import { SwiperOptions } from "swiper/types";

// --- tp-causes-slider-active ---
export const causes_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 15,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};
// --- ca-brand-slider-active ---
export const brand_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 225,
    speed: 4000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    breakpoints: {
        '1200': { spaceBetween: 225 },
        '992': { spaceBetween: 125 },
        '768': { spaceBetween: 70 },
        '576': { spaceBetween: 70 },
        '0': { spaceBetween: 70 },
    },
};
// --- testmonial-slider-active ---
export const testmonial_slider_params: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    spaceBetween: 0,
    speed: 1000,
    pagination: {
        el: ".ca-testimonial-pagination",
        type: "progressbar",
    },
    // Navigation arrows
    navigation: {
        prevEl: '.ca-testimonial-arrow-prev',
        nextEl: '.ca-testimonial-arrow-next',
    },
};
// --- portfolio-slider-active ---
export const portfolio_slider_params: SwiperOptions = {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1200': { slidesPerView: 4 },
        '992': { slidesPerView: 3 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    navigation: {
        prevEl: '.mp-portfolio-arrow-prev',
        nextEl: '.mp-portfolio-arrow-next',
    },
}
export const portfolio_slider_two_params: SwiperOptions = {
    slidesPerView: 4,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1200': { slidesPerView: 4 },
        '992': { slidesPerView: 3 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    navigation: {
        prevEl: '.mp-portfolio-arrow-prev-2',
        nextEl: '.mp-portfolio-arrow-next-2',
    },
}
// pp-slide-active
export const personal_portfolio_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
//branding studio brand slider active
export const brand_slider_two_params: SwiperOptions = {
    loop: true,
    loopAdditionalSlides: 10,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    allowTouchMove: false,
    spaceBetween: 150,
    speed: 4000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        '1200': { spaceBetween: 150 },
        '992': { spaceBetween: 125 },
        '768': { spaceBetween: 70 },
        '576': { spaceBetween: 70 },
        '0': { spaceBetween: 70 },
    },
}
// pp-slide-active
export const text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 50,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
// shop header top slider active
export const shop_header_slider_params: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    speed: 900,
    navigation: {
        nextEl: ".shop-header-next",
        prevEl: ".shop-header-prev",
    },
}
// shop agency testimonial slider active
export const shop_testimonial_slider_params: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    spaceBetween: 0,
    speed: 1000,
    // Navigation arrows
    navigation: {
        prevEl: '.shop-testimonial-arrow-prev',
        nextEl: '.shop-testimonial-arrow-next',
    },
}
// about-me-slider active
export const about_me_slider_params: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    autoplay: false,
    spaceBetween: 30,
    breakpoints: {
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};
// about-me-text slider active
export const about_me_text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 20,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};
// about-team-slider-active
export const about_us_team_slider_params: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    autoplay: false,
    spaceBetween: 30,
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 3 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};

// 16. career-slider
export const career_slider_params: SwiperOptions = {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 30,
    speed: 5000,
    autoplay: {
        delay: 1,
    },
    breakpoints: {
        '1400': { slidesPerView: 5 },
        '1200': { slidesPerView: 4 },
        '992': { slidesPerView: 4 },
        '768': { slidesPerView: 3 },
        '576': { slidesPerView: 2 },
        '0': { slidesPerView: 1.5 },
    },
};
// tp-pd-2-active
export const gallery_slider_params: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
        el: ".tp-pd-2-dot",
        clickable: true,
    },
    breakpoints: {
        '1600': { slidesPerView: 3 },
        '1400': { slidesPerView: 3 },
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};
// postbox-slider
export const postbox_slider_params: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
        '1400': {
            slidesPerView: 1,
        }
    },
    // Navigation arrows
    navigation: {
        prevEl: '.postbox-arrow-prev',
        nextEl: '.postbox-arrow-next',
    },

};