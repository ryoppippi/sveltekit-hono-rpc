// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { CacheStorage, KVNamespace, ExecutionContext } from '@cloudflare/workers-types';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			caches: CacheStorage;
			context: ExecutionContext;
			env: {
				Session: KVNamespace;
			};
		}
	}
}

export {};
