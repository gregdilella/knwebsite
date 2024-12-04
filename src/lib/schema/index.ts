import { relations, sql } from 'drizzle-orm';
import { integer, varchar, boolean, real, date, time, serial, text, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
// Create the sequence


// Create the Drizzle table using the Zod schema
export const userTable = pgTable('user', {
	id: text('id').primaryKey(),
	firstName: varchar('first_name', { length: 50 }).notNull(),
	lastName: varchar('last_name', { length: 50 }).notNull(),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const sessionTable = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const postTable = pgTable('posts', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.references(() => userTable.id)
		.notNull(),
	caption: text('caption'),
	imageUrl: text('image_url').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const likeTable = pgTable('likes', {
	id: serial('id').primaryKey(),
	postId: integer('post_id')
		.references(() => postTable.id)
		.notNull(),
	userId: text('user_id')
		.references(() => userTable.id)
		.notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

export const userProfileTable = pgTable('user_profile', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id), // Reference to userTable.id
	manager: text('manager').notNull(),
	finCono: text('fin_cono').notNull(),
	role: varchar('role', { length: 50 }).notNull()
});

// Define user profile relations
export const userProfileRelation = relations(userProfileTable, ({ one }) => ({
	user: one(userTable, {
		fields: [userProfileTable.userId],
		references: [userTable.id]
	})
}));

// Define user relations
export const userRelation = relations(userTable, ({ many }) => ({
	posts: many(postTable),
	likes: many(likeTable) // User can have many likes
}));

// Define post relations
export const postRelation = relations(postTable, ({ one, many }) => ({
	user: one(userTable, {
		fields: [postTable.userId],
		references: [userTable.id]
	}),
	likes: many(likeTable)
}));

// Define like relations
export const likeRelation = relations(likeTable, ({ one }) => ({
	user: one(userTable, {
		fields: [likeTable.userId],
		references: [userTable.id]
	}),
	post: one(postTable, {
		fields: [likeTable.postId],
		references: [postTable.id]
	})
}));



export const jobsfile = pgTable('jobsfile', {
  jobno: serial('jobno').primaryKey(), // Serial with primary key
  acongpreasoncode: varchar('acongpreasoncode'),
  aconno: varchar('aconno'),
  actualweight: real('actualweight'),
  assigneduser: varchar('assigneduser'),
  authorizedphone: varchar('authorizedphone'),
  blindedflag: boolean('blindedflag'),
  bolno: varchar('bolno'),
  commodity: varchar('commodity'),
  cono: varchar('cono'),
  conochange: varchar('conochange'),
  consignee: varchar('consignee'),
  consigneecity: varchar('consigneecity'),
  consigneecontact: varchar('consigneecontact'),
  consigneecountrycode: varchar('consigneecountrycode'),
  consigneedrivetime: integer('consigneedrivetime'), // Hours
  consigneemiles: integer('consigneemiles'),
  consigneename: varchar('consigneename'),
  consigneestate: varchar('consigneestate'),
  consigneetelno: varchar('consigneetelno'),
  consigneezip: varchar('consigneezip'),
  controlstation: varchar('controlstation'),
  custauth: varchar('custauth'),
  custauthphone: varchar('custauthphone'),
  customerno: varchar('customerno'),
  customsclearancecountry: varchar('customsclearancecountry'),
  customscleared: date('customscleared'), // Year
  customsstatus: varchar('customsstatus'),
  deadline: date('deadline'), // Year
  declaredvalue: real('declaredvalue'),
  deliverycomment: varchar('deliverycomment'),
  deliverydate: date('deliverydate'), // Year
  deliveryutc: date('deliveryutc'), // Year
  destination: varchar('destination'),
  dimweight: real('dimweight'),
  dimweights: real('dimweights'),
  discount: real('discount'),
  displaydimvalues: varchar('displaydimvalues'),
  displaydimweight: varchar('displaydimweight'),
  displayweight: real('displayweight'),
  displayweightoriginal: real('displayweightoriginal'),
  earlydeliverydescription: varchar('earlydeliverydescription'),
  earlydeliverysubtype: varchar('earlydeliverysubtype'),
  earlydeliverytype: varchar('earlydeliverytype'),
  earlypickupdescription: varchar('earlypickupdescription'),
  earlypickupsubtype: varchar('earlypickupsubtype'),
  earlypickuptype: varchar('earlypickuptype'),
  entrydate: date('entrydate'), // Year
  fiscalperiod: varchar('fiscalperiod'),
  googlemilesinfo: varchar('googlemilesinfo'),
  incoterms: varchar('incoterms'),
  insurancetype: varchar('insurancetype'),
  insurancevalue: real('insurancevalue'),
  invoiceapproved: boolean('invoiceapproved'),
  invoicecurrency: varchar('invoicecurrency'),
  invoicedate: date('invoicedate'), // Year
  invoiceexception: varchar('invoiceexception'),
  invoiceno: varchar('invoiceno'),
  invoicereference: varchar('invoicereference'),
  latepickupcode: varchar('latepickupcode'),
  latepickupid: varchar('latepickupid'),
  latepickupinfo: varchar('latepickupinfo'),
  localmiles: real('localmiles'),
  metric: varchar('metric'),
  metricweight: real('metricweight'),
  ordertype: varchar('ordertype'),
  origin: varchar('origin'),
  outfordelivery: date('outfordelivery'), // Year
  paytype: varchar('paytype'),
  pickupdate: date('pickupdate'), // Year
  pickupexpected: date('pickupexpected'), // Year
  pickuputc: date('pickuputc'), // Year
  pieces: integer('pieces'),
  podenteredby: varchar('podenteredby'),
  podentrylocaltime: time('podentrylocaltime'),
  podsignature: varchar('podsignature'),
  prjobrealcustomer: varchar('prjobrealcustomer'),
  qoluser: varchar('qoluser'),
  quoteamount: real('quoteamount'),
  readydate: date('readydate'), // Year
  readydateutc: date('readydateutc'), // Year
  rebate: real('rebate'),
  rebatediscount: real('rebatediscount'),
  returnticket: varchar('returnticket'),
  reviseddeadline: date('reviseddeadline'), // Year
  servicetype: varchar('servicetype'),
  shipper: varchar('shipper'),
  shippercity: varchar('shippercity'),
  shippercontact: varchar('shippercontact'),
  shippercountrycode: varchar('shippercountrycode'),
  shipperdrivetime: integer('shipperdrivetime'), // Hours
  shippermiles: integer('shippermiles'),
  shippername: varchar('shippername'),
  shipperstate: varchar('shipperstate'),
  shippertelno: varchar('shippertelno'),
  shipperzip: varchar('shipperzip'),
  sls: varchar('sls'),
  status: varchar('status'),
  terms: varchar('terms'),
  valuecurrency: varchar('valuecurrency'),
  weight: real('weight')
});
