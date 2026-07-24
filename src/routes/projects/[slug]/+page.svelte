<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignMediaGallery from '$lib/design/DesignMediaGallery.svelte';
	import {
		getProjectPreview,
		getProjectWebsite,
		projects,
		type DesignProject
	} from '$lib/design/content';

	export let data: { project?: DesignProject };

	$: project = data.project;
	$: currentIndex = project ? projects.findIndex((item) => item.slug === project?.slug) : -1;
	$: nextProject = currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : undefined;
	$: website = project ? getProjectWebsite(project) : undefined;
	$: preview = project && !project.media.length ? getProjectPreview(project) : undefined;
</script>

<svelte:head>
	<title>{project ? `${project.name} — Projects` : 'Project not found'} — Glen Nfor</title>
	{#if project}
		<meta name="description" content={project.summary} />
	{/if}
</svelte:head>

{#if !project}
	<section class="design-page">
		<div class="design-empty">
			<strong>Project not found.</strong>
			<a class="design-inline-link" href="/projects">Return to all projects ↗</a>
		</div>
	</section>
{:else}
	<article>
		<header class="design-detail-header">
			<p class="design-eyebrow">Project / {project.category.join(' / ')}</p>
			<h1 class="design-detail-title">{project.name}</h1>
			<p class="design-detail-lead">{project.summary}</p>

			<div class="design-detail-facts">
				<div>
					<span class="design-label">Role</span>
					<strong>{project.role ?? 'Builder'}</strong>
				</div>
				<div>
					<span class="design-label">Period</span>
					<strong>{project.period ?? 'Date not published'}</strong>
				</div>
				<div>
					<span class="design-label">Category</span>
					<strong>{project.category.join(' / ')}</strong>
				</div>
				<div>
					<span class="design-label">Links</span>
					<strong>
						{#each project.links as link}
							<a class="design-inline-link" href={link.href} target="_blank" rel="noreferrer">
								{link.label} ↗
							</a>
						{:else}
							No public link
						{/each}
					</strong>
				</div>
			</div>
		</header>

		<div class="design-detail-content">
			<aside class="design-sidebar">
				<p class="design-label">Technologies</p>
				<div class="design-tags">
					{#each project.technologies as technology}
						<span class="design-tag">{technology}</span>
					{/each}
				</div>
				<a class="design-inline-link" href="/projects">← All projects</a>
			</aside>

			<div class="design-prose">
				{#each project.sections as section}
					<h2>{section.title}</h2>
					<p>{section.content}</p>
				{/each}

				{#if project.media.length}
					<h2>Gallery</h2>
					<DesignMediaGallery media={project.media} />
				{:else if preview && website}
					<h2>Preview</h2>
					<figure class="design-site-preview">
						<a href={website} target="_blank" rel="noreferrer">
							<img src={preview.src} alt={preview.alt} loading="lazy" decoding="async" />
						</a>
						<figcaption>Live site preview · {website.replace(/^https?:\/\//, '')}</figcaption>
					</figure>
				{/if}
			</div>
		</div>
	</article>

	{#if nextProject}
		<section class="design-contact">
			<p>Next project: {nextProject.name}</p>
			<a href={`/projects/${nextProject.slug}`}>
				<span>Explore the project</span>
				<DesignIcon name="arrow-up-right" />
			</a>
		</section>
	{/if}
{/if}
