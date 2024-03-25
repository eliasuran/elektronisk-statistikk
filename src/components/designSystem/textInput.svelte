<script lang="ts">
	export let id: string;
	export let type: 'text' | 'password';
	export let label = '';
	export let placeholder = '';
	export let width = 'full';
	export let value = '';

	const handleInput = (e: any) => {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};
</script>

<div class={`flex w-${width} flex-col text-md`}>
	{#if label.length > 0}
		<label for={id}>{label}</label>
	{/if}
	<input
		on:input={handleInput}
		{id}
		{type}
		{placeholder}
		class="rounded-sm bg-[#E2DCDC]/60 p-2 text-sm"
	/>
</div>
