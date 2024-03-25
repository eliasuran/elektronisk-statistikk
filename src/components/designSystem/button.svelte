<script lang="ts">
	export let text: string;
	export let type: 'button' | 'submit';
	export let width = 'full';
</script>

<button class={`w-${width} my-2 rounded-sm bg-black p-1 text-white`} {type}>{text}</button>
