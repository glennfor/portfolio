import WRITINGS from "$lib/writing.params";

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const writing = WRITINGS.find((item) => {
			return item.slug === params.slug;
		});

		return { writing };
	}
}
