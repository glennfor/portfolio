import type { DesignExperience } from './types';

export const experiences: Array<DesignExperience> = [
	{
		slug: 'amazon-customer-service',
		organization: 'Amazon',
		role: 'Software Development Engineer Intern, Customer Service',
		location: 'Santa Clara, California',
		startDate: 'May 2026',
		endDate: 'August 2026',
		summary:
			'Building agentic customer-service infrastructure across MCP tools, multi-agent workflows, GraphQL APIs, and service virtualization.',
		contributions: [
			'Designed and implemented Model Context Protocol tools, multi-agent workflows, and orchestration infrastructure for customer account diagnosis and self-service support.',
			'Architected GraphQL APIs and schema resolvers that unified account, payment, entitlement, and membership data from more than ten REST, GraphQL, and internal services.',
			'Engineered a configurable service virtualization framework for deterministic integration testing and parallel development independent of downstream service readiness.'
		],
		technologies: ['MCP', 'GraphQL', 'Multi-agent systems', 'Service virtualization'],
		priority: 'primary',
		logo: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
			alt: 'Amazon'
		},
		accent: 'ai'
	},
	{
		slug: 'underwater-robotics',
		organization: 'Underwater Robotics Research',
		role: 'Undergraduate Researcher',
		location: 'Princeton University',
		startDate: 'September 2025',
		endDate: 'December 2025',
		summary:
			'Helped assemble and test fish-inspired underwater robots used in collective-behavior experiments.',
		contributions: [
			'Assembled robot subsystems and ran integration tests before water trials.',
			'Wrote assembly docs and improved cooling for denser onboard electronics.',
			'Helped build and integrate custom underwater imaging hardware.'
		],
		technologies: ['Embedded computing', 'Custom hardware', 'Robotics integration'],
		priority: 'primary',
		logo: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg',
			alt: 'Princeton University'
		},
		accent: 'research'
	},
	{
		slug: 'amazon-luna',
		organization: 'Amazon',
		role: 'Software Development Engineer Intern, Luna Cloud Gaming',
		location: 'Irvine, California',
		startDate: 'June 2025',
		endDate: 'August 2025',
		summary:
			'Shipped a reusable, context-aware FAQ system across the multi-platform Luna Cloud Gaming storefront.',
		contributions: [
			'Developed end-to-end FAQ support across Java backend services, APIs, and client applications.',
			'Integrated more than five Java microservices with React, Vega, and Android View clients.',
			'Supported contextual routing, localization, and fallback behavior across web, mobile, and smart TV storefront experiences.'
		],
		technologies: ['Java', 'React', 'Vega', 'Android', 'Microservices'],
		priority: 'primary',
		logo: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
			alt: 'Amazon'
		},
		accent: 'software'
	},
	{
		slug: 'quantcap',
		organization: 'QuantCap LLC',
		role: 'Machine Learning Intern',
		location: 'Remote',
		startDate: 'December 2024',
		endDate: 'January 2025',
		summary:
			'Evaluated machine-learning pipelines for forecasting equity-option movements from historical market data.',
		contributions: [
			'Designed and evaluated pipelines using XGBoost, Random Forest, and neural networks.',
			'Performed feature engineering, hyperparameter tuning, and historical backtesting.'
		],
		technologies: ['Python', 'XGBoost', 'Random Forest', 'Neural networks'],
		priority: 'primary',
		accent: 'ai'
	},
	{
		slug: 'tigerapps',
		organization: 'TigerApps',
		role: 'Student Software Developer',
		location: 'Princeton University',
		startDate: 'May 2023',
		endDate: 'January 2024',
		summary:
			'Built and maintained production software used by more than 5,500 Princeton students and faculty each day.',
		contributions: [
			'Designed, implemented, and maintained features across TigerRetail, PrincetonCourses, and other TigerApps services.',
			'Worked on user-facing systems where reliability, maintainability, and production impact mattered.'
		],
		technologies: ['SvelteKit', 'PocketBase', 'AWS Lambda', 'Tailwind CSS'],
		priority: 'primary',
		logo: {
			src: 'https://tigerapps.org/apple-touch-icon.png',
			alt: 'TigerApps'
		},
		accent: 'software'
	},
	{
		slug: 'visionary-technologies',
		organization: 'Visionary Technologies Company',
		role: 'Full-stack Software Intern',
		location: 'Yaoundé, Cameroon',
		startDate: 'May 2023',
		endDate: 'January 2024',
		summary:
			'Built full-stack and backend systems for business and operational use cases.',
		contributions: [
			'Developed an attendance management system with location-aware verification.',
			'Worked on Django REST APIs supporting enterprise software workflows.'
		],
		technologies: ['Python', 'Django', 'Django REST Framework', 'Tailwind CSS', 'SQL'],
		priority: 'secondary',
		logo: {
			src: 'https://www.vtc.cm/wp-content/uploads/2025/06/cropped-VTC-New-Logo_2015-270x270.jpg',
			alt: 'Visionary Technologies Company'
		},
		accent: 'software'
	},
	{
		slug: 'simba',
		organization: 'Simba',
		role: 'Junior Developer Intern',
		location: 'Remote',
		startDate: 'June 2022',
		endDate: 'December 2022',
		summary: 'Contributed to frontend development for web applications early in my engineering path.',
		contributions: [
			'Developed web interfaces with Reagent, Clojure, and CSS.',
			'Supported application troubleshooting and frontend implementation.'
		],
		technologies: ['Clojure', 'Reagent', 'CSS'],
		priority: 'secondary',
		accent: 'software'
	}
];
