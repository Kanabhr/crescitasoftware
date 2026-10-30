import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";

type MediaDoc = { url?: string | null; alt?: string | null } | number | string | null | undefined;
type ImageRow = { image?: MediaDoc };

export type AboutImage = { src: string; alt: string };

type AboutPageDoc = {
  heroHeading?: string | null;
  sliderImages?: ImageRow[] | null;
  introHeading?: string | null;
  introLabel?: string | null;
  features?: { title: string; description: string; image?: MediaDoc }[] | null;
  brandLogos?: ImageRow[] | null;
  teamHeading?: string | null;
  teamButtonText?: string | null;
  teamButtonLink?: string | null;
  teamImages?: ImageRow[] | null;
  historyHeading?: string | null;
  historyButtonText?: string | null;
  historyButtonLink?: string | null;
  historyImages?: ImageRow[] | null;
  awardsTitle?: string | null;
  awardsSubtitle?: string | null;
  awards?: { text: string; title: string; year: string }[] | null;
};

const DEFAULTS = {
  slider: [1, 2, 3].map((n) => `/assets/img/about/us/thumb${n === 1 ? "" : `-${n}`}.jpg`),
  features: [
    {
      title: "Creative-First Approach",
      description: "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
      src: "/assets/img/about/thumb-3.jpg",
    },
    {
      title: "Tailored Digital Solutions",
      description: "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
      src: "/assets/img/about/thumb-4.jpg",
    },
  ],
  brands: [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/img/brand/cs/logo${n === 1 ? "" : `-${n}`}.png`),
  team: [1, 2, 3, 4, 5].map((n) => `/assets/img/team/about/membar${n === 1 ? "" : `-${n}`}.jpg`),
  history: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/assets/img/about/us/history/thumb${n === 1 ? "" : `-${n}`}.jpg`),
  awards: [
    { text: "the best in web design.", title: "Web Excellence Awards", year: "2024" },
    { text: "creativity in UI/UX and web design.", title: "Clutch Top Agencies", year: "2023" },
    { text: "design across various industries.", title: "Awwwards Honorable Mention", year: "2022" },
    { text: "startups in tech and business.", title: "Honored for Digital Innovation", year: "2021" },
    { text: "branding and digital design.", title: "CSS Design Awards", year: "2020" },
  ],
};

const asImage = (m: MediaDoc, alt: string): AboutImage | null => (m && typeof m === "object" && m.url ? { src: m.url, alt: m.alt || alt } : null);

function images(rows: ImageRow[] | null | undefined, alt: string, fallback: string[]): AboutImage[] {
  const found = (rows ?? []).map((row, i) => asImage(row.image, `${alt} ${i + 1}`)).filter((img): img is AboutImage => img !== null);
  return found.length > 0 ? found : fallback.map((src, i) => ({ src, alt: `${alt} ${i + 1}` }));
}

export const getAboutPage = cache(async () => {
  const payload = await getPayload({ config });
  const doc = (await payload.findGlobal({ slug: "about-page", depth: 1 })) as unknown as AboutPageDoc;

  const features =
    doc.features && doc.features.length > 0
      ? doc.features.map((f, i) => ({
          id: i + 1,
          title: f.title,
          description: f.description,
          image: asImage(f.image, f.title) ?? { src: DEFAULTS.features[i]?.src ?? DEFAULTS.features[0].src, alt: f.title },
        }))
      : DEFAULTS.features.map((f, i) => ({
          id: i + 1,
          title: f.title,
          description: f.description,
          image: { src: f.src, alt: f.title },
        }));

  // History photos sit in 8 fixed positions, so always return exactly 8.
  const historyImages = DEFAULTS.history.map((src, i) => asImage(doc.historyImages?.[i]?.image, `History photo ${i + 1}`) ?? { src, alt: "thumb" });

  return {
    heroHeading: doc.heroHeading || "Delivering creative visuals that\nstand out. make your vision a reality with cunnet.",
    slides: images(doc.sliderImages, "About us slide", DEFAULTS.slider),
    introHeading: doc.introHeading || "At Cunnet,we don't just build website\nor campaigns we craft purpose-driven\ndigital journeys.",
    introLabel: doc.introLabel || "About Us",
    features,
    brands: images(doc.brandLogos, "Brand logo", DEFAULTS.brands),
    teamHeading: doc.teamHeading || "The Team",
    teamButtonText: doc.teamButtonText || "Discover Team",
    teamButtonLink: doc.teamButtonLink || "/team-details",
    teamImages: images(doc.teamImages, "Team member", DEFAULTS.team),
    historyHeading: doc.historyHeading || "Come\nDiscover\nOur History",
    historyButtonText: doc.historyButtonText || "Discover Now",
    historyButtonLink: doc.historyButtonLink || "/team",
    historyImages,
    awardsTitle: doc.awardsTitle || "Awards.",
    awardsSubtitle: doc.awardsSubtitle || "& Recognitions",
    awards: doc.awards && doc.awards.length > 0 ? doc.awards : DEFAULTS.awards,
  };
});

export type AboutData = Awaited<ReturnType<typeof getAboutPage>>;
