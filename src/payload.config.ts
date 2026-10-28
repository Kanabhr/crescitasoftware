import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { FaqItems } from "./collections/FaqItems";
import { Users } from "./collections/Users";
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
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, FaqItems, Plans, Jobs, Applications, Authors, Categories, Posts, Comments, PageSeo],
  globals: [CareerPage, AboutPage],
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
});
