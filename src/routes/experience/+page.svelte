<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignOrganizationMark from '$lib/design/DesignOrganizationMark.svelte';
	import { experiences } from '$lib/design/content';
</script>

<svelte:head>
	<title>Experience — Glen Nfor</title>
	<meta
		name="description"
		content="Production software, AI, and full-stack engineering experience at Amazon, QuantCap, TigerApps, Visionary Technologies, and Simba."
	/>
</svelte:head>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Experience / {experiences.length} roles</p>
		<h1>Production work.</h1>
		<p>Industry engineering, machine learning, and software used by real customers and communities.</p>
	</header>

	<div class="design-list">
		{#each experiences as experience}
			<a class="design-list-row" href={`/experience/${experience.slug}`}>
				<span class="design-date">{experience.startDate} — {experience.endDate}</span>
				<span class="design-organization">
					<DesignOrganizationMark
						organization={experience.organization}
						logo={experience.logo}
						accent={experience.accent ?? 'software'}
					/>
					<span>
						<strong>{experience.organization}</strong>
						<p>{experience.role}</p>
					</span>
				</span>
				<p>{experience.summary}</p>
				<DesignIcon name="arrow-up-right" />
			</a>
		{/each}
	</div>
</section>

<section class="design-contact">
	<p>Want to talk about the systems behind the résumé?</p>
	<a href="/GlenNfor_SWE_Resume.pdf" target="_blank" rel="noreferrer">
		<span>Download résumé</span>
		<DesignIcon name="arrow-up-right" />
	</a>
</section>
