<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignOrganizationMark from '$lib/design/DesignOrganizationMark.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import { leadership, organizationWebsites, profile, relatedPortfolioLinks } from '$lib/design/content';
</script>

<svelte:head>
	<title>Leadership & Research — Glen Nfor</title>
</svelte:head>

<DesignSeo
	title="Leadership & Research"
	description="Technical leadership, teaching, and robotics research at Princeton University."
	path="/leadership"
/>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Princeton / Leadership & research</p>
		<h1>Building with teams.</h1>
		<p>Club leadership, teaching, and mentoring across Princeton robotics and CS.</p>
	</header>

	<div class="design-leadership-stack">
		{#each leadership as item, index}
			<article class="design-leadership-entry" id={item.slug}>
				<div>
					<p class="design-label">0{index + 1} / {item.kind}</p>
					<p class="design-date">{item.period}</p>
				</div>
				<div>
					<div class="design-entity-heading">
						<DesignOrganizationMark
							organization={item.organization}
							logo={item.logo}
							accent={item.accent ?? 'leadership'}
						/>
						<h2>
							{#if organizationWebsites[item.organization]}
								<a
									class="design-inline-link"
									href={organizationWebsites[item.organization]}
									target="_blank"
									rel="noreferrer">{item.organization} ↗</a
								>
							{:else}
								{item.organization}
							{/if}
						</h2>
					</div>
					<p class="design-kicker">{item.role}</p>
					<p class="design-card-description">{item.summary}</p>
					<ul class="design-prose">
						{#each item.contributions as contribution}
							<li>{contribution}</li>
						{/each}
					</ul>
					<div class="design-tags">
						{#each item.technologies as technology}
							<span class="design-tag">{technology}</span>
						{/each}
					</div>
					{#if relatedPortfolioLinks[item.slug]?.length}
						<div class="design-tags" style="margin-top: 16px">
							{#each relatedPortfolioLinks[item.slug] as link}
								<a class="design-tag" href={link.href}>{link.label}</a>
							{/each}
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="design-contact">
	<p>Leadership matters most when it helps a team build something real.</p>
	<a href={`mailto:${profile.personalEmail}`}>
		<span>Start a conversation</span>
		<DesignIcon name="arrow-up-right" />
	</a>
</section>
