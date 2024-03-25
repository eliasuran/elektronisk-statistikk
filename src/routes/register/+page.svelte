<script lang="ts">
	import RegisterStep1 from '../../components/registerStep1.svelte';

	let step = 0;
</script>

<div class="fixed inset-0 grid place-items-center overflow-hidden">
	<div class="h-[450px] w-[475px] rounded-md bg-white p-6 shadow-md shadow-black/50">
		<h1 class="text-xxxl">Lag en bruker</h1>
		{#if step === 0}
			<RegisterStep1 />
		{/if}
	</div>
</div>
