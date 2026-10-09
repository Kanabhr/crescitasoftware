// types/animation.types.ts
export type AnimationType = 'clip' | 'letters' | 'loading-bar' | 'type' | 'rotate-2';

export interface AnimatedHeadlineProps {
    words: string[];
    animationType?: AnimationType;
    className?: string;
    delay?: number;
    onWordChange?: (currentWord: string, index: number) => void;
}

export interface UseTextAnimationReturn {
    currentWord: string;
    currentIndex: number;
    isVisible: boolean;
    isLoading: boolean;
    wrapperWidth: number;
    startAnimation: () => void;
    stopAnimation: () => void;
}

export interface LetterAnimationProps {
    word: string;
    isVisible: boolean;
    className?: string;
}