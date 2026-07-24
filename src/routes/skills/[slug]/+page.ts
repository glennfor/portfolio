import { findSkill, relatedToSkill } from '$lib/design/content';

export function load({ params }: { params: Record<string, string> }) {
	const skill = findSkill(params.slug);
	return { skill, related: skill ? relatedToSkill(skill) : undefined };
}
