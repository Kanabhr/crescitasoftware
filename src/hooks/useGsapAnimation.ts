"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import HoverEffect from "hover-effect";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// tp-title-middle-animetion
export const titleMiddleAnimetion = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    const title = document.querySelector(".tp-title-middle-animetion");
    if (!title) return;

    const letters = title.textContent.split("");
    title.textContent = "";
    letters.forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      title.appendChild(span);
    });

    // Scroll Animation
    gsap.to(".tp-title-middle-animetion span", {
      y: -220,
      stagger: {
        each: 0.04,
        from: "center"
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".tp-title-middle-wrap",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  });
}

//fade animation
export const fadeAnimation = (): void => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.utils.toArray<HTMLElement>(".tp_fade_anim").forEach((item) => {
      const offset = Number(item.dataset.fadeOffset ?? 40);
      const duration = Number(item.dataset.duration ?? 0.75);
      const direction = item.dataset.fadeFrom ?? "bottom";
      const onScroll = (item.dataset.onScroll ?? "1") === "1";
      const delay = parseFloat(item.dataset.delay ?? "0.15");
      const ease = item.dataset.ease ?? "power2.out";

      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease,
        overwrite: "auto",
        x:
          direction === "left"
            ? -offset
            : direction === "right"
              ? offset
              : 0,
        y:
          direction === "top"
            ? -offset
            : direction === "bottom"
              ? offset
              : 0,
      };

      if (onScroll) {
        vars.scrollTrigger = {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true, // even safer
        };
      }

      gsap.from(item, vars);
    });
  });
};


//  tp-text-perspective
export const textPerspectiveAnim = () => {
  gsap.utils.toArray<HTMLElement>(".tp-text-perspective").forEach(splitTextLine => {
    const delay_value = parseFloat(splitTextLine.getAttribute("data-delay") || "0.5");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 85%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1
    });
  })
};

// Service Panel Pin Section Animation
export const servicePanelPinAnim = () => {
  const tl = gsap.timeline();
  const pr = gsap.matchMedia();
  pr.add("(min-width: 1199px)", () => {
    const panels = document.querySelectorAll('.tp-panel-pin')
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 10%',
          end: "bottom 80%",
          endTrigger: '.tp-panel-pin-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  })
}

//Text Scale Animation
export const textScaleHoverAnim = () => {
  const headings = document.querySelectorAll<HTMLElement>(".text-scale-anim");

  headings.forEach(heading => {
    const nodes: (Node | HTMLElement)[] = [];

    heading.childNodes.forEach(node => {
      // text node split
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent?.split(" ") || [];

        words.forEach((word, wIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "tp-word-span";

          word.split("").forEach(letter => {
            const letterSpan = document.createElement("span");
            letterSpan.className = "tp-letter-span";
            letterSpan.textContent = letter;
            wordSpan.appendChild(letterSpan);
          });

          nodes.push(wordSpan);

          if (wIndex < words.length - 1) {
            nodes.push(document.createTextNode(" "));
          }
        });
      }

      // keep element nodes
      if (node.nodeType === Node.ELEMENT_NODE) {
        nodes.push(node.cloneNode(true));
      }
    });

    heading.innerHTML = "";
    nodes.forEach(n => heading.appendChild(n));

    const letters = Array.from(
      heading.querySelectorAll<HTMLElement>(".tp-letter-span")
    );

    letters.forEach((letter, index) => {
      letter.addEventListener("mouseenter", () => {
        // center
        gsap.to(letter, {
          scaleY: 1.6,
          y: "-24%",
          duration: 0.4,
          ease: "sine.out"
        });

        // left
        const prev = letters[index - 1];
        if (prev) {
          gsap.to(prev, {
            scaleY: 1.3,
            y: "-12%",
            duration: 0.4,
            ease: "sine.out"
          });
        }

        // right
        const next = letters[index + 1];
        if (next) {
          gsap.to(next, {
            scaleY: 1.3,
            y: "-12%",
            duration: 0.4,
            ease: "sine.out"
          });
        }
      });

      letter.addEventListener("mouseleave", () => {
        const reset = (el?: HTMLElement) => {
          if (!el) return;
          gsap.to(el, {
            scaleY: 1,
            y: "0%",
            duration: 0.4,
            ease: "sine.out"
          });
        };

        reset(letter);
        reset(letters[index - 1]);
        reset(letters[index + 1]);
      });
    });
  });
};

// reveal-text animation
export const revealTextAnim = () => {
  const elements = gsap.utils.toArray<HTMLElement>(".reveal-text");

  elements.forEach((el) => {
    const split = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });

    gsap.set(split.chars, { opacity: 0.3, x: -7 });

    gsap.to(split.chars, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.2,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: false,
      },
    });
  });
};

