import { getClient as HonoGetClient } from '@sveltehono/hono/src/client.js';

export function getClient(params: Parameters<typeof HonoGetClient>[0]) {
	return HonoGetClient({ ...params, path: '/api' });
}
