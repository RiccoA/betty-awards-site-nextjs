CREATE TABLE "story_submissions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "story_submissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"authorsName" varchar(255) NOT NULL,
	"authorsAge" integer NOT NULL,
	"storyTitle" varchar(255) NOT NULL,
	"emailAddress" varchar(255) NOT NULL,
	"phoneNumber" varchar(20) NOT NULL,
	"parentsName" varchar(255) NOT NULL,
	"country" varchar(100) NOT NULL,
	"hasMarketingConsent" boolean NOT NULL,
	"isComplete" boolean NOT NULL,
	"receiptId" varchar(255),
	"submissionTimeStamp" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;