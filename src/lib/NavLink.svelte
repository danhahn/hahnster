<script lang="ts">
	import { navIsOpenState } from './stores/nav';

	function toggleNavState() {
		navIsOpenState.set(!$navIsOpenState);
	}

	export let href: string;
</script>

<a {href} on:click={toggleNavState}><slot /></a>
