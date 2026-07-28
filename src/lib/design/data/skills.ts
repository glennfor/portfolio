import type { DesignSkillGroup } from './types';

export const skillGroups: Array<DesignSkillGroup> = [
	{
		name: 'Languages',
		items: ['Python', 'Java', 'C', 'C++', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'MATLAB']
	},
	{
		name: 'Software and web',
		items: [
			'React',
			'Next.js',
			'NestJS',
			'SvelteKit',
			'Express',
			'Django',
			'tRPC',
			'Prisma'
		]
	},
	{
		name: 'Data and AI',
		items: [
			'PostgreSQL',
			'MySQL',
			'Firebase',
			'PocketBase',
			'XGBoost',
			'JAX',
			'RAG',
			'CUDA'
		]
	},
	{
		name: 'Systems and infrastructure',
		items: ['AWS', 'Docker', 'Linux', 'Git', 'GraphQL', 'REST APIs', 'MCP', 'Microservices']
	},
	{
		name: 'Robotics and hardware',
		items: ['ROS 2', 'F1TENTH', 'KiCad', 'Proteus', 'Arduino', 'Raspberry Pi', 'Onshape']
	},
	{
		name: 'Product tools',
		items: ['Figma', 'Postman', 'Stripe', 'Clerk', 'Tailwind CSS']
	}
];

/** One-line, skill-specific leads used on skill detail pages. */
export const skillSummaries: Record<string, string> = {
	Python:
		'Primary language for robotics, ML coursework, automation, and backend services.',
	Java: 'Used for algorithms coursework, systems assignments, and early production services.',
	C: 'Systems programming, memory management, and low-level architecture experiments.',
	'C++': 'Performance-sensitive parallel computing and systems-level coursework.',
	Go: 'Distributed-systems labs: concurrency, RPC, and fault-tolerant services.',
	JavaScript: 'Frontend and full-stack product work across web applications.',
	TypeScript: 'Typed application code for production web products and portfolio tooling.',
	SQL: 'Querying and modeling relational data in product and analytics work.',
	MATLAB: 'Signal processing, linear algebra, and engineering analysis coursework.',

	React: 'Component UIs for product surfaces and student-facing applications.',
	'Next.js': 'Full-stack React apps with server rendering and API routes.',
	NestJS: 'Structured Node backends and GraphQL or REST service layers.',
	SvelteKit: 'This portfolio and other lightweight full-stack web apps.',
	Express: 'Node HTTP services and middleware for smaller product backends.',
	Django: 'Python web apps and admin-driven internal tooling.',
	tRPC: 'End-to-end typed APIs between TypeScript clients and servers.',
	Prisma: 'Typed ORM and migrations for PostgreSQL-backed products.',

	PostgreSQL: 'Primary relational database for production apps and campus tools.',
	MySQL: 'Relational storage in earlier product and internship work.',
	Firebase: 'Auth, realtime data, and hosting for early shipping projects.',
	PocketBase: 'Lightweight backend and auth for smaller product prototypes.',
	XGBoost: 'Gradient-boosted models for tabular prediction and ML coursework.',
	JAX: 'Autodiff and array programming in machine-learning coursework.',
	RAG: 'Retrieval-augmented generation for grounded LLM product features.',
	CUDA: 'GPU kernels and parallel workloads from ECE parallel computing.',

	AWS: 'Cloud deployment and managed services around production workloads.',
	Docker: 'Containerized local and deployed services.',
	Linux: 'Day-to-day development, debugging, and systems coursework environments.',
	Git: 'Version control across coursework, robotics, and production codebases.',
	GraphQL: 'API design for client-driven data fetching in product work.',
	'REST APIs': 'Service interfaces across backends, mobile clients, and integrations.',
	MCP: 'Tooling interfaces for agentic workflows in recent Amazon work.',
	Microservices: 'Service boundaries, messaging, and independently deployable backends.',

	'ROS 2': 'Robot middleware for sensing, messaging, and autonomy stacks.',
	F1TENTH: 'Autonomous vehicle platform work around planning and safety.',
	KiCad: 'Schematic and PCB design for electronics and robotics hardware.',
	Proteus: 'Digital and processor simulation for architecture and logic design.',
	Arduino: 'Embedded prototypes and sensor-driven electromechanical builds.',
	'Raspberry Pi': 'Onboard compute for robots, cameras, and edge control.',
	Onshape: 'CAD for mechanical parts and assemblies in engineering projects.',

	Figma: 'Product flows and interface exploration for ventures and web apps.',
	Postman: 'API exploration and request debugging during backend development.',
	Stripe: 'Payments integration in product and marketplace experiments.',
	Clerk: 'Authentication and user management for TypeScript web apps.',
	'Tailwind CSS': 'Utility-first styling for fast UI iteration on web products.'
};
