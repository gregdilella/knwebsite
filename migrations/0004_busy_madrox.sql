CREATE TABLE IF NOT EXISTS "jobsfile" (
	"jobno" serial PRIMARY KEY NOT NULL,
	"acongpreasoncode" varchar,
	"aconno" varchar,
	"actualweight" real,
	"assigneduser" varchar,
	"authorizedphone" varchar,
	"blindedflag" boolean,
	"bolno" varchar,
	"commodity" varchar,
	"cono" varchar,
	"conochange" varchar,
	"consignee" varchar,
	"consigneecity" varchar,
	"consigneecontact" varchar,
	"consigneecountrycode" varchar,
	"consigneedrivetime" integer,
	"consigneemiles" integer,
	"consigneename" varchar,
	"consigneestate" varchar,
	"consigneetelno" varchar,
	"consigneezip" varchar,
	"controlstation" varchar,
	"custauth" varchar,
	"custauthphone" varchar,
	"customerno" varchar,
	"customsclearancecountry" varchar,
	"customscleared" date,
	"customsstatus" varchar,
	"deadline" date,
	"declaredvalue" real,
	"deliverycomment" varchar,
	"deliverydate" date,
	"deliveryutc" date,
	"destination" varchar,
	"dimweight" real,
	"dimweights" real,
	"discount" real,
	"displaydimvalues" varchar,
	"displaydimweight" varchar,
	"displayweight" real,
	"displayweightoriginal" real,
	"earlydeliverydescription" varchar,
	"earlydeliverysubtype" varchar,
	"earlydeliverytype" varchar,
	"earlypickupdescription" varchar,
	"earlypickupsubtype" varchar,
	"earlypickuptype" varchar,
	"entrydate" date,
	"fiscalperiod" varchar,
	"googlemilesinfo" varchar,
	"incoterms" varchar,
	"insurancetype" varchar,
	"insurancevalue" real,
	"invoiceapproved" boolean,
	"invoicecurrency" varchar,
	"invoicedate" date,
	"invoiceexception" varchar,
	"invoiceno" varchar,
	"invoicereference" varchar,
	"latepickupcode" varchar,
	"latepickupid" varchar,
	"latepickupinfo" varchar,
	"localmiles" real,
	"metric" varchar,
	"metricweight" real,
	"ordertype" varchar,
	"origin" varchar,
	"outfordelivery" date,
	"paytype" varchar,
	"pickupdate" date,
	"pickupexpected" date,
	"pickuputc" date,
	"pieces" integer,
	"podenteredby" varchar,
	"podentrylocaltime" time,
	"podsignature" varchar,
	"prjobrealcustomer" varchar,
	"qoluser" varchar,
	"quoteamount" real,
	"readydate" date,
	"readydateutc" date,
	"rebate" real,
	"rebatediscount" real,
	"returnticket" varchar,
	"reviseddeadline" date,
	"servicetype" varchar,
	"shipper" varchar,
	"shippercity" varchar,
	"shippercontact" varchar,
	"shippercountrycode" varchar,
	"shipperdrivetime" integer,
	"shippermiles" integer,
	"shippername" varchar,
	"shipperstate" varchar,
	"shippertelno" varchar,
	"shipperzip" varchar,
	"sls" varchar,
	"status" varchar,
	"terms" varchar,
	"valuecurrency" varchar,
	"weight" real
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"caption" text,
	"image_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"manager" text NOT NULL,
	"fin_cono" text NOT NULL,
	"role" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
