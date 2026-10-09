// src/plugin/swiper-gl.ts
import type { Swiper as SwiperClass } from "swiper";

const SwiperGL = {
    name: "effect-gl",

    params: {
        glEffect: {},
    },

    create() {
        // init once
    },

    on: {
        init(swiper: SwiperClass) {
            if (swiper.params.effect !== "gl") return;
        },
    },
};

export default SwiperGL;
