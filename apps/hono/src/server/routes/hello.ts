import { Hono } from 'hono';

const app = new Hono();

export const route = app.get('/', async (c) => {
	return c.json({ message: 'hello world from Hono' });
});
