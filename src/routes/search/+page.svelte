<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import { WRITINGS, courses, experiences, leadership, projects, skills } from '$lib/design/content';

	type SearchResult = {
		type: string;
		title: string;
		description: string;
		href: string;
	};

	let query = '';

	$: normalizedQuery = query.trim().toLowerCase();
	$: results = normalizedQuery
		? [
				...projects
					.filter((item) =>
						`${item.name} ${item.summary} ${item.category.join(' ')} ${item.technologies.join(' ')}`
							.toLowerCase()
							.includes(normalizedQuery)
					)
					.map<SearchResult>((item) => ({
						type: 'Project',
						title: item.name,
						description: item.summary,
						href: `/projects/${item.slug}`
					})),
				...experiences
					.filter((item) =>
						`${item.organization} ${item.role} ${item.summary} ${item.technologies.join(' ')}`
							.toLowerCase()
							.includes(normalizedQuery)
					)
					.map<SearchResult>((item) => ({
						type: 'Experience',
						title: item.organization,
						description: `${item.role} · ${item.summary}`,
						href: `/experience/${item.slug}`
					})),
				...leadership
					.filter((item) =>
						`${item.organization} ${item.role} ${item.summary}`.toLowerCase().includes(normalizedQuery)
					)
					.map<SearchResult>((item) => ({
						type: item.kind,
						title: item.organization,
						description: `${item.role} · ${item.summary}`,
						href: `/leadership#${item.slug}`
					})),
				...skills
					.filter((item) => `${item.name} ${item.group}`.toLowerCase().includes(normalizedQuery))
					.map<SearchResult>((item) => ({
						type: 'Skill',
						title: item.name,
						description: item.group,
						href: `/skills/${item.slug}`
					})),
				...courses
					.filter((item) =>
						[
							item.code,
							...(item.aliases ?? []),
							item.name,
							item.summary,
							item.category,
							...(item.topics ?? []),
							...(item.skills?.flatMap((skill) => [skill.name, skill.detail]) ?? [])
						]
							.join(' ')
							.toLowerCase()
							.includes(normalizedQuery)
					)
					.map<SearchResult>((item) => ({
						type: 'Course',
						title: `${item.code} · ${item.name}`,
						description: `${item.term} · ${item.summary}`,
						href: '/about#coursework'
					})),
				...WRITINGS.filter((item) =>
					`${item.title} ${item.shortDescription} ${item.tags.join(' ')}`
						.toLowerCase()
						.includes(normalizedQuery)
				).map<SearchResult>((item) => ({
					type: 'Writing',
					title: item.title,
					description: item.shortDescription,
					href: `/writing/${item.slug}`
				}))
			]
		: [];
</script>

<svelte:head>
	<title>Search — Glen Nfor</title>
	<meta
		name="description"
		content="Search Glen Nfor's work, experience, coursework, leadership, and skills."
	/>
</svelte:head>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Search / All content</p>
		<h1>Find something.</h1>
		<p>Search production work, AI, software, robotics, hardware, coursework, and writing.</p>
	</header>

	<label class="design-label" for="portfolio-search">Search the portfolio</label>
	<div class="design-search-field">
		<DesignIcon name="search" size={28} />
		<input
			id="portfolio-search"
			class="design-search"
			type="search"
			bind:value={query}
			placeholder="Try Amazon, ECE 302, distributed systems, robotics…"
			autocomplete="off"
		/>
	</div>

	<div class="design-list" style="margin-top: 44px">
		{#if !normalizedQuery}
			<div class="design-empty">
				<DesignIcon name="search" size={24} />
				<strong>Start typing to search.</strong>
				<p>Try “Amazon”, “ECE 302”, “distributed systems”, “AI”, or “hardware”.</p>
			</div>
		{:else if results.length === 0}
			<div class="design-empty">
				<DesignIcon name="search" size={24} />
				<strong>No results for “{query}”.</strong>
				<p>Try a broader project, technology, organization, or topic.</p>
			</div>
		{:else}
			{#each results as result}
				<a class="design-list-row" href={result.href}>
					<span class="design-label">{result.type}</span>
					<strong>{result.title}</strong>
					<p>{result.description}</p>
					<DesignIcon name="arrow-up-right" />
				</a>
			{/each}
		{/if}
	</div>
</section>
