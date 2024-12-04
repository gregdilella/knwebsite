import { postTable, userTable } from '$lib/schema';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const registerSchema = createInsertSchema(userTable, {
	email: (schema) => schema.email.email().refine((email) => email.endsWith('@kuehne-nagel.com'), {
		message: 'Email must end with @kuehne-nagel.com'
	}),
	firstName: (s) => s.firstName.min(1, { message: 'first name is required' }),
	lastName: (s) => s.lastName.min(1, { message: 'last name is required' })
}).extend({
	password: z.string().min(8)
});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export const postSchema = createInsertSchema(postTable, {
	imageUrl: z
		.instanceof(File, { message: 'Please upload a file.' })
		.refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
}).omit({
	userId: true
});
