<script lang="ts">
	import DesignIcon from '$lib/design/DesignIcon.svelte';
	import DesignSeo from '$lib/design/DesignSeo.svelte';
	import {
		courses,
		profile,
		toSkillSlug,
		type DesignCourse,
		type DesignCourseCategory
	} from '$lib/design/content';

	type CourseFilter = 'all' | DesignCourseCategory;

	const courseFilters: Array<{ value: CourseFilter; label: string }> = [
		{ value: 'all', label: 'All technical' },
		{ value: 'ece', label: 'ECE & hardware' },
		{ value: 'cs', label: 'CS & systems' },
		{ value: 'robotics', label: 'Robotics & AI' },
		{ value: 'foundations', label: 'Math & engineering' }
	];
	const academicYears: Array<DesignCourse['academicYear']> = [
		'Senior',
		'Junior',
		'Sophomore',
		'First year',
		'Pre-college'
	];

	let activeCourseFilter: CourseFilter = 'all';

	$: filteredCourses =
		activeCourseFilter === 'all'
			? courses
			: courses.filter((course) => course.category === activeCourseFilter);
	$: courseGroups = academicYears
		.map((academicYear) => ({
			academicYear,
			courses: filteredCourses.filter((course) => course.academicYear === academicYear)
		}))
		.filter((group) => group.courses.length > 0);

	const getProjectLinkLabel = (projectSlug: string) =>
		projectSlug === 'carlab' ? 'See CarLab' : 'See ADAS safety filter';
	const getAcademicYearId = (academicYear: DesignCourse['academicYear']) =>
		`course-year-${academicYear.toLowerCase().replace(/\s+/g, '-')}`;

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

			<section class="design-coursework" id="coursework" aria-labelledby="coursework-title">
				<div class="design-coursework-heading">
					<div>
						<p class="design-eyebrow">Selected technical coursework</p>
						<h2 id="coursework-title">Coursework</h2>
					</div>
					<p>
						A focused record of the systems, hardware, AI, and robotics work behind this
						portfolio.
					</p>
				</div>

				<div class="design-toolbar design-course-filters" aria-label="Filter coursework by area">
					{#each courseFilters as filter}
						<button
							type="button"
							class:active={activeCourseFilter === filter.value}
							aria-pressed={activeCourseFilter === filter.value}
							on:click={() => (activeCourseFilter = filter.value)}
						>
							{filter.label}
							<span>
								{filter.value === 'all'
									? courses.length
									: courses.filter((course) => course.category === filter.value).length}
							</span>
						</button>
					{/each}
				</div>

				<div class="design-course-groups" aria-live="polite">
					{#each courseGroups as group}
						<section class="design-course-year" aria-labelledby={getAcademicYearId(group.academicYear)}>
							<header>
								<h3 id={getAcademicYearId(group.academicYear)}>{group.academicYear}</h3>
								<span class="design-count">
									{group.courses.length} {group.courses.length === 1 ? 'course' : 'courses'}
								</span>
							</header>

							<div class="design-course-list">
								{#each group.courses as course}
									<article class="design-course-row">
										<div class="design-course-term">
											<span>{course.term}</span>
										</div>
										<div class="design-course-title">
											<p class="design-course-code">
												<strong>{course.code}</strong>
												{#if course.aliases?.length}
													<span>/ {course.aliases.join(' / ')}</span>
												{/if}
											</p>
											<h4>{course.name}</h4>
										</div>
										<p class="design-course-summary">
											{course.summary}
											{#if course.projectSlug}
												<a href={`/projects/${course.projectSlug}`}>
													{getProjectLinkLabel(course.projectSlug)} ↗
												</a>
											{:else if course.leadershipSlug}
												<a href={`/leadership#${course.leadershipSlug}`}>Related teaching ↗</a>
											{/if}
										</p>
										{#if course.skills?.length}
											<div class="design-course-skills">
												{#each course.skills as skill}
													<a class="design-tag" href={`/skills/${toSkillSlug(skill.name)}`}
														>{skill.name}</a
													>
												{/each}
											</div>
										{/if}
									</article>
								{/each}
							</div>
						</section>
					{/each}
				</div>
			</section>

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
