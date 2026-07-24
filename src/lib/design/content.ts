import WRITINGS from '$lib/writing.params';
import { experiences } from './data/experiences';
import { leadership } from './data/leadership';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';
import type {
	DesignAccent,
	DesignProject,
	DesignSkill,
	DesignSkillGroup
} from './data/types';
import type { DesignIconName } from './icon-names';

export const DESIGN_ROOT = '/';
export const RESUME_URL = profile.links.resume;

const slugify = (value: string) =>
	value
		.toLowerCase()
		.replace(/\+\+/g, 'pp')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');

const skillSummary = (group: DesignSkillGroup, name: string) => {
	const summaries: Record<string, string> = {
		Languages: `A programming language used across Glen's software, systems, data, or embedded work.`,
		'Software and web': 'A framework or library used to build production web applications and product interfaces.',
		'Data and AI': 'A data, machine-learning, or AI technology used in projects and professional work.',
		'Systems and infrastructure':
			'A systems or infrastructure technology used for services, deployment, APIs, and development workflows.',
		'Robotics and hardware':
			'A robotics or hardware tool used to connect software with physical systems.',
		'Product tools': 'A product-development tool used to design, test, operate, or monetise software.'
	};

	return summaries[group.name] ?? `${name} is part of Glen's technical toolkit.`;
};

export const skills: Array<DesignSkill> = skillGroups.flatMap((group) =>
	group.items.map((name) => ({
		slug: slugify(name),
		name,
		group: group.name,
		summary: skillSummary(group, name)
	}))
);

export const projectCategories = [
	'All',
	...new Set(projects.flatMap((project) => project.category))
];

export const formatPublishedDate = (date: Date) =>
	new Intl.DateTimeFormat('en', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	}).format(date);

export const getWritingStatus = (slug: string) =>
	slug === 'java-elegance' ? 'Draft note' : 'Published essay';

export const getProjectAccent = (project: DesignProject): DesignAccent => {
	if (project.accent) return project.accent;
	if (project.category.some((category) => /robot|autonomous/i.test(category))) return 'robotics';
	if (project.category.some((category) => /hardware|architecture|embedded/i.test(category))) {
		return 'hardware';
	}
	if (project.category.some((category) => /ai|machine learning/i.test(category))) return 'ai';
	if (project.category.some((category) => /research/i.test(category))) return 'research';
	return 'software';
};

export const getAccentIcon = (accent: DesignAccent) =>
	accent === 'robotics'
		? 'robotics'
		: accent === 'hardware'
			? 'hardware'
			: accent === 'leadership'
				? 'leadership'
				: accent === 'research'
					? 'research'
					: accent === 'ai'
						? 'ai'
						: 'software';

export const getCategoryIcon = (category: string): DesignIconName => {
	const icons: Record<string, DesignIconName> = {
		All: 'grid',
		'Autonomous Systems': 'autonomous',
		Robotics: 'robotics',
		Software: 'software',
		Startup: 'startup',
		AI: 'ai',
		'Computer Architecture': 'architecture',
		Hardware: 'hardware',
		Research: 'research',
		Embedded: 'embedded',
		Product: 'product',
		Education: 'education',
		IoT: 'iot',
		Desktop: 'desktop',
		Systems: 'systems',
		Game: 'game'
	};

	return icons[category] ?? 'projects';
};

export const getProjectWebsite = (project: DesignProject) =>
	project.links.find((link) => /website|live|demo|product/i.test(link.label))?.href ??
	project.links.find((link) => !/github|repo/i.test(link.label) && !link.href.includes('github.com'))
		?.href;

/** Live site screenshot via WordPress mShots — linked, not stored locally. */
export const getWebsitePreview = (href: string) =>
	`https://s0.wp.com/mshots/v1/${encodeURIComponent(href)}?w=1280`;

export const getProjectPreview = (project: DesignProject) => {
	const featured = project.media.find((item) => item.isFeatured) ?? project.media[0];
	if (featured?.type === 'image') {
		return { src: featured.src, alt: featured.alt };
	}
	if (featured?.type === 'video' && featured.poster) {
		return { src: featured.poster, alt: featured.alt };
	}
	const website = getProjectWebsite(project);
	if (website) {
		return {
			src: getWebsitePreview(website),
			alt: `${project.name} website preview`
		};
	}
	return undefined;
};

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);
export const findExperience = (slug: string) =>
	experiences.find((experience) => experience.slug === slug);
export const findLeadership = (slug: string) =>
	leadership.find((item) => item.slug === slug);
export const findSkill = (slug: string) => skills.find((skill) => skill.slug === slug);
export const findWriting = (slug: string) => WRITINGS.find((writing) => writing.slug === slug);

export const relatedToSkill = (skill: DesignSkill) => ({
	projects: projects.filter((project) => project.technologies.includes(skill.name)),
	experiences: experiences.filter((experience) => experience.technologies.includes(skill.name)),
	leadership: leadership.filter((item) => item.technologies.includes(skill.name))
});

export { experiences, leadership, profile, projects, skillGroups, WRITINGS };
export type {
	DesignAccent,
	DesignExperience,
	DesignLeadership,
	DesignLink,
	DesignLogo,
	DesignMedia,
	DesignProfile,
	DesignProject,
	DesignProjectSection,
	DesignSkill,
	DesignSkillGroup
} from './data/types';
