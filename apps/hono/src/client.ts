import type { createApp } from './server';
import { hc } from 'hono/client';

type AppType = ReturnType<typeof createApp>['route'];

type GetClientOptions = {
	fetch?: typeof globalThis.fetch;
	path?: string;
};

/**
 * @description getClient is a wrapper around hc that sets the base URL to /api and the fetch function to globalThis.fetch.
 * @link https://hono.dev/guides/rpc
 * @param fetch - custom fetch function like fetch from sveltekit load function
 * @param token - JWT token
 */
export function getClient({ path = '/api', fetch = globalThis.fetch }: GetClientOptions = {}) {
	return hc<AppType>(path, { fetch });
}
