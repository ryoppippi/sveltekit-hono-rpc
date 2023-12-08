import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const app = new Hono();

export const route = app
	.get('/', async (c) => {
		return c.json({ message: 'greeting' });
	})
	.post(
		'/',
		zValidator(
			'json',
			z.object({
				name: z.string(),
				age: z.number()
			})
		),
		async (c) => {
			const { name, age } = c.req.valid('json');
			return c.json({ message: `hello ${name}, you are ${age} years old` });
		}
	)
	.get(
		'/:name',
		zValidator(
			'param',
			z.object({
				name: z.string()
			})
		),
		async (c) => {
			const { name } = c.req.valid('param');
			return c.json({ message: `hello ${name}` });
		}
	);
