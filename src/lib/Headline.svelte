<script lang="ts">
	export let className: string = '';
</script>

<h1
	class={`text-3xl lg:text-6xl uppercase tracking-tight text-teal-600 dark:text-teal-400 font-bold ${className}`}
>
	<slot />
</h1>
