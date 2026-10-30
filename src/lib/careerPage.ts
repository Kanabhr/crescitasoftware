import { getPayload } from "payload";
import config from "@payload-config";
import type { ElementType } from "react";
import { AnnualPleasureIcon, DualFestivalIcon, EncashmentIcon, ExcellentCultureIcon, MuslimPrayerIcon, PerformanceIcon, SnacksIcon, SportsIcon } from "@/svg/BenefitIcons";

export const BENEFIT_ICONS: Record<string, ElementType> = {
  excellentCulture: ExcellentCultureIcon,
  sports: SportsIcon,
  dualFestival: DualFestivalIcon,
  annualPleasure: AnnualPleasureIcon,
  snacks: SnacksIcon,
  prayerZone: MuslimPrayerIcon,
  encashment: EncashmentIcon,
  performance: PerformanceIcon,
};

type MediaDoc = { url?: string | null; alt?: string | null } | number | null | undefined;

type CareerPageDoc = {
  introEyebrow?: string | null;
  headingLine1?: string | null;
  headingLine2?: string | null;
  headingLine3?: string | null;
  teamButtonText?: string | null;
  teamButtonLink?: string | null;
  bannerImage?: MediaDoc;
  benefitsEyebrow?: string | null;
  benefitsHeading?: string | null;
  benefits?: { title: string; icon: string }[] | null;
  sliderImages?: { image?: MediaDoc }[] | null;
};

const DEFAULT_BANNER = "/assets/img/banner/thumb-8.jpg";
const DEFAULT_SLIDES = [1, 2, 3, 4, 5].map((n) => `/assets/img/career/career-slide-${n}.jpg`);

const asImage = (m: MediaDoc, alt: string) => (m && typeof m === "object" && m.url ? { src: m.url, alt: m.alt || alt } : null);

// Border classes follow the position, so editors cannot break the grid.
function borderFor(index: number, total: number, cols = 4): "" | "bottom" | "right" {
  const lastRowStart = Math.floor((total - 1) / cols) * cols;
  if (index < lastRowStart) return "bottom";
  return index % cols === cols - 1 || index === total - 1 ? "" : "right";
}

export async function getCareerPage() {
  const payload = await getPayload({ config });
  const doc = (await payload.findGlobal({ slug: "career-page", depth: 1 })) as unknown as CareerPageDoc;

  const benefitRows = doc.benefits ?? [];
  const slides = (doc.sliderImages ?? []).map((row, i) => asImage(row.image, `Career slide ${i + 1}`)).filter((s): s is { src: string; alt: string } => s !== null);

  return {
    introEyebrow: doc.introEyebrow || "Career",
    headingLine1: doc.headingLine1 || "Join us & make",
    headingLine2: doc.headingLine2 || "an impact through",
    headingLine3: doc.headingLine3 || "design.",
    teamButtonText: doc.teamButtonText || "Meet with\nthe team",
    teamButtonLink: doc.teamButtonLink || "/team",
    banner: asImage(doc.bannerImage, "Career banner") ?? { src: DEFAULT_BANNER, alt: "banner thumb" },
    benefitsEyebrow: doc.benefitsEyebrow || "Career",
    benefitsHeading: doc.benefitsHeading || "Our benefit",
    benefits: benefitRows.map((b, i) => ({
      title: b.title,
      iconKey: b.icon,
      border: borderFor(i, benefitRows.length),
    })),
    slides: slides.length > 0 ? slides : DEFAULT_SLIDES.map((src, i) => ({ src, alt: `Career Slide ${i + 1}` })),
  };
}
