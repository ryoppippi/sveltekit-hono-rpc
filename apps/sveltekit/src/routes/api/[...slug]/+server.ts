import { createApp } from '@sveltehono/hono/src/server';

const { app } = createApp({
	basePath: '/api'
});

export const GET = async ({ request, platform }) => {
	return await app.fetch(request, platform?.env, platform?.context);
};

export const POST = GET;
export const PUT = GET;
