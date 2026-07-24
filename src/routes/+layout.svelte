<script lang="ts">
	import { page } from '$app/stores';
	import DesignShell from '$lib/design/DesignShell.svelte';
	import '$lib/index.scss';
	import { onHydrated } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import 'uno.css';

	onMount(() => onHydrated());

	$: isLegacyRoute = $page.url.pathname.startsWith('/old/eureka');
</script>

{#if isLegacyRoute}
	<slot />
{:else}
	<DesignShell>
		<slot />
	</DesignShell>
{/if}
