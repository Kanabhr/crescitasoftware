import path from "node:path";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { isSuperAdminUser } from "@/access/routeAuth";

const file = (rel: string) => path.join(process.cwd(), "public", rel);
const num = (n: number) => (n === 1 ? "" : `-${n}`);

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled" }, { status: 404 });
  }
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: request.headers });
  if (!user) {
    return NextResponse.json({ error: "Log in at /admin first" }, { status: 401 });
  }
  if (!(await isSuperAdminUser(payload, user))) {
    return NextResponse.json({ error: "Super admin access required" }, { status: 403 });
  }

  const existing = (await payload.findGlobal({ slug: "about-page", depth: 0 })) as unknown as {
    sliderImages?: unknown[] | null;
  };
  if (existing.sliderImages && existing.sliderImages.length > 0) {
    return NextResponse.json({ message: "Already seeded" });
  }

  let created = 0;
  const upload = async (rel: string, alt: string) => {
    const doc = await payload.create({ collection: "media", data: { alt }, filePath: file(rel) });
    created++;
    return doc.id;
  };
  const many = async (rels: string[], alt: string) => {
    const ids: (number | string)[] = [];
    for (const [i, rel] of rels.entries()) ids.push(await upload(rel, `${alt} ${i + 1}`));
    return ids.map((image) => ({ image }));
  };

  try {
    const sliderImages = await many(
      [1, 2, 3].map((n) => `assets/img/about/us/thumb${num(n)}.jpg`),
      "About us slide",
    );
    const featureImages = [await upload("assets/img/about/thumb-3.jpg", "Creative-First Approach"), await upload("assets/img/about/thumb-4.jpg", "Tailored Digital Solutions")];
    const brandLogos = await many(
      [1, 2, 3, 4, 5, 6, 7].map((n) => `assets/img/brand/cs/logo${num(n)}.png`),
      "Brand logo",
    );
    const teamImages = await many(
      [1, 2, 3, 4, 5].map((n) => `assets/img/team/about/membar${num(n)}.jpg`),
      "Team member",
    );
    const historyImages = await many(
      [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/img/about/us/history/thumb${num(n)}.jpg`),
      "History photo",
    );

    await payload.updateGlobal({
      slug: "about-page",
      data: {
        heroHeading: "Delivering creative visuals that\nstand out. make your vision a reality with cunnet.",
        sliderImages,
        introHeading: "At Cunnet,we don't just build website\nor campaigns we craft purpose-driven\ndigital journeys.",
        introLabel: "About Us",
        features: [
          {
            title: "Creative-First Approach",
            description: "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
            image: featureImages[0],
          },
          {
            title: "Tailored Digital Solutions",
            description: "Every design, app, or campaign starts with a bold idea rooted in originality and purpose.",
            image: featureImages[1],
          },
        ],
        brandLogos,
        teamHeading: "The Team",
        teamButtonText: "Discover Team",
        teamButtonLink: "/team-details",
        teamImages,
        historyHeading: "Come\nDiscover\nOur History",
        historyButtonText: "Discover Now",
        historyButtonLink: "/team",
        historyImages,
        awardsTitle: "Awards.",
        awardsSubtitle: "& Recognitions",
        awards: [
          { text: "the best in web design.", title: "Web Excellence Awards", year: "2024" },
          { text: "creativity in UI/UX and web design.", title: "Clutch Top Agencies", year: "2023" },
          { text: "design across various industries.", title: "Awwwards Honorable Mention", year: "2022" },
          { text: "startups in tech and business.", title: "Honored for Digital Innovation", year: "2021" },
          { text: "branding and digital design.", title: "CSS Design Awards", year: "2020" },
        ],
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Seed failed", mediaCreatedBeforeError: created }, { status: 500 });
  }

  return NextResponse.json({ seeded: true, mediaCreated: created });
}
