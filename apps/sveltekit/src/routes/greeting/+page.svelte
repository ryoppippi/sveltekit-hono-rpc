<script>
	import { superForm } from 'sveltekit-superforms/client';

	const { data } = $props();

	const { form, message } = superForm(data.form);
</script>

<form method="POST">
	<div>
		<label for="name">Name</label>
		<input type="text" name="name" bind:value={$form.name} />
	</div>

	<div>
		<label for="age">Age</label>
		<input type="number" name="age" bind:value={$form.age} />
	</div>

	<div>
		<button>Submit</button>
	</div>
</form>

{#if $message}
	<div style:color="red" class="message">
		{$message}
	</div>
{/if}
