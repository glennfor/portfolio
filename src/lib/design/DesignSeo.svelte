<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
	export let path: string | undefined = undefined;

	const siteName = 'Glen Nfor';
	const origin = 'https://glennfor.tech';
	$: canonical = path ? `${origin}${path}` : undefined;
	$: ogTitle = title.includes(siteName) ? title : `${title} — ${siteName}`;
</script>

<svelte:head>
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={ogTitle} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={ogTitle} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
</svelte:head>
