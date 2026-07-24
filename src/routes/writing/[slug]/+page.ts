import { findWriting } from '$lib/design/content';

export function load({ params }: { params: Record<string, string> }) {
	return { writing: findWriting(params.slug) };
}
