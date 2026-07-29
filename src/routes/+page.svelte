<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignOrganizationMark from '$lib/design/DesignOrganizationMark.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import {
		experiences,
		featuredCourses,
		getAccentIcon,
		getProjectAccent,
		getProjectPreview,
		leadership,
		profile,
		projects,
		skillGroups,
		toSkillSlug
	} from '$lib/design/content';

	const featuredProjects = projects.filter((project) => project.tier === 'featured');
	const selectedExperience = experiences.filter((experience) => experience.priority === 'primary');
	const technicalBreadth = skillGroups.filter((group) =>
		['Software and web', 'Data and AI', 'Systems and infrastructure', 'Robotics and hardware'].includes(
			group.name
		)
	);
</script>

<svelte:head>
	<title>Glen Nfor — Software, AI, Robotics & ECE</title>
</svelte:head>

<DesignSeo
	title="Glen Nfor — Software, AI, Robotics & ECE"
	description="Glen Nfor builds production software, AI products, autonomous systems, robotics, and hardware."
	path="/"
/>

<section class="design-hero design-profile-hero">
	<div class="design-hero-meta design-meta">
		<span>{profile.shortName}</span>
		<span>Software · AI · Robotics · Hardware</span>
	</div>
	<h1 class="design-home-headline">
		<span class="design-home-line" data-mark="software">
			<span class="design-home-line-text">I build software,</span>
			<span class="design-home-line-mark" aria-hidden="true">
				<span class="design-home-line-rule"></span>
				<DesignIcon name="code" size={18} />
			</span>
		</span>
		<span class="design-home-line" data-mark="ai">
			<span class="design-home-line-mark" aria-hidden="true">
				<DesignIcon name="skills" size={18} />
				<span class="design-home-line-rule"></span>
			</span>
			<span class="design-home-line-text">AI systems,</span>
		</span>
		<span class="design-home-line" data-mark="robots">
			<span class="design-home-line-text">and robots.</span>
			<span class="design-home-line-mark" aria-hidden="true">
				<span class="design-home-line-rule"></span>
				<DesignIcon name="robotics" size={18} />
			</span>
		</span>
	</h1>
	<div class="design-hero-bottom">
		<p>{profile.introduction}</p>
		<div class="design-actions">
			<a class="design-button primary" href="/projects">
				View projects <DesignIcon name="arrow-right" />
			</a>
			<a class="design-button" href={profile.links.resume} target="_blank" rel="noreferrer">
				Résumé <DesignIcon name="document" />
			</a>
			<div class="design-social-icons" aria-label="Social and contact links">
				<a
					class="design-icon-link"
					href={profile.links.github}
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub"
				>
					<DesignIcon name="github" size={18} />
				</a>
				<a
					class="design-icon-link"
					href={profile.links.linkedin}
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
				>
					<DesignIcon name="linkedin" size={18} />
				</a>
				<a
					class="design-icon-link"
					href={`mailto:${profile.personalEmail}`}
					aria-label={`Email ${profile.personalEmail}`}
				>
					<DesignIcon name="mail" size={18} />
				</a>
			</div>
		</div>
	</div>
</section>

<section class="design-section">
	<header class="design-section-header">
		<p class="design-eyebrow">01 / Selected experience</p>
		<h2>Production work.</h2>
		<a href="/experience">Full experience <DesignIcon name="arrow-up-right" /></a>
	</header>

	<div class="design-list">
		{#each selectedExperience as experience}
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

<section class="design-section">
	<header class="design-section-header">
		<p class="design-eyebrow">02 / Selected projects</p>
		<h2>Built end to end.</h2>
		<a href="/projects">All projects <DesignIcon name="arrow-up-right" /></a>
	</header>

	<div class="design-grid three">
		{#each featuredProjects as project}
			{@const preview = getProjectPreview(project)}
			<article class="design-card" data-accent={getProjectAccent(project)}>
				{#if preview}
					<a class="design-card-media" href={`/projects/${project.slug}`}>
						<img src={preview.src} alt={preview.alt} loading="lazy" decoding="async" />
						<span class="design-card-media-icon" aria-hidden="true">
							<DesignIcon name={getAccentIcon(getProjectAccent(project))} size={16} />
						</span>
					</a>
				{:else}
					<a class="design-card-visual" href={`/projects/${project.slug}`} aria-label={`View ${project.name}`}>
						<DesignIcon name={getAccentIcon(getProjectAccent(project))} size={32} />
						<span>{project.category[0]}</span>
					</a>
				{/if}
				<div class="design-card-body">
					<p class="design-meta">{project.category.slice(0, 2).join(' / ')}</p>
					<h3><a href={`/projects/${project.slug}`}>{project.name}</a></h3>
					<p class="design-card-description">{project.summary}</p>
					<div class="design-card-footer">
						<div class="design-tags">
							{#each project.technologies.slice(0, 3) as technology}
								<span class="design-tag">{technology}</span>
							{/each}
						</div>
						<a class="design-label" href={`/projects/${project.slug}`}>Explore ↗</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="design-section">
	<header class="design-section-header">
		<p class="design-eyebrow">03 / Technical breadth</p>
		<h2>Software meets hardware.</h2>
		<a href="/skills">Technical index <DesignIcon name="arrow-up-right" /></a>
	</header>

	<div class="design-grid">
		{#each technicalBreadth as group}
			<article class="design-card">
				<div class="design-card-body">
					<p class="design-label">{group.name}</p>
					<div class="design-tags" style="margin-top: 22px">
						{#each group.items as skill}
							<a class="design-tag" href={`/skills/${toSkillSlug(skill)}`}>{skill}</a>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="design-section">
	<header class="design-section-header">
		<p class="design-eyebrow">04 / Leadership</p>
		<h2>Building with teams.</h2>
		<a href="/leadership">Leadership details <DesignIcon name="arrow-up-right" /></a>
	</header>

	<div class="design-list">
		{#each leadership as item}
			<a class="design-list-row" href={`/leadership#${item.slug}`}>
				<span class="design-date">{item.period}</span>
				<span class="design-organization">
					<DesignOrganizationMark
						organization={item.organization}
						logo={item.logo}
						accent={item.accent ?? 'leadership'}
					/>
					<span>
						<strong>{item.organization}</strong>
						<p>{item.role}</p>
					</span>
				</span>
				<p>{item.summary}</p>
				<span class="design-label">{item.kind}</span>
			</a>
		{/each}
	</div>
</section>

<section class="design-section">
	<header class="design-section-header">
		<p class="design-eyebrow">05 / Education</p>
		<h2>{profile.education.institution}.</h2>
		<a href="/about">More about me <DesignIcon name="arrow-up-right" /></a>
	</header>

	<div class="design-detail-facts">
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

	<div class="design-education-coursework">
		<div class="design-row-between">
			<p class="design-label">Selected coursework</p>
			<a class="design-inline-link" href="/about#coursework">Full coursework</a>
		</div>
		<div class="design-course-highlights">
			{#each featuredCourses as course}
				<article>
					<div class="design-course-highlight-meta">
						<strong>{course.code}</strong>
						<span>{course.term}</span>
					</div>
					<h3>{course.name}</h3>
					<p>{course.summary}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="design-contact">
	<p>Interested in working together or building something ambitious?</p>
	<a href={`mailto:${profile.personalEmail}`}>
		<span>{profile.personalEmail}</span>
		<DesignIcon name="arrow-up-right" />
	</a>
</section>
