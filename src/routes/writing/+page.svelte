<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import {
		WRITINGS,
		formatPublishedDate,
		getWritingStatus
	} from '$lib/design/content';
</script>

<svelte:head>
	<title>Writing — Glen Nfor</title>
	<meta name="description" content="Notes and essays about software and learning." />
</svelte:head>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Writing / {WRITINGS.length} entries</p>
		<h1>Notes from the work.</h1>
		<p>Personal writing about programming, learning, and turning ideas into finished software.</p>
	</header>

	<div class="design-list">
		{#each WRITINGS as writing}
			<a class="design-list-row" href={`/writing/${writing.slug}`}>
				<span class="design-date">{formatPublishedDate(writing.datePublished)}</span>
				<span>
					<strong>{writing.title}</strong>
					<p>{writing.tags.join(' · ')}</p>
				</span>
				<p>{writing.shortDescription}</p>
				<span>
					<span class="design-label">{getWritingStatus(writing.slug)}</span>
					<DesignIcon name="arrow-up-right" />
				</span>
			</a>
		{/each}
	</div>
</section>
