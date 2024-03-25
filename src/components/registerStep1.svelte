<script lang="ts">
	import Button from './designSystem/button.svelte';
	import TextInput from './designSystem/textInput.svelte';
	import { registerUser } from '$lib/auth';
	import type { RegisterFormData } from '$lib/auth';

	const width = '72';

	let formData: RegisterFormData = {
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
	};

	let error = { true: false, message: '' };
</script>

<form
	on:submit={async () => {
		error = { true: false, message: '' };
		const res = await registerUser(formData);
		if (res.error) {
			error = { true: true, message: res.error };
			return;
		}
		window.location.href = '/';
	}}
	class="flex flex-col gap-2"
>
	<h2 class="text-xxl">Registrer</h2>
	<TextInput
		id="email"
		type="text"
		label="E-post"
		placeholder="ola@nordmann.no"
		{width}
		bind:value={formData.email}
	/>
	<TextInput
		id="username"
		type="text"
		label="Brukernavn"
		placeholder="ola_nordmann"
		{width}
		bind:value={formData.username}
	/>
	<TextInput id="password" type="password" label="Passord" {width} bind:value={formData.password} />
	<TextInput
		id="confirm-password"
		type="password"
		label="Bekreft passord"
		{width}
		bind:value={formData.confirmPassword}
	/>
	<Button text="Registrer" type="submit" {width} />
	{#if error.true}
		<span>{error.message}</span>
	{/if}
</form>
