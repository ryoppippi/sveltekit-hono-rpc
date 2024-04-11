import { getClient } from '$lib/api/client.js';
import { superValidate, message } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	name: z.string(),
	age: z.number()
});

const defaults = {
	name: 'John Doe',
	age: 20
} as const satisfies z.infer<typeof schema>;

export const load = async () => {
	const form = await superValidate(zod(schema, { defaults }));

	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, zod(schema));
		console.log('POST', form);

		if (!form.valid) {
			return message(form, 'Invalid form');
		}

		const client = getClient({ fetch });

		const res = await client.greeting.$post({
			json: form.data
		});

		if (!res.ok) {
			return message(form, res.statusText, { status: 400 });
		}

		const { message: dataMessage } = await res.json();

		return message(form, dataMessage);
	}
};
