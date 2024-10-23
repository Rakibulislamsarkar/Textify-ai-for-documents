import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  driver: "pglite",
  dbCredentials: {
    url: "process.env.DATABASE_URL",
  }
});