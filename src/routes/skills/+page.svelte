<script lang="ts">
	import { skillGroups, skills } from '$lib/design/content';
</script>

<svelte:head>
	<title>Technical Skills — Glen Nfor</title>
	<meta
		name="description"
		content="Languages, software frameworks, AI tools, infrastructure, robotics, and hardware used by Glen Nfor."
	/>
</svelte:head>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">Technical index / {skills.length} tools</p>
		<h1>Across the stack.</h1>
		<p>Languages, frameworks, AI, systems, robotics, and hardware used across this portfolio.</p>
	</header>

	<div class="design-grid">
		{#each skillGroups as group}
			<section class="design-card">
				<div class="design-card-body">
					<p class="design-label">{group.name}</p>
					<div class="design-tags" style="margin-top: 24px">
						{#each group.items as item}
							{@const skill = skills.find((entry) => entry.name === item)}
							{#if skill}
								<a class="design-tag" href={`/skills/${skill.slug}`}>{item}</a>
							{/if}
						{/each}
					</div>
				</div>
			</section>
		{/each}
	</div>
</section>
