import { publicProcedure, router } from "./trpc";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { SQLITE_DB } from "@/drizzle.config";
import { todos } from "@/db/schema";

const sqlite = new Database(SQLITE_DB)
const db = drizzle(sqlite);

export const appRouter = router({
  hello: publicProcedure
    .query(() => "world"),
  todos: publicProcedure
    .query(() => db.select().from(todos).all()),
});

export type AppRouter = typeof appRouter;