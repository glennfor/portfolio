<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import { profile } from '$lib/design/content';

	const contactLinks = [
		{
			label: 'Personal email',
			value: profile.personalEmail,
			href: `mailto:${profile.personalEmail}`,
			icon: 'mail' as const,
			external: false
		},
		{
			label: 'School email',
			value: profile.email,
			href: `mailto:${profile.email}`,
			icon: 'mail' as const,
			external: false
		},
		{
			label: 'GitHub',
			value: 'glennfor',
			href: profile.links.github,
			icon: 'github' as const,
			external: true
		},
		{
			label: 'LinkedIn',
			value: 'glen-yinyu',
			href: profile.links.linkedin,
			icon: 'linkedin' as const,
			external: true
		}
	];
</script>

<svelte:head>
	<title>About — Glen Nfor</title>
</svelte:head>

<DesignSeo
	title="About"
	description="About Glen Nfor, a Princeton engineering student building production software, AI systems, robotics, and hardware."
	path="/about"
/>

<section class="design-page">
	<header class="design-page-header">
		<p class="design-eyebrow">About / {profile.location}</p>
		<h1>Building across boundaries.</h1>
		<p>{profile.education.institution} · {profile.education.graduation}</p>
	</header>

	<div class="design-detail-content">
		<aside class="design-sidebar">
			<p class="design-label">Contact and résumé</p>
			<div class="design-actions">
				<a
					class="design-button primary"
					href={profile.links.resume}
					target="_blank"
					rel="noreferrer">Résumé <DesignIcon name="document" /></a
				>
			</div>
			<div class="design-contact-list">
				{#each contactLinks as link}
					<a
						class="design-contact-item"
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noreferrer' : undefined}
					>
						<span class="design-contact-item-icon">
							<DesignIcon name={link.icon} size={16} />
						</span>
						<span>
							<span class="design-label">{link.label}</span>
							<strong>{link.value}</strong>
						</span>
					</a>
				{/each}
			</div>
		</aside>

		<div class="design-prose">
			<h2>Software meets physical systems</h2>
			<p>{profile.introduction}</p>
			<p>
				I enjoy moving from idea to architecture, implementation, testing, deployment, and
				iteration. That can mean a Java service behind a customer-facing product, a full-stack
				platform, a predictive controller on a small autonomous vehicle, or the electrical
				architecture of a rover.
			</p>

			<h2>Education</h2>
			<div class="design-detail-facts">
				<div>
					<span class="design-label">Institution</span>
					<strong>
						<a
							class="design-inline-link"
							href="https://www.princeton.edu/"
							target="_blank"
							rel="noreferrer">{profile.education.institution} ↗</a
						>
					</strong>
				</div>
				<div>
					<span class="design-label">Degree</span>
					<strong>{profile.education.degree}</strong>
				</div>
				<div>
					<span class="design-label">Minors</span>
					<strong>{profile.education.minors.join(' and ')}</strong>
				</div>
				<div>
					<span class="design-label">Graduation</span>
					<strong>{profile.education.graduation}</strong>
				</div>
			</div>

			<h2>What I’m looking for</h2>
			<p>
				I’m interested in high-impact engineering roles where I can contribute to ambitious
				technical problems, learn from strong engineers, and own systems end to end.
			</p>

			<h2>Beyond one discipline</h2>
			<ul>
				<li>Production software and backend systems</li>
				<li>AI-powered products and data workflows</li>
				<li>Autonomous systems and robotics</li>
				<li>Embedded computing, hardware, and computer architecture</li>
				<li>Technical leadership, mentoring, and teaching</li>
			</ul>
		</div>
	</div>
</section>

<section class="design-contact">
	<p>Interested in working together or just talking engineering?</p>
	<a href={`mailto:${profile.personalEmail}`}>
		<span>{profile.personalEmail}</span>
		<DesignIcon name="arrow-up-right" />
	</a>
	<a href={`mailto:${profile.email}`}>
		<span>{profile.email}</span>
		<DesignIcon name="arrow-up-right" />
	</a>
</section>
