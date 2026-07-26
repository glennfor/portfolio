<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import {
		organizationWebsites,
		profile,
		relatedPortfolioLinks,
		type DesignExperience
	} from '$lib/design/content';

	export let data: { experience?: DesignExperience };

	$: experience = data.experience;
	$: organizationWebsite = experience ? organizationWebsites[experience.organization] : undefined;
	$: relatedLinks = experience ? relatedPortfolioLinks[experience.slug] ?? [] : [];
</script>

<svelte:head>
	<title>{experience ? `${experience.organization} — Experience` : 'Experience not found'} — Glen Nfor</title>
</svelte:head>

{#if experience}
	<DesignSeo
		title={`${experience.organization} — Experience`}
		description={experience.summary}
		path={`/experience/${experience.slug}`}
	/>
{/if}

{#if !experience}
	<section class="design-page">
		<div class="design-empty">
			<strong>Experience not found.</strong>
			<a class="design-inline-link" href="/experience">Return to experience ↗</a>
		</div>
	</section>
{:else}
	<article>
		<header class="design-detail-header">
			<p class="design-eyebrow">Experience / {experience.organization}</p>
			<h1 class="design-detail-title">{experience.role}</h1>
			<p class="design-detail-lead">{experience.summary}</p>

			<div class="design-detail-facts">
				<div>
					<span class="design-label">Organization</span>
					<strong>
						{#if organizationWebsite}
							<a class="design-inline-link" href={organizationWebsite} target="_blank" rel="noreferrer">
								{experience.organization} ↗
							</a>
						{:else}
							{experience.organization}
						{/if}
					</strong>
				</div>
				<div>
					<span class="design-label">Period</span>
					<strong>{experience.startDate} — {experience.endDate}</strong>
				</div>
				<div>
					<span class="design-label">Location</span>
					<strong>{experience.location}</strong>
				</div>
			</div>
		</header>

		<div class="design-detail-content">
			<aside class="design-sidebar">
				<p class="design-label">Technologies and themes</p>
				<div class="design-tags">
					{#each experience.technologies as technology}
						<span class="design-tag">{technology}</span>
					{/each}
				</div>
				<a class="design-inline-link" href="/experience">← Full experience</a>
			</aside>

			<div class="design-prose">
				<h2>Overview</h2>
				<p>{experience.summary}</p>
				<h2>Contributions</h2>
				<ul>
					{#each experience.contributions as contribution}
						<li>{contribution}</li>
					{/each}
				</ul>
				{#if relatedLinks.length}
					<h2>Related</h2>
					<ul>
						{#each relatedLinks as link}
							<li>
								<a class="design-inline-link" href={link.href}>{link.label} ↗</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</article>

	<section class="design-contact">
		<p>Want to discuss the engineering behind this work?</p>
		<a href={`mailto:${profile.personalEmail}`}>
			<span>Start a conversation</span>
			<DesignIcon name="arrow-up-right" />
		</a>
	</section>
{/if}
