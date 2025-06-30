import { integer } from "drizzle-orm/pg-core";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
});
