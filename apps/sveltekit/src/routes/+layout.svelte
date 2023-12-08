<script>
	import { page } from '$app/stores';

	const routes = Object.keys(import.meta.glob('./**/+page.svelte'))
		.map((route) => '/' + route.replace('./', '').replace('+page.svelte', '').replace(/\/$/, ''))
		.sort((a, b) => a.split('/').length - b.split('/').length);
</script>

<div class="header">
	<ul>
		{#each routes as route}
			<li>
				{#if route !== $page.route.id}
					<a href={route}>{route}</a>
				{:else}
					{route}
				{/if}
			</li>
		{/each}
	</ul>
</div>

<slot />
