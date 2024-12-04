import type { postSchema } from '$lib/validation';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
type Post = typeof postSchema;

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
		interface PageData {
			postForm: SuperValidated<Infer<Post>>;
		}
	}
}

export {};
