"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeroParallaxImage = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 40;
            mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 40;
        };

        window.addEventListener("mousemove", onMouseMove);

        const loop = () => {
            // smooth interpolation (lerp)
            pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

            gsap.set(el, {
                x: pos.current.x,
                y: pos.current.y,
                force3D: true,
            });

            requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="pp-hero-bg">
            <div
                ref={wrapperRef}
                className="layer"
                style={{
                    willChange: "transform",
                }}
            >
                <Image
                    src="/assets/img/hero/pp/thumb.png"
                    alt="Hero Thumb"
                    width={972}
                    height={1200}
                    priority
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default HeroParallaxImage;
