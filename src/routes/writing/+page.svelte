<script lang="ts">
	import { base } from '$app/paths';
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { WRITING } from '$lib/params';
	import type { Writing } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	const { items, title } = WRITING;

	let result: Array<Writing> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter(
			(it) => it.title.toLowerCase().includes(query) || it.content.toLowerCase().includes(query)
		);
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<p class="text-center font-primary">
		My <mark>thoughts</mark>, <mark>reviews</mark>, <mark>essays</mark>, and <mark>articles</mark>.
	</p>

	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-5 mt-10">
			{#each result as writing (writing.slug)}
				<Card
					classes={['cursor-pointer decoration-none w-full']}
					tiltDegree={1}
					href={`${base}/writing/${writing.slug}`}
					bgImg={getAssetURL(writing.featured)}
				>
					<h3 class="text-[var(--tertiary-text)]">
						{writing.title} •
						<span class="font-light text-base"> {writing.datePublished.toDateString()}</span>
					</h3>
					<p class="my-4">
						{writing.shortDescription}
					</p>

					<div>
						{#each writing.tags as tag (tag)}
							<Chip classes={'text-0.8em'}>{tag}</Chip>
						{/each}
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</SearchPage>
