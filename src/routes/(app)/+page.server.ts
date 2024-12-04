import { lucia } from '$lib/server/auth.js';

import { fail, redirect } from '@sveltejs/kit';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { v2 as cloudinary } from 'cloudinary';

import { db } from '$lib/server/db.js';

import { desc } from 'drizzle-orm';



export const actions = {
	logOut: async ({ locals: { session }, cookies }) => {
		if (!session) {
			return fail(401);
		}
		const sessionId = session?.id;
		await lucia.invalidateSession(sessionId);
		const sessionCookie = lucia.createBlankSessionCookie();
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(303, '/login');
	},
	
};
