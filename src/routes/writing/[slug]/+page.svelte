<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignMarkdown from '$lib/design/DesignMarkdown.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import {
		WRITINGS,
		formatPublishedDate,
		getWritingStatus
	} from '$lib/design/content';
	import type { Writing } from '$lib/types';

	export let data: { writing?: Writing };

	$: writing = data.writing;
	$: currentIndex = writing ? WRITINGS.findIndex((item) => item.slug === writing?.slug) : -1;
	$: nextWriting =
		currentIndex >= 0 ? WRITINGS[(currentIndex + 1) % WRITINGS.length] : undefined;
</script>

<svelte:head>
	<title>{writing ? writing.title : 'Writing not found'} — Glen Nfor</title>
</svelte:head>

{#if writing}
	<DesignSeo
		title={writing.title}
		description={writing.shortDescription}
		path={`/writing/${writing.slug}`}
	/>
{/if}

{#if !writing}
	<section class="design-page">
		<div class="design-empty">
			<strong>Writing not found.</strong>
			<a class="design-inline-link" href="/writing">Return to the archive ↗</a>
		</div>
	</section>
{:else}
	<article>
		<header class="design-detail-header">
			<p class="design-eyebrow">Writing / {getWritingStatus()}</p>
			<h1 class="design-detail-title">{writing.title}</h1>
			<p class="design-detail-lead">{writing.shortDescription}</p>
			<div class="design-detail-facts">
				<div>
					<span class="design-label">Date</span>
					<strong>{formatPublishedDate(writing.datePublished)}</strong>
				</div>
				<div>
					<span class="design-label">Topics</span>
					<strong>{writing.tags.join(' / ')}</strong>
				</div>
				<div>
					<span class="design-label">Status</span>
					<strong>{getWritingStatus()}</strong>
				</div>
				<div>
					<span class="design-label">Archive</span>
					<strong><a class="design-inline-link" href="/writing">All writing ↗</a></strong>
				</div>
			</div>
		</header>

		<div class="design-detail-content">
			<aside class="design-sidebar">
				<p class="design-label">Filed under</p>
				<div class="design-tags">
					{#each writing.tags as tag}
						<span class="design-tag">{tag}</span>
					{/each}
				</div>
			</aside>

			<div>
				<DesignMarkdown content={writing.content} />
			</div>
		</div>
	</article>

	{#if nextWriting && nextWriting.slug !== writing.slug}
		<section class="design-contact">
			<p>Read next: {nextWriting.title}</p>
			<a href={`/writing/${nextWriting.slug}`}>
				<span>{nextWriting.shortDescription}</span>
				<DesignIcon name="arrow-up-right" />
			</a>
		</section>
	{/if}
{/if}
