import { getClient } from '$lib/api/client.js';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const client = getClient({ fetch });

	const res = await client.hello.$get();
	if (!res.ok) {
		error(res.status, res.statusText);
	}

	const { message } = await res.json();

	return { message };
};