//panel pin section animation
export const panelPinAnimation = () => {
  const pr = gsap.matchMedia();
  pr.add("(min-width: 1199px)", () => {
    const tl = gsap.timeline();
    const panels = document.querySelectorAll('.mg-portfolio-pin')
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 10%',
          end: "bottom 70%",
          endTrigger: '.mg-portfolio-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
};

// webgl images hover animation

type HoverWrapper = HTMLElement & {
  _hoverInitialized?: boolean;
};

export const tpHoverWebGL = (): void => {
  const wrappers = document.querySelectorAll<HTMLElement>(".tp-hover-img");
  if (!wrappers.length) return;

  wrappers.forEach((el) => {
    const wrapper = el as HoverWrapper;

    if (wrapper._hoverInitialized) return;
    wrapper._hoverInitialized = true;

    const img = wrapper.querySelector<HTMLImageElement>("img");
    if (!img) return;

    const init = (): void => {
      if (!img.src) return;

      const displacement =
        wrapper.dataset.displacement || "/assets/img/imghover/fluid.jpg";

      const effect = new HoverEffect({
        parent: wrapper,
        intensity: wrapper.dataset.intensity
          ? parseFloat(wrapper.dataset.intensity)
          : 0.2,
        speedIn: wrapper.dataset.speedin
          ? parseFloat(wrapper.dataset.speedin)
          : 1,
        speedOut: wrapper.dataset.speedout
          ? parseFloat(wrapper.dataset.speedout)
          : 1,
        easing: wrapper.dataset.easing || "power2.out",
        hover: false,
        image1: img.src,
        image2: img.src,
        displacementImage: displacement,
        imagesRatio:
          img.naturalWidth && img.naturalHeight
            ? img.naturalHeight / img.naturalWidth
            : 1,
      });

      const parentItem = wrapper.closest<HTMLElement>(".tp-hover-item");
      if (!parentItem) return;

      parentItem.addEventListener("mouseenter", () => effect.next());
      parentItem.addEventListener("mouseleave", () => effect.previous());
    };

    if (img.complete) {
      init();
    } else {
      img.addEventListener("load", init, { once: true });
    }
  });
};


// Portfolio Text Zoom Animation
export const portfolioTextZoomAnim = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    const portfolioArea = document.querySelector<HTMLElement>(".portfolio-area");
    const portfolioText = document.querySelector<HTMLElement>(".portfolio-text");

    if (!portfolioArea || !portfolioText) return;

    // Timeline for zoom animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioArea,
        start: "top center-=200",
        end: "bottom bottom+=10",
        pin: portfolioText,
        pinSpacing: false,
        scrub: 1,
        markers: false,
      },
    });

    timeline.to(portfolioText, { scale: 1.2, duration: 1 });
    timeline.to(portfolioText, { scale: 1.2, duration: 1 });
    timeline.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

    // Opacity scroll animation
    gsap.to(portfolioText, {
      scrollTrigger: {
        trigger: portfolioArea,
        start: "top center-=100",
        end: "bottom bottom+=10",
        scrub: 1,
      },
      opacity: 0,
    });
  });
};

