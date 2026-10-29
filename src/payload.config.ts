import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import type { CollectionConfig, GlobalConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { FaqItems } from "./collections/FaqItems";
import { Users } from "./collections/Users";
import { Roles } from "./collections/Roles";
import { Media } from "./collections/Media";
import { Plans } from "./collections/Plans";
import { Jobs } from "./collections/Jobs";
import { Applications } from "./collections/Applications";
import { Authors } from "./collections/Authors";
import { Categories } from "./collections/Categories";
import { Posts } from "./collections/Posts";
import { Comments } from "./collections/Comments";
import { PageSeo } from "./collections/PageSeo";
import { CareerPage } from "./globals/CareerPage";
import { AboutPage } from "./globals/AboutPage";
import { resources } from "./access/resources";
import { collectionAccess, globalAccess } from "./access/collectionAccess";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
// Cloud storage switches on only when every S3 variable exists, so other
// worktrees and local setups keep using local folders.
const s3Enabled = Boolean(process.env.S3_ENDPOINT && process.env.S3_REGION && process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY && process.env.S3_BUCKET_MEDIA && process.env.S3_BUCKET_RESUMES);

const s3Config = {
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  forcePathStyle: true, // Supabase's S3 endpoint requires path-style URLs
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
  },
};
const configuredCollections: CollectionConfig[] = [Users, Roles, Media, FaqItems, Plans, Jobs, Applications, Authors, Categories, Posts, Comments, PageSeo];
const configuredGlobals: GlobalConfig[] = [CareerPage, AboutPage];
const securedCollections = configuredCollections.map((collection) => {
  if (collection.slug === "users" || collection.slug === "roles") return collection;
  return {
    ...collection,
    access: { ...collectionAccess(collection.slug), ...collection.access },
  };
});
const securedGlobals = configuredGlobals.map((global) => ({
  ...global,
  access: { ...globalAccess(global.slug), ...global.access },
}));
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: securedCollections,
  globals: securedGlobals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      enabled: s3Enabled,
      collections: { media: true },
      bucket: process.env.S3_BUCKET_MEDIA || "",
      config: s3Config,
    }),
    s3Storage({
      enabled: s3Enabled,
      collections: { applications: true },
      bucket: process.env.S3_BUCKET_RESUMES || "",
      config: s3Config,
    }),
  ],
  onInit: async (payload) => {
    const configuredResources = [...configuredCollections.map(({ slug }) => slug), ...configuredGlobals.map(({ slug }) => slug)];
    const unregisteredResources = configuredResources.filter((slug) => !Object.prototype.hasOwnProperty.call(resources, slug));
    if (process.env.NODE_ENV !== "production" && unregisteredResources.length > 0) {
      payload.logger.error(`[RBAC] Resources missing from src/access/resources.ts: ${unregisteredResources.join(", ")}`);
    }

    const { docs: existingAdminRoles } = await payload.find({
      collection: "roles",
      where: { slug: { equals: "admin" } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    });
    let adminRole: { id: number | string; isSuperAdmin?: boolean };
    if (!existingAdminRoles[0]) {
      const createdAdminRole = await payload.create({
        collection: "roles",
        data: {
          name: "Admin",
          slug: "admin",
          description: "Built-in super administrator role.",
          isSuperAdmin: true,
          permissions: [],
        },
        overrideAccess: true,
      });
      adminRole = { id: createdAdminRole.id, isSuperAdmin: true };
    } else if (!(existingAdminRoles[0] as { isSuperAdmin?: boolean }).isSuperAdmin) {
      const existingAdminRole = existingAdminRoles[0] as { id: number | string };
      const updatedAdminRole = await payload.update({
        collection: "roles",
        id: existingAdminRole.id,
        data: { isSuperAdmin: true },
        overrideAccess: true,
      });
      adminRole = { id: updatedAdminRole.id, isSuperAdmin: true };
    } else {
      const existingAdminRole = existingAdminRoles[0] as { id: number | string; isSuperAdmin: boolean };
      adminRole = { id: existingAdminRole.id, isSuperAdmin: existingAdminRole.isSuperAdmin };
    }

    const { totalDocs: adminHolders } = await payload.count({
      collection: "users",
      where: { role: { equals: adminRole.id } },
      overrideAccess: true,
    });
    if (adminHolders === 0) {
      const { docs: unassignedUsers } = await payload.find({
        collection: "users",
        where: { role: { exists: false } },
        pagination: false,
        depth: 0,
        overrideAccess: true,
      });
      for (const user of unassignedUsers) {
        await payload.update({
          collection: "users",
          id: user.id,
          data: { role: adminRole.id },
          overrideAccess: true,
        });
      }
    }

    const resetAdminEmail = process.env.PAYLOAD_RESET_ADMIN?.trim();
    if (resetAdminEmail) {
      const { docs: resetUsers } = await payload.find({
        collection: "users",
        where: { email: { equals: resetAdminEmail } },
        limit: 1,
        depth: 0,
        overrideAccess: true,
      });
      if (resetUsers[0]) {
        await payload.update({
          collection: "users",
          id: resetUsers[0].id,
          data: { role: adminRole.id },
          overrideAccess: true,
        });
      } else {
        payload.logger.error("[RBAC] PAYLOAD_RESET_ADMIN did not match an existing user.");
      }
    }
  },
});
