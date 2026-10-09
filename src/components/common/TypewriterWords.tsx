"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
};

const TypewriterWords: React.FC<Props> = ({
    words,
    typingSpeed = 80,
    deletingSpeed = 40,
    delayBetweenWords = 1200,
}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: NodeJS.Timeout | undefined;

        if (!isDeleting && letterIndex < currentWord.length) {
            timeout = setTimeout(
                () => setLetterIndex((prev) => prev + 1),
                typingSpeed
            );
        }
        else if (isDeleting && letterIndex > 0) {
            timeout = setTimeout(
                () => setLetterIndex((prev) => prev - 1),
                deletingSpeed
            );
        }
        else if (!isDeleting && letterIndex === currentWord.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayBetweenWords);
        }
        else if (isDeleting && letterIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 0);
        }

        return () => timeout && clearTimeout(timeout);
    }, [
        letterIndex,
        isDeleting,
        wordIndex,
        words,
        typingSpeed,
        deletingSpeed,
        delayBetweenWords,
    ]);

    return (
        <span className="cd-words-wrapper type">
            <motion.b className="is-visible">
                {words[wordIndex].slice(0, letterIndex)}
            </motion.b>
        </span>
    );
};

export default TypewriterWords;