// character animation
export const charAnimation = () => {
  const char_come = gsap.utils.toArray<HTMLElement>(".tp-char-animation");
  char_come.forEach(splitTextLine => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
    gsap.set(splitTextLine, { perspective: 300 });
    itemSplitted.split({ type: "chars, words" })
    tl.from(itemSplitted.chars,
      {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05
      });
  });
}
// mp-hero-magnetic-animation
export const heroMagneticAnimation = (): void => {
  const container = document.querySelector<HTMLElement>(".mp-hero-magnetic");
  if (!container) return;

  const items = document.querySelectorAll<HTMLElement>(".mp-hero-magnetic-item");
  if (!items.length) return;

  let t = 0, a = 0; // target
  let n = 0, o = 0; // previous
  let i = 0, s = 0; // velocity

  const updateMouse = (x: number, y: number): void => {
    const rect = container.getBoundingClientRect();
    const offsetX = rect.left + rect.width / 50;
    const offsetY = rect.top + rect.height / 50;

    t = x - offsetX;
    a = y - offsetY;
  };

  container.addEventListener("mousemove", (e: MouseEvent) => {
    updateMouse(e.clientX, e.clientY);
  });

  container.addEventListener("touchmove", (e: TouchEvent) => {
    if (!e.touches.length) return;
    const touch = e.touches[0];
    updateMouse(touch.clientX, touch.clientY);
  });

  const animate = (): void => {
    // velocity calculation (EXACT)
    i += 0.9 * (t - n);
    s += 0.9 * (a - o);

    i *= 0.86;
    s *= 0.86;

    n = t;
    o = a;

    const containerRect = container.getBoundingClientRect();

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dX = t - (centerX - containerRect.left);
      const dY = a - (centerY - containerRect.top);

      const distance = Math.sqrt(dX ** 2 + dY ** 2);
      const width = rect.width;

      const power = Math.max(0, Math.min(1, 1 - distance / width));
      const limit = 250;

      let offsetX = i * power;
      let offsetY = s * power;

      offsetX = Math.max(Math.min(offsetX, limit), -limit);
      offsetY = Math.max(Math.min(offsetY, limit), -limit);

      item.style.setProperty("--offsetX", `${(2 * offsetX).toFixed(2)}`);
      item.style.setProperty("--offsetY", `${(2 * offsetY).toFixed(2)}`);
      item.style.setProperty(
        "--velocity",
        `${(-0.35 * (offsetX - offsetY)).toFixed(2)}`
      );
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

//jump Text Animationtp_fade_anim
declare global {
  interface Window {
    WGLSplitTextRegistered?: boolean;
  }
}
export const jumpTextAnimation = (): void => {
  const items = document.querySelectorAll<HTMLElement>(".jump-anim");
  if (!items.length) return;

  if (!window.WGLSplitTextRegistered) {
    gsap.registerPlugin(SplitText);
    window.WGLSplitTextRegistered = true;
  }

  items.forEach((item) => {
    let split: SplitText;

    try {
      split = new SplitText(item, { type: "chars,words" });
    } catch (e) {
      console.error("SplitText error:", e);
      return;
    }

    const chars = split.chars as HTMLElement[];
    const words = split.words as HTMLElement[];

    if (!chars.length || !words.length) return;

    const mid = Math.ceil(chars.length / 2);

    // initial state (EXACT)
    gsap.set(chars, {
      yPercent: 0,
      scaleY: 1,
      opacity: 1,
      transformOrigin: "center",
    });

    // quickTo (EXACT same easing & duration)
    const charsQT = chars.map((char) =>
      gsap.quickTo(char, "yPercent", {
        duration: 0.8,
        ease: "elastic.out(1,.5)",
      })
    );

    const wordsQT = gsap.quickTo(words, "scaleY", {
      duration: 0.9,
      ease: "power2.out",
    });

    let lastScrollY = window.scrollY;

    const mapValue = (
      v: number,
      a: number,
      b: number,
      c: number,
      d: number
    ): number => ((v - a) * (d - c)) / (b - a) + c;

    // ticker (EXACT logic)
    gsap.ticker.add(() => {
      const now = window.scrollY;
      const diff = now - lastScrollY;
      lastScrollY = now;

      const tY = mapValue(diff, -150, 150, -50, 50);

      wordsQT(1);

      chars.forEach((_, i) => {
        const f = i < mid ? i : mid - Math.abs(mid - i) - 1;
        charsQT[i](tY * (1 + f * 0.5));
      });
    });
  });
};
//about thumb animation
export const AboutThumbAnimation = () => {
  const thumbs = document.querySelectorAll<HTMLElement>(".mp-about-thumb");

  if (thumbs.length > 0) {
    // initial state
    gsap.set(thumbs, {
      transformOrigin: "right center",
      scaleX: 0,
      opacity: 0,
    });

    thumbs.forEach((thumb) => {
      gsap.to(thumb, {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: thumb,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }
};
//award right item animetion
export const AwardAnimation = (): void => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    const awardsItems = gsap.utils.toArray<HTMLElement>(
      ".right-item-animetion"
    );

    gsap.set(awardsItems, {
      x: 300,
      opacity: 0,
    });

    awardsItems.forEach((item, index) => {
      gsap.to(item, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });
  });

  mm.add("(max-width: 768px)", () => {
    gsap.set(".right-item-animetion", {
      clearProps: "all",
    });
  });
};

// title text animation
export const projectTitleAnimation = () => {
  const titleElements = document.querySelectorAll(".tp-title-text");
  if (!titleElements.length) return;

  titleElements.forEach((textEl) => {
    const text = textEl.textContent.trim();
    textEl.setAttribute("aria-label", text);
    const html = [...text]
      .map((char, i) => {
        const safeChar = char === " " ? "&nbsp;" : char;
        return `<span class="char" aria-hidden="true" style="--char:${i + 1};">${safeChar}</span>`;
      })
      .join("");

    textEl.innerHTML = html;
  });
};

// shop related product pin
export const productPinAnimation = () => {
  const pr = gsap.matchMedia();
  pr.add("(min-width: 1199px)", () => {
    const tl = gsap.timeline();
    const panels = document.querySelectorAll('.shop-related-product-pin')
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 10%',
          end: "bottom 130%",
          endTrigger: '.shop-related-product-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  });
};

// marquee scroll animation
type MarqueeConfig = {
  itemSelector: string;
  areaSelector: string;
};
const initMarqueeScrollAnimation = ({
  itemSelector,
  areaSelector,
}: MarqueeConfig) => {
  const items = document.querySelectorAll<HTMLElement>(itemSelector);
  if (!items.length) return;


  gsap.set(`${itemSelector}.marque`, {
    x: "35%",
  });


  gsap.timeline({
    scrollTrigger: {
      trigger: areaSelector,
      start: "-1000 0%",
      end: "bottom 0%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  }).to(`${itemSelector}.marque`, {
    x: "-200%",
  });
};

export const initPrimaryMarqueeAnimation = () =>
  initMarqueeScrollAnimation({
    itemSelector: ".tp-item-anime",
    areaSelector: ".tp-item-anime-area",
  });


export const initSecondaryMarqueeAnimation = () =>
  initMarqueeScrollAnimation({
    itemSelector: ".tp-item-anime-2",
    areaSelector: ".tp-item-anime-area-2",
  });
// End of file

// career animation
export const careerPinAnimation = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1200px)", () => {
    const panels = gsap.utils.toArray('.tp-career-details-ptb');
    const wrapper = document.querySelector('.tp-career-details-wrapper');
    const sidebar = document.querySelector('.tp-career-details-sidebar');

    if (!panels.length || !wrapper || !sidebar) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 80px',
        end: 'bottom bottom',
        scrub: 1,
        pin: sidebar,
        pinSpacing: false,
        markers: false,
      }
    });
  });
};
// mil-scale-img animation
export const milScaleAnimation = () => {
  const sections = document.querySelectorAll<HTMLElement>(".mil-scale-img");

  sections.forEach((section) => {
    // Get values safely
    const rawValue1 = section.getAttribute("data-value-1");
    const rawValue2 = section.getAttribute("data-value-2");

    let value1 = rawValue1 ? parseFloat(rawValue1) : 1;
    const value2 = rawValue2 ? parseFloat(rawValue2) : 1.2;

    // Responsive adjustment
    if (window.innerWidth < 1200) {
      value1 = Math.max(0.95, value1);
    }

    gsap.fromTo(
      section,
      { scale: value1 },
      {
        scale: value2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
};
// Img Zoom In Animation animation
export const imgZoomInAnimation = (container?: HTMLElement | null) => {
  const parent = container || document;
  const zoomItems = parent.querySelectorAll<HTMLElement>(".anim-zoomin");
  if (!zoomItems) return;

  zoomItems.forEach((item) => {
    const wrap = document.createElement("div");
    wrap.classList.add("anim-zoomin-wrap");
    wrap.style.overflow = "hidden";

    item.parentNode?.insertBefore(wrap, item);
    wrap.appendChild(item);

    gsap.from(item, {
      duration: 2,
      autoAlpha: 0,
      scale: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrap,
        start: "top 100%",
        markers: false,
      },
      clearProps: "all",
    });
  });
};

// scroll-scale-up-img
export const scrollScaleImgAnimation = () => {
  document.querySelectorAll(".scale-up-img").forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    tl.to(section.querySelector(".scale-up"), {
      scale: 1.15,
      duration: 1,
    });
  });
};

//hero scale gallery animation
export const heroScaleGallery = (): void => {
  if (typeof window === "undefined") return;
  if (window.innerWidth < 1200) return;

  const gallery = document.querySelector<HTMLElement>(".tp-hero-scale-gallery");
  const header = document.querySelector<HTMLElement>(".tp-hero-scale-content");
  const thumbs = document.querySelectorAll<HTMLElement>(
    ".tp-hero-scale-gallery > .thumbs"
  );
  const backgrounds =
    document.querySelectorAll<HTMLElement>(".background-img");

  if (!gallery || !header || !thumbs.length || !backgrounds.length) return;

  const onHover = (e: Event): void => {
    const target = e.currentTarget as HTMLElement;
    const index = parseInt(target.dataset.index ?? "", 10);
    if (isNaN(index)) return;

    // Hide header
    gsap.to(header, { opacity: 0, duration: 0.4 });

    // Show matching background
    backgrounds.forEach((bg, i) => {
      gsap.to(bg, {
        opacity: i === index ? 1 : 0,
        duration: 0.4,
      });
    });

    thumbs.forEach((t) => t.classList.remove("hovered"));
    target.classList.add("hovered");
  };

  const onLeave = (): void => {
    gsap.to(header, { opacity: 1, duration: 0.4 });
    gsap.to(backgrounds, { opacity: 0, duration: 0.4 });
    thumbs.forEach((t) => t.classList.remove("hovered"));
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener("mouseenter", onHover);
  });

  gallery.addEventListener("mouseleave", onLeave);
};