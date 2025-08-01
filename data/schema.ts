import { integer, boolean, timestamp, pgTable, varchar } from "drizzle-orm/pg-core";

export const storySubmissionsTable = pgTable("story_submissions", {
   id: integer().primaryKey().generatedAlwaysAsIdentity(),
   authorsName: varchar({ length: 255 }).notNull(),
   authorsAge: integer().notNull(),
   storyTitle: varchar({ length: 255 }).notNull(),
   emailAddress: varchar({ length: 255 }).notNull(),
   phoneNumber: varchar({ length: 20 }).notNull(),
   parentsName: varchar({ length: 255 }).notNull(),
   country: varchar({ length: 100 }).notNull(),
   hasMarketingConsent: boolean().notNull(),
   isComplete: boolean().notNull(), 
   receiptId: varchar({ length: 255 }),
   submissionTimeStamp: timestamp({ withTimezone: false }).defaultNow()
})