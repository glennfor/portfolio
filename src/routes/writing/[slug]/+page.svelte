<script lang="ts">
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';

	import Banner from '$lib/components/Banner/Banner.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { WRITING } from '$lib/params';
	import type { Writing } from '$lib/types';

	export let data: { writing?: Writing };

	const { title } = WRITING;

	$: computedTitle = data.writing ? `${data.writing.title} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.writing === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load blog data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.writing.featured)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.writing.title}</MainTitle>
					</div>
					<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">
						{data.writing.shortDescription}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>

					<div class="row-center flex-wrap">
						{#each data.writing.tags as item}
							<Chip classes="inline-flex flex-row items-center justify-center">
								<span class="text-[0.9em]">{item}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-2 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.writing.content}
						<Markdown content={data.writing.content} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No content for this blog</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	/* * > button {
		background-color: yellow !important;
		outline: none;
		border: 0;
	} */

	/*TODO  update this change
	 - Flowbite has a huge problem wherein I cannot style the buttons of containing the indicators or thumbnails
	 - This makeshift takes care of that at the moment
	*/

	/* button:has(.remove-btn-style) {
		background-color: yellow !important;
		outline: none;
		border: 0;
	} */
</style>
