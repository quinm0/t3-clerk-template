import type { Config } from "drizzle-kit";

export const SQLITE_DB = "dev.db";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: SQLITE_DB,
  },
} satisfies Config;