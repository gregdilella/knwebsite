import { jobsfile, postTable, userTable } from '$lib/schema';

export type InsertUser = typeof userTable.$inferInsert;
export type User = typeof userTable.$inferSelect;
export type Post = typeof postTable.$inferSelect;
export type PostWithUser = Post & { user: Omit<User, 'passwordHash'> };
export type jobsfile = typeof jobsfile.$inferInsert;