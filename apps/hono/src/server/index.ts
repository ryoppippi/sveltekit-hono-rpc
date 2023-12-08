import { Hono } from 'hono';

import { route as helloRoute } from './routes/hello.js';
import { route as greetingRoute } from './routes/greeting.js';

type Input = {
	basePath: string;
};

export function createApp({ basePath }: Input) {
	let app = new Hono();

	app = app.basePath(basePath);

	// prettier-ignore
	const route = app
		.route('/hello', helloRoute)
		.route('/greeting', greetingRoute);

	return { app, route };
}
