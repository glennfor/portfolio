<script lang="ts">
	import type {
		DesignExperience,
		DesignLeadership,
		DesignProject,
		DesignSkill
	} from '$lib/design/content';
	import DesignSeo from '$lib/design/DesignSeo.svelte';

	export let data: {
		skill?: DesignSkill;
		related?: {
			projects: Array<DesignProject>;
			experiences: Array<DesignExperience>;
			leadership: Array<DesignLeadership>;
		};
	};

	$: skill = data.skill;
	$: related = data.related;
</script>

<svelte:head>
	<title>{skill ? `${skill.name} — Technical Skills` : 'Skill not found'} — Glen Nfor</title>
</svelte:head>

{#if skill}
	<DesignSeo title={`${skill.name} — Technical Skills`} description={skill.summary} path={`/skills/${skill.slug}`} />
{/if}

{#if !skill}
	<section class="design-page">
		<div class="design-empty">
			<strong>Skill not found.</strong>
			<a class="design-inline-link" href="/skills">Return to the technical index ↗</a>
		</div>
	</section>
{:else}
	<article>
		<header class="design-detail-header">
			<p class="design-eyebrow">Technical skill / {skill.group}</p>
			<h1 class="design-detail-title">{skill.name}</h1>
			<p class="design-detail-lead">{skill.summary}</p>
		</header>

		<div class="design-detail-content">
			<aside class="design-sidebar">
				<p class="design-label">Evidence</p>
				<div class="design-tags">
					<span class="design-tag">{related?.projects.length ?? 0} projects</span>
					<span class="design-tag">{related?.experiences.length ?? 0} roles</span>
					<span class="design-tag">{related?.leadership.length ?? 0} leadership items</span>
				</div>
				<a class="design-inline-link" href="/skills">← All skills</a>
			</aside>

			<div>
				<div class="design-prose">
					<h2>Where it appears</h2>
					<p>
						This page connects {skill.name} to the portfolio entries that explicitly name it,
						instead of assigning an arbitrary proficiency percentage.
					</p>
				</div>
				<div class="design-list">
					{#each related?.projects ?? [] as project}
						<a class="design-list-row" href={`/projects/${project.slug}`}>
							<span class="design-label">Project</span>
							<strong>{project.name}</strong>
							<p>{project.summary}</p>
							<span>↗</span>
						</a>
					{/each}
					{#each related?.experiences ?? [] as experience}
						<a class="design-list-row" href={`/experience/${experience.slug}`}>
							<span class="design-label">Experience</span>
							<strong>{experience.organization}</strong>
							<p>{experience.role}</p>
							<span>↗</span>
						</a>
					{/each}
					{#each related?.leadership ?? [] as item}
						<a class="design-list-row" href={`/leadership#${item.slug}`}>
							<span class="design-label">{item.kind}</span>
							<strong>{item.organization}</strong>
							<p>{item.role}</p>
							<span>↗</span>
						</a>
					{/each}
					{#if !related?.projects.length && !related?.experiences.length && !related?.leadership.length}
						<div class="design-empty">
							<strong>No detailed case study yet.</strong>
							<p>{skill.name} is listed on the résumé, but no public portfolio entry names it directly.</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</article>
{/if}
