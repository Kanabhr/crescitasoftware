import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";
import { globalAccess } from "../access/collectionAccess";
import { clientUserCanRead } from "../access/resources";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "About Us page",
  admin: { hidden: ({ user }) => !clientUserCanRead(user, "about-page") },
  access: globalAccess("about-page"),
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath("/about-us");
        revalidatePath("/dark/about-us");
        return doc;
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "heroHeading",
              type: "textarea",
              required: true,
              defaultValue: "Delivering creative visuals that\nstand out. make your vision a reality with cunnet.",
              admin: { description: "Press Enter for a line break." },
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
                description: "Wide images (about 938 x 561). Upload each once, because the strip repeats the list for a continuous loop.",
              },
              fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
            },
          ],
        },
        {
          label: "Intro",
          fields: [
            {
              name: "introHeading",
              type: "textarea",
              required: true,
              defaultValue: "At Cunnet,we don't just build website\nor campaigns we craft purpose-driven\ndigital journeys.",
              admin: { description: "Press Enter for a line break." },
            },
            { name: "introLabel", type: "text", required: true, defaultValue: "About Us" },
            {
              name: "features",
              type: "array",
              minRows: 1,
              maxRows: 4,
              admin: { description: "Feature blocks. Images are tall (about 491 x 600)." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
                { name: "image", type: "upload", relationTo: "media", required: true },
              ],
            },
          ],
        },
        {
          label: "Brand logos",
          fields: [
            {
              name: "brandLogos",
              type: "array",
              minRows: 3,
              admin: {
                description: "Logos for the scrolling strip (about 174 x 30, transparent PNG works best). Upload each once, since the list is repeated.",
              },
              fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
            },
          ],
        },
        {
          label: "Team and history",
          fields: [
            { name: "teamHeading", type: "text", required: true, defaultValue: "The Team" },
            { name: "teamButtonText", type: "text", required: true, defaultValue: "Discover Team" },
            { name: "teamButtonLink", type: "text", required: true, defaultValue: "/team-details" },
            {
              name: "teamImages",
              type: "array",
              minRows: 3,
              admin: { description: "Team slider photos (about 615 x 654)." },
              fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
            },
            {
              name: "historyHeading",
              type: "textarea",
              required: true,
              defaultValue: "Come\nDiscover\nOur History",
              admin: { description: "Press Enter for a line break." },
            },
            { name: "historyButtonText", type: "text", required: true, defaultValue: "Discover Now" },
            { name: "historyButtonLink", type: "text", required: true, defaultValue: "/team" },
            {
              name: "historyImages",
              type: "array",
              minRows: 8,
              maxRows: 8,
              admin: {
                description: "Exactly 8 photos, in the order they appear in the layout (top to bottom, left to right). Positions are fixed, so replace images but do not reorder them unless you check the page.",
              },
              fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
            },
          ],
        },
        {
          label: "Awards",
          fields: [
            { name: "awardsTitle", type: "text", required: true, defaultValue: "Awards." },
            { name: "awardsSubtitle", type: "text", required: true, defaultValue: "& Recognitions" },
            {
              name: "awards",
              type: "array",
              minRows: 1,
              fields: [
                { name: "text", type: "text", required: true },
                { name: "title", type: "text", required: true },
                { name: "year", type: "text", required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
};
