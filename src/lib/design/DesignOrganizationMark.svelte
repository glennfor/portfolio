<script lang="ts">
	import type { DesignAccent, DesignLogo } from '$lib/design/content';

	export let organization: string;
	export let logo: DesignLogo | undefined = undefined;
	export let accent: DesignAccent = 'software';

	let hasImageError = false;

	$: words = organization
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.split(/\s+/)
		.filter((word) => !['company', 'llc'].includes(word.toLowerCase()))
		.filter(Boolean);
	$: initials =
		words.length === 1
			? words[0].slice(0, 2).toUpperCase()
			: words
					.slice(0, 2)
					.map((word) => word[0])
					.join('')
					.toUpperCase();
</script>

<span
	class:has-logo={logo && !hasImageError}
	class="design-organization-mark"
	data-accent={accent}
	aria-hidden="true"
>
	{#if logo && !hasImageError}
		<img src={logo.src} alt="" on:error={() => (hasImageError = true)} />
	{:else}
		<span>{initials}</span>
	{/if}
</span>
