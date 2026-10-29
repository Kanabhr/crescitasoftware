import path from "node:path";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { isSuperAdminUser } from "@/access/routeAuth";

const file = (rel: string) => path.join(process.cwd(), "public", rel);

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

  const existing = (await payload.findGlobal({ slug: "career-page", depth: 0 })) as unknown as {
    benefits?: unknown[] | null;
  };
  if (existing.benefits && existing.benefits.length > 0) {
    return NextResponse.json({ message: "Already seeded" });
  }

  const upload = async (rel: string, alt: string) => {
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      filePath: file(rel),
    });
    return doc.id;
  };

  const bannerId = await upload("assets/img/banner/thumb-8.jpg", "Career banner");
  const sliderIds: (number | string)[] = [];
  for (let n = 1; n <= 5; n++) {
    sliderIds.push(await upload(`assets/img/career/career-slide-${n}.jpg`, `Career slide ${n}`));
  }

  await payload.updateGlobal({
    slug: "career-page",
    data: {
      introEyebrow: "Career",
      headingLine1: "Join us & make",
      headingLine2: "an impact through",
      headingLine3: "design.",
      teamButtonText: "Meet with\nthe team",
      teamButtonLink: "/team",
      bannerImage: bannerId,
      benefitsEyebrow: "Career",
      benefitsHeading: "Our benefit",
      benefits: [
        { title: "Excellent Culture &\nEnvironment", icon: "excellentCulture" },
        { title: "Relax and Sports\nzone", icon: "sports" },
        { title: "Dual Festival\nBonuses", icon: "dualFestival" },
        { title: "Annual Pleasure\nTour", icon: "annualPleasure" },
        { title: "Meals, Coffee &\nSnacks", icon: "snacks" },
        { title: "Muslim Prayer\nZone", icon: "prayerZone" },
        { title: "Leave\nEncashment", icon: "encashment" },
        { title: "Performance\nBonus", icon: "performance" },
      ],
      sliderImages: sliderIds.map((image) => ({ image })),
    },
  });

  return NextResponse.json({ seeded: true, mediaCreated: 1 + sliderIds.length });
}
