<script lang="ts">
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { Carousel, Thumbnails } from 'flowbite-svelte';

	import { base } from '$app/paths';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { PROJECTS } from '$lib/params';
	import type { Project } from '$lib/types';
	import { onMount } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	export let data: { project?: Project };

	const { title } = PROJECTS;

	const screenshots = data.project?.screenshots ?? [];

	$: computedTitle = data.project ? `${data.project.name} - ${title}` : title;

	let image: HTMLImgAttributes;
	let index = 0;
	let forward = true; // sync animation direction between Thumbnails and Carousel

	const images = data?.project?.screenshots?.map((it) => ({
		alt: it.label,
		src: it.src,
		title: it.label
	}));

	onMount(() => console.log(images));
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.project.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.project.name}</MainTitle>
					</div>
					<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.project.type}</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.project.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.project.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.project.description}
						<Markdown content={data.project.description} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
			</div>

			<div class="max-w-5xl space-y-4 bg-transparent mx-3">
				{#if !images}
					<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
						<UIcon icon="i-carbon-image" classes="text-3.5em" />
						<p class="font-300">No screenshots</p>
					</div>
				{:else}
					<Carousel
						{images}
						imgClass="object-cover h-full w-fit rounded-sm "
						{forward}
						transition={null}
						duration={4000}
						on:change={({ detail }) => (image = detail)}
						let:Indicators
						let:Controls
						bind:index
					>
						<Controls class="bg-transparent outline-none border-0" />
						<Indicators let:Indicator activeClass="bg-green-300">
							<Indicator class=" remove-btn-style outline-none border-0 bg-blue-300" />
						</Indicators>
					</Carousel>
					<div class="rounded outline-2 p-2 py-3 my-2 text-center">
						{image?.alt}
					</div>
					<Thumbnails
						class="bg-transparent gap-3 overflow-scroll"
						let:Thumbnail
						let:image
						let:selected
						{images}
						bind:index
					>
						<Thumbnail
							{...image}
							{selected}
							class=" remove-btn-style bg-transparent rounded-md shadow-xl hover:outline hover:outline-primary-500 h-[100px]"
							activeClass="outline outline-primary-400"
						/>
					</Thumbnails>
				{/if}
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
