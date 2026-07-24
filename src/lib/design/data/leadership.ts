import type { DesignLeadership } from './types';

const princetonLogo = {
	src: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg',
	alt: 'Princeton University'
};

export const leadership: Array<DesignLeadership> = [
	{
		slug: 'princeton-robotics-club',
		organization: 'Princeton University Robotics Club',
		role: 'Club Admin and RoboCup Software Lead',
		period: 'September 2023 — September 2025',
		kind: 'Leadership',
		summary:
			'Led technical work across multi-agent robotic soccer, team architecture, and club operations.',
		contributions: [
			'Led a ten-member RoboCup Small Size League software team.',
			'Directed work on machine-learning models and system architecture for competitive multi-agent robotic soccer.',
			'Contributed to club administration and technical coordination.'
		],
		technologies: ['Robotics', 'Multi-agent systems', 'Machine learning'],
		logo: {
			src: 'https://club.robotics.princeton.edu/favicon.ico',
			alt: 'Princeton University Robotics Club'
		},
		accent: 'leadership'
	},
	{
		slug: 'princeton-rover-club',
		organization: 'Princeton Rover Club',
		role: 'Club Admin and Hardware Lead',
		period: 'January 2024 — Present',
		kind: 'Leadership',
		summary:
			'Leads electronics and hardware work for a University Rover Challenge platform.',
		contributions: [
			'Leads the rover’s electrical system architecture and hardware integration.',
			'Coordinates power, embedded computing, sensors, actuation, and hardware/software interfaces.',
			'Works toward reliable autonomous and remotely operated field performance.'
		],
		technologies: ['Power systems', 'Embedded systems', 'Robotics', 'Motor control'],
		logo: princetonLogo,
		accent: 'leadership'
	},
	{
		slug: 'princeton-cs-ta',
		organization: 'Princeton Computer Science Department',
		role: 'Lab Teaching Assistant, COS217 and COS226',
		period: 'September 2024 — Present',
		kind: 'Teaching',
		summary:
			'Mentors students in programming systems, data structures, algorithms, and debugging.',
		contributions: [
			'Supports more than ten students during bi-weekly lab sessions.',
			'Troubleshoots C programs and explains memory management, algorithm design, and systems concepts.',
			'Contributed to an 11% average improvement in assignment scores.'
		],
		technologies: ['C', 'Memory management', 'Data structures', 'Algorithms'],
		logo: {
			src: 'https://www.cs.princeton.edu/sites/default/files/favicon.ico',
			alt: 'Princeton Computer Science Department'
		},
		accent: 'leadership'
	},
	{
		slug: 'underwater-robotics',
		organization: 'Underwater Robotics Research',
		role: 'Research Engineer',
		period: 'Princeton University',
		kind: 'Research',
		summary:
			'Builds fish-inspired underwater robots for experiments in collective robotic behaviour.',
		contributions: [
			'Contributed to robot assembly and comprehensive integration testing.',
			'Produced assembly documentation and worked on cooling solutions.',
			'Contributed to custom imaging hardware for underwater robotic systems.'
		],
		technologies: ['Embedded computing', 'Custom hardware', 'Robotics integration'],
		logo: princetonLogo,
		accent: 'research'
	}
];
