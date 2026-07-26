import {
	experiences,
	leadership,
	projects,
	skills,
	WRITINGS
} from '$lib/design/content';

const origin = 'https://glennfor.tech';

const staticRoutes = [
	'',
	'/about',
	'/projects',
	'/experience',
	'/leadership',
	'/skills',
	'/writing',
	'/search'
];

export function GET() {
	const urls = [
		...staticRoutes.map((route) => `${origin}${route}`),
		...projects.map((project) => `${origin}/projects/${project.slug}`),
		...experiences.map((experience) => `${origin}/experience/${experience.slug}`),
		...skills.map((skill) => `${origin}/skills/${skill.slug}`),
		...WRITINGS.map((writing) => `${origin}/writing/${writing.slug}`),
		...leadership.map((item) => `${origin}/leadership#${item.slug}`)
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
