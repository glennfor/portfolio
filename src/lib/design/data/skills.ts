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
