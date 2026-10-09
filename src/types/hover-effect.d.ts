declare module "hover-effect" {
    interface HoverEffectOptions {
        parent: HTMLElement;
        intensity?: number;
        speedIn?: number;
        speedOut?: number;
        easing?: string;
        hover?: boolean;
        image1: string;
        image2: string;
        displacementImage?: string;
        imagesRatio?: number;
    }

    export default class HoverEffect {
        constructor(options: HoverEffectOptions);
        next(): void;
        previous(): void;
    }
}
