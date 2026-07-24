<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import {
		getAccentIcon,
		getCategoryIcon,
		getProjectAccent,
		getProjectPreview,
		projectCategories,
		projects
	} from '$lib/design/content';

	let selectedCategory = 'All';

	$: visibleProjects = projects.filter(
		(project) => selectedCategory === 'All' || project.category.includes(selectedCategory)
	);
</script>

<svelte:head>
	<title>Projects — Glen Nfor</title>
	<meta
		name="description"
		content="Software, AI, autonomous systems, robotics, hardware, and product work by Glen Nfor."
	/>
</svelte:head>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Portfolio / {projects.length} projects</p>
		<h1>Projects.</h1>
		<p>Production products, autonomous systems, AI tools, robotics research, and hardware.</p>
	</header>

	<div class="design-toolbar" aria-label="Filter projects by category">
		{#each projectCategories as category}
			<button
				type="button"
				class:active={selectedCategory === category}
				on:click={() => (selectedCategory = category)}
			>
				<DesignIcon name={getCategoryIcon(category)} size={14} />
				{category}
			</button>
		{/each}
	</div>

	<div class="design-grid three">
		{#each visibleProjects as project}
			{@const preview = getProjectPreview(project)}
			<article class="design-card" data-accent={getProjectAccent(project)}>
				{#if preview}
					<a class="design-card-media" href={`/projects/${project.slug}`}>
						<img src={preview.src} alt={preview.alt} loading="lazy" decoding="async" />
					</a>
				{:else}
					<a class="design-card-visual" href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
						<DesignIcon name={getAccentIcon(getProjectAccent(project))} size={36} />
						<span>{project.category[0]}</span>
					</a>
				{/if}
				<div class="design-card-body">
					<p class="design-meta">{project.category.slice(0, 2).join(' / ')}</p>
					<h2><a href={`/projects/${project.slug}`}>{project.name}</a></h2>
					<p class="design-card-description">{project.summary}</p>
					<div class="design-tags">
						{#each project.technologies.slice(0, 4) as technology}
							<span class="design-tag">{technology}</span>
						{/each}
					</div>
					<div class="design-card-footer">
						<a class="design-label" href={`/projects/${project.slug}`}>View project ↗</a>
					</div>
				</div>
			</article>
		{:else}
			<div class="design-empty">
				<DesignIcon name="search" size={24} />
				<strong>No projects match this category.</strong>
				<p>Choose a different category.</p>
			</div>
		{/each}
	</div>
</section>
