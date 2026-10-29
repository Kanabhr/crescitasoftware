import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { globalAccess } from "../access/collectionAccess";
import { clientUserCanRead } from "../access/resources";
import { BENEFIT_ICON_OPTIONS } from "../lib/benefitIconKeys";

export const CareerPage: GlobalConfig = {
  slug: "career-page",
  label: "Career page",
  admin: { hidden: ({ user }) => !clientUserCanRead(user, "career-page") },
  access: globalAccess("career-page"),
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath("/career");
        revalidatePath("/dark/career");
        return doc;
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Intro",
          fields: [
            { name: "introEyebrow", type: "text", required: true, defaultValue: "Career" },
            { name: "headingLine1", type: "text", required: true, defaultValue: "Join us & make" },
            { name: "headingLine2", type: "text", required: true, defaultValue: "an impact through" },
            { name: "headingLine3", type: "text", required: true, defaultValue: "design." },
            {
              name: "teamButtonText",
              type: "textarea",
              required: true,
              defaultValue: "Meet with\nthe team",
              admin: { description: "Press Enter for a line break." },
            },
            { name: "teamButtonLink", type: "text", required: true, defaultValue: "/team" },
          ],
        },
        {
          label: "Banner",
          fields: [
            {
              name: "bannerImage",
              type: "upload",
              relationTo: "media",
              admin: {
                description: "Wide image under the intro on /career and at the top of every job details page.",
              },
            },
          ],
        },
        {
          label: "Benefits",
          fields: [
            { name: "benefitsEyebrow", type: "text", required: true, defaultValue: "Career" },
            { name: "benefitsHeading", type: "text", required: true, defaultValue: "Our benefit" },
            {
              name: "benefits",
              type: "array",
              admin: { description: "Drag rows to reorder. Four benefits fit on each row." },
              fields: [
                {
                  name: "title",
                  type: "textarea",
                  required: true,
                  admin: { description: "Press Enter for a line break." },
                },
                {
                  name: "icon",
                  type: "select",
                  required: true,
                  defaultValue: "excellentCulture",
                  options: BENEFIT_ICON_OPTIONS,
                },
              ],
            },
          ],
        },
        {
          label: "Slider",
          fields: [
            {
              name: "sliderImages",
              type: "array",
              minRows: 3,
              admin: {
                description: "Images in the scrolling strip. The list is repeated once so the loop looks continuous.",
              },
              fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
            },
          ],
        },
      ],
    },
  ],
};
