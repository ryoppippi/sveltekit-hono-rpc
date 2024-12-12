import { createApp } from '@sveltehono/hono/src/server';

const { app } = createApp({
	basePath: '/api'
});

export const fallback = async ({ request, platform }) => {
	return await app.fetch(request, platform?.env, platform?.context);
};
