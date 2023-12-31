<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import type { Project } from '$lib/types';
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';

	export let project: Project;
	$: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	$: period = `${getTimeDiff(
		project.period.from,
		project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	)}`;
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
	<div class="card">
		<div class="info">
			<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
			<div class="m-t-20px row justify-between items-center">
				<CardTitle title={project.name} />
				<div class="row">
					{#each project.links as link}
						<CardLink label={link.label ?? ''} to={link.to} />
					{/each}
				</div>
			</div>
			<CardDivider />
			<div
				class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
			>
				<p>{project.type}</p>
				<p>{period}</p>
			</div>
			<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">
				{project.shortDescription}
			</p>
			<div class="row justify-between text-0.8em font-400">
				<Chip>{from}</Chip>
				{#if from !== to}
					<Chip>{to}</Chip>
				{/if}
			</div>
			<CardDivider />
			<div class="row">
				{#each project.skills as tech}
					<ChipIcon
						logo={getAssetURL(tech.logo)}
						name={tech.name}
						href={`${base}/skills/${tech.slug}`}
					/>
				{/each}
			</div>
		</div>
		<div class="featured">
			<img src={project?.screenshots?.at(0)?.src} alt="Featured" />
		</div>
	</div>
</Card>

<style lang="scss">
	.card {
		width: 100%;
		// height: 100px;
		height: fit-content;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		gap: 100px;

		@media (max-width: 960px) {
			flex-direction: column-reverse;
			.featured {
				img {
					width: 100%;
				}
			}
		}
		.info {
			max-width: 500px;
			min-width: 300px;
		}

		.featured {
			height: 400px;

			img {
				border-radius: 8px;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
