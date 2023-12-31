<script lang="ts">
	import { base } from '$app/paths';
	import Card from '$lib/components/Card/Card.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { SKILLS } from '$lib/params';
	import type { Category, Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	interface SkillFilter {
		category: Category;
		isSelected?: boolean;
	}

	const { items, title } = SKILLS;

	let certfiedOnly: boolean;

	// filter skills categories
	let filters: Array<SkillFilter> = new Array<SkillFilter>();
	//  =
	// items
	// .reduce(
	// 	(bag: Array<Skill>, current: Skill) => {
	// 		if (!bag.some((it) => it.categories == current.categories)) bag.push(current);
	// 		return bag;
	// 	},

	// 	[]
	// )
	// .map((skill: Skill): SkillFilter => ({ categories: skill.categories, isSelected: true }));

	for (let skill of items) {
		for (let cat of skill?.categories) {
			if (!filters.some((it) => it.category == cat))
				filters.push({ category: cat, isSelected: false });
		}
	}

	let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
	};

	$: {
		result = items;
		if (filters.some((it) => it.isSelected))
			result = items.filter((skill) =>
				filters.some((it) => skill.categories.indexOf(it.category) >= 0 && it.isSelected)
			);
		if (certfiedOnly) result = items.filter((skill) => !!skill.certifications);
	}
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="skill-filters my-5">
		<Chip
			active={certfiedOnly}
			on:click={() => (certfiedOnly = !certfiedOnly)}
			classes={'text-green-500 px-8 py-2 rounded-xl font-bold row items-center justify-center mr-5'}
		>
			Certified?
		</Chip>
		{#each filters as tag}
			<Chip
				active={tag.isSelected}
				classes={'text-md px-8 py-2 rounded-xl'}
				on:click={() => (tag.isSelected = !tag.isSelected)}
				>{tag.category}
			</Chip>
		{/each}
	</div>

	<CardDivider></CardDivider>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
			{#each result as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>
	{/if}
</SearchPage>
