import type { DesignProject } from './types';

export const projects: Array<DesignProject> = [
	{
		slug: 'adas-safety-filter',
		name: 'ADAS Safety Filter',
		summary:
			'A real-time predictive safety layer that intercepts human driving commands before they cause lane departures or obstacle collisions.',
		category: ['Autonomous Systems', 'Robotics'],
		technologies: ['Python', 'ROS 2', 'JAX', 'iLQR', 'F1TENTH'],
		role: 'Controls and robotics engineer',
		period: 'April — May 2026',
		status: 'completed',
		tier: 'featured',
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/glennfor/ECE346FinalProject'
			}
		],
		sections: [
			{
				title: 'Problem',
				content:
					'Human driving inputs on a 1/10-scale autonomous vehicle needed an independent safety layer capable of preventing lane departures and obstacle collisions in real time.'
			},
			{
				title: 'Approach',
				content:
					'I built a ROS 2 filter that intercepts commands and evaluates predicted vehicle trajectories before forwarding safe controls.'
			},
			{
				title: 'Architecture',
				content:
					'The system uses a dual-iLQR design with independent monitoring and recovery planners, integrating SLAM, obstacle detection, route planning, and Ackermann vehicle dynamics.'
			},
			{
				title: 'Validation',
				content: 'The complete control pipeline was validated on physical F1TENTH hardware.'
			}
		],
		media: []
	},
	{
		slug: 'eval-gaming',
		name: 'EVAL Gaming',
		summary:
			'A full-stack college esports recruiting platform that connects verified player profiles, combines, and coach discovery.',
		category: ['Software', 'Startup'],
		technologies: [
			'Next.js',
			'React',
			'TypeScript',
			'tRPC',
			'Prisma',
			'PostgreSQL',
			'Clerk',
			'Stripe'
		],
		role: 'Full-stack product engineer',
		period: 'August 2025 — Present',
		status: 'active',
		tier: 'featured',
		links: [{ label: 'Website', href: 'https://evalgaming.com/' }],
		sections: [
			{
				title: 'Product',
				content:
					'EVAL helps esports players build verified profiles, compete in combines, and connect with college coaches.'
			},
			{
				title: 'Implementation',
				content:
					'I designed, implemented, and deployed the full-stack product across the user experience, typed APIs, relational data model, authentication, and payments.'
			},
			{
				title: 'Focus',
				content:
					'The core challenge is turning fragmented player information and competitive performance into a credible recruiting workflow for athletes and coaches.'
			}
		],
		media: []
	},
	{
		slug: 'infradar',
		name: 'Infradar',
		summary:
			'AI-powered business intelligence for infrastructure and construction across Africa and MENA.',
		category: ['AI', 'Software', 'Startup'],
		technologies: ['AI systems', 'Data pipelines', 'Full-stack software'],
		role: 'Builder',
		period: '2024 — Present',
		status: 'active',
		tier: 'featured',
		links: [],
		sections: [
			{
				title: 'Product',
				content:
					'Infradar turns fragmented infrastructure and construction information into real-time project monitoring, confidence scores, and decision-ready signals.'
			},
			{
				title: 'Focus',
				content:
					'The product combines AI workflows, data engineering, monitoring, and product design for infrastructure intelligence in Africa and MENA.'
			}
		],
		media: []
	},
	{
		slug: 'am16k',
		name: 'AM16K Processor',
		summary: 'A fully functional 16-bit RISC processor prototype designed and simulated in Proteus.',
		category: ['Computer Architecture', 'Hardware'],
		technologies: ['Proteus', 'Digital logic', 'Computer architecture'],
		role: 'Processor designer',
		period: '2025',
		status: 'completed',
		tier: 'featured',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/am16k' }],
		sections: [
			{
				title: 'Overview',
				content:
					'AM16K is a 16-bit RISC processor prototype capable of executing fundamental micro-operations in a simulated digital system.'
			},
			{
				title: 'Engineering focus',
				content:
					'The project covers instruction execution, datapath design, control logic, registers, memory, and the relationship between an instruction set and physical logic.'
			},
			{
				title: 'Environment',
				content: 'The processor was assembled and simulated in Proteus.'
			}
		],
		media: []
	},
	{
		slug: 'coralbots',
		name: 'Coralbots',
		summary:
			'Underwater fish-inspired robots built to investigate collective behavior in robotic swarms.',
		category: ['Research', 'Robotics', 'Hardware'],
		technologies: ['Embedded computing', 'Custom imaging', 'Robotics integration'],
		role: 'Research engineer',
		period: 'September 2023 — Present',
		status: 'research',
		tier: 'featured',
		links: [
			{
				label: 'Robotics Club',
				href: 'https://club.robotics.princeton.edu/'
			}
		],
		sections: [
			{
				title: 'Research context',
				content:
					'The research uses three-dimensional, fish-inspired underwater robots to experimentally study collective behavior in robotic swarms.'
			},
			{
				title: 'Contributions',
				content:
					'My work has included robot assembly, assembly documentation, cooling solutions, custom imaging hardware, integration, and testing.'
			},
			{
				title: 'Systems challenge',
				content:
					'Underwater robotics brings embedded computing, sensing, mechanical integration, thermal constraints, and experimental reliability into one physical system.'
			}
		],
		media: []
	},
	{
		slug: 'rover-electrical-architecture',
		name: 'Rover Electrical Architecture',
		summary:
			'Electrical and control architecture for Princeton Rover Club’s University Rover Challenge platform.',
		category: ['Robotics', 'Hardware', 'Embedded'],
		technologies: ['Power systems', 'Embedded computing', 'Sensors', 'Motor control'],
		role: 'Hardware lead',
		period: 'January 2024 — Present',
		status: 'active',
		tier: 'featured',
		links: [
			{
				label: 'Rover Club',
				href: 'https://odus.princeton.edu/undergraduate-student-organizations'
			}
		],
		sections: [
			{
				title: 'System',
				content:
					'The rover requires a reliable electrical architecture spanning power distribution, embedded computing, sensing, actuation, communication, and hardware/software interfaces.'
			},
			{
				title: 'Role',
				content:
					'As Hardware Lead, I have led electronics and hardware work for the club’s University Rover Challenge entry.'
			},
			{
				title: 'Engineering constraints',
				content:
					'The architecture must remain reliable and serviceable while supporting autonomous and remotely operated rover functions in field conditions.'
			}
		],
		media: []
	},
	{
		slug: 'tigerretail',
		name: 'TigerRetail',
		summary:
			'A Princeton marketplace for students to list, buy, sell, and request items within the university community.',
		category: ['Software', 'Product'],
		technologies: ['SvelteKit', 'PocketBase', 'SQLite', 'AWS Lambda', 'Tailwind CSS'],
		role: 'Full-stack developer',
		period: 'June — November 2023',
		status: 'completed',
		tier: 'strong',
		links: [{ label: 'TigerApps', href: 'https://tigerapps.org/' }],
		sections: [
			{
				title: 'Product',
				content:
					'TigerRetail provides a university-focused marketplace for listing, buying, selling, and requesting items.'
			},
			{
				title: 'Migration',
				content:
					'I helped migrate the stack from Django and MongoDB to SvelteKit, PocketBase, and SQLite.'
			},
			{
				title: 'Result',
				content:
					'The migration improved performance by more than 20% and reduced infrastructure costs by more than 25% for its small but consistent user base.'
			}
		],
		media: []
	},
	{
		slug: 'fintria',
		name: 'Fintria',
		summary:
			'An AI-powered finance interview preparation platform with personalized practice and feedback.',
		category: ['AI', 'Software', 'Product'],
		technologies: ['React', 'Vite', 'Firebase', 'OpenAI API', 'RAG', 'Stripe'],
		role: 'Full-stack AI product engineer',
		period: 'May — September 2025',
		status: 'completed',
		tier: 'strong',
		links: [{ label: 'Website', href: 'https://usefintria.com/' }],
		sections: [
			{
				title: 'Product',
				content:
					'Fintria delivers personalized mock interviews, résumé reviews, interactive learning modules, and assessments for finance interview preparation.'
			},
			{
				title: 'AI workflow',
				content:
					'I integrated retrieval-augmented generation to ground personalized practice and feedback in the platform’s learning content.'
			}
		],
		media: []
	},
	{
		slug: 'ket-academy',
		name: 'KET Academy',
		summary:
			'A learning platform supporting course delivery, resources, and administration for underserved students in Cameroon.',
		category: ['Software', 'Education'],
		technologies: ['React', 'Firebase', 'SCSS', 'Tailwind CSS'],
		role: 'Full-stack developer',
		period: 'June 2023 — Present',
		status: 'active',
		tier: 'strong',
		links: [{ label: 'Website', href: 'https://ket.academy/' }],
		sections: [
			{
				title: 'Mission',
				content:
					'KET Academy is designed around the realities of students and teachers in Cameroon, including familiar communication channels and local curriculum needs.'
			},
			{
				title: 'Platform',
				content:
					'I developed the learning management platform for course delivery, educational resources, and administrative workflows.'
			},
			{
				title: 'Reach',
				content:
					'The platform supports more than 1,000 underserved and internally displaced students in Cameroon.'
			}
		],
		media: [
			{
				type: 'image',
				src: '/images/ket/image.png',
				alt: 'KET Academy platform shown on a laptop',
				caption: 'KET Academy learning platform',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/ket/home.png',
				alt: 'KET Academy home page',
				caption: 'Student-facing home page'
			},
			{
				type: 'image',
				src: '/images/ket/auth.png',
				alt: 'KET Academy authentication screen',
				caption: 'Authentication flow'
			},
			{
				type: 'image',
				src: '/images/ket/about.png',
				alt: 'KET Academy about page',
				caption: 'About page'
			},
			{
				type: 'image',
				src: '/images/ket/404.png',
				alt: 'KET Academy 404 page',
				caption: '404 state'
			}
		]
	},
	{
		slug: 'robocubs-firmware',
		name: 'RoboCubs Firmware',
		summary:
			'Firmware and systems integration for competitive multi-agent robotic soccer.',
		category: ['Robotics', 'Embedded'],
		technologies: ['Firmware', 'Sensors', 'Actuators', 'Real-time systems'],
		role: 'Software lead',
		period: 'September 2023 — September 2025',
		status: 'completed',
		tier: 'strong',
		links: [{ label: 'Robotics Club', href: 'https://club.robotics.princeton.edu/' }],
		sections: [
			{
				title: 'Team',
				content:
					'I led a ten-member RoboCup Small Size League software team developing system architecture and machine-learning models for competitive multi-agent robotic soccer.'
			},
			{
				title: 'Engineering focus',
				content:
					'The work connected robot firmware, sensors, actuators, real-time behavior, and higher-level multi-agent strategy.'
			}
		],
		media: []
	},
	{
		slug: 'carlab',
		name: 'CarLab',
		summary:
			'A voice-controlled holonomic robot that interprets conversational commands through an LLM and executes physical actions on a Raspberry Pi–driven omni car.',
		category: ['Robotics', 'Embedded', 'AI'],
		technologies: [
			'Python',
			'Raspberry Pi',
			'OpenCV',
			'LangChain',
			'Whisper',
			'Google Gemini',
			'Deepgram',
			'GPIO'
		],
		role: 'Robotics and systems engineer',
		period: 'Fall 2025',
		status: 'completed',
		tier: 'strong',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/carlab' }],
		sections: [
			{
				title: 'Project context',
				content:
					'CarLab was my ECE 302 final project at Princeton: a small mobile robot with pet-like behavior that responds to ambiguous, conversational human commands. Built with Erik Lawani, the goal was to blend embedded motor control, light computer vision, and natural-language reasoning into one physical system.'
			},
			{
				title: 'Architecture',
				content:
					'The system runs on a modular pipeline—microphone input, speech-to-text, an LLM action planner, text-to-speech output, and an action engine that maps structured commands to movement. A priority-based controller manager lets gamepad, keyboard, OpenCV vision, and LLM inputs coexist, with manual control able to override autonomous modes.'
			},
			{
				title: 'Hardware',
				content:
					'The platform is a SuperDroid 3-wheel omni (Kiwi) drive car—fully holonomic with wheels spaced 120° apart—controlled from a Raspberry Pi 4 with a Pi Camera, Adafruit I2S MEMS microphone, speaker, and PWM motor drivers.'
			},
			{
				title: 'Capabilities',
				content:
					'The car can step, turn, spin in place, speak responses, capture photos, follow ArUco markers, and execute higher-level skills like maze navigation via audio directions, patterned driving, and object tracking. The LLM validates whether a request is achievable before generating a structured action plan.'
			}
		],
		media: []
	},
	{
		slug: 'parceflyte',
		name: 'Parceflyte',
		summary:
			'A peer-to-peer delivery concept connecting package senders with travelers who have unused luggage capacity.',
		category: ['Software', 'Startup'],
		technologies: ['React Native', 'Next.js', 'TypeScript', 'Marketplace design'],
		role: 'Product builder',
		period: '2024',
		status: 'concept',
		tier: 'strong',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/parceflyte-v1' }],
		sections: [
			{
				title: 'Concept',
				content:
					'Parceflyte explores a trusted marketplace where travelers can hand-carry parcels along routes they already plan to take.'
			},
			{
				title: 'Product questions',
				content:
					'The concept centers on matching, trust, logistics, traveler capacity, and the experience of coordinating a peer-to-peer delivery.'
			}
		],
		media: []
	},
	{
		slug: 'worklin',
		name: 'Worklin',
		summary: 'A Django attendance system with geolocation verification and administrative reporting.',
		category: ['Software'],
		technologies: ['Django', 'jQuery', 'HTML', 'Tailwind CSS'],
		role: 'Full-stack developer',
		period: '2023',
		status: 'archive',
		tier: 'archive',
		links: [
			{
				label: 'Live demo',
				href: 'https://vtcinternationale.pythonanywhere.com/'
			}
		],
		sections: [
			{
				title: 'Overview',
				content:
					'Worklin was an early business-software prototype for recording attendance and verifying location.'
			}
		],
		media: [
			{
				type: 'image',
				src: '/images/vtc/home.png',
				alt: 'Worklin home page',
				caption: 'Home page',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/vtc/dash.png',
				alt: 'Worklin dashboard',
				caption: 'Attendance dashboard'
			},
			{
				type: 'image',
				src: '/images/vtc/auth.png',
				alt: 'Worklin authentication screen',
				caption: 'Authentication'
			}
		]
	},
	{
		slug: 'kingston-library',
		name: 'Kingston Library',
		summary: 'A Java desktop application for library accounts, catalogs, and daily operations.',
		category: ['Desktop', 'Software'],
		technologies: ['Java', 'JavaFX', 'MySQL'],
		role: 'Application developer',
		period: '2023',
		status: 'archive',
		tier: 'archive',
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/glennfor/library-management-system'
			}
		],
		sections: [
			{
				title: 'Overview',
				content:
					'The application brings book management, accounts, profiles, notifications, and routine library workflows into a Java desktop interface.'
			}
		],
		media: [
			{
				type: 'image',
				src: '/images/lib/Screenshot (34).png',
				alt: 'Kingston Library welcome page',
				caption: 'Welcome page',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/lib/Screenshot (36).png',
				alt: 'Kingston Library create account screen',
				caption: 'Create account'
			},
			{
				type: 'image',
				src: '/images/lib/Screenshot (37).png',
				alt: 'Kingston Library login screen',
				caption: 'Login'
			},
			{
				type: 'image',
				src: '/images/lib/Screenshot (55).png',
				alt: 'Kingston Library dashboard',
				caption: 'Dashboard'
			},
			{
				type: 'image',
				src: '/images/lib/Screenshot (40).png',
				alt: 'Kingston Library profile screen',
				caption: 'Profile'
			},
			{
				type: 'image',
				src: '/images/lib/Screenshot (51).png',
				alt: 'Kingston Library books catalogue',
				caption: 'Books catalog'
			}
		]
	},
	{
		slug: 'slide-puzzle',
		name: 'Slide Puzzle',
		summary: 'A Windows command-line sliding puzzle with interactive play and automatic solving.',
		category: ['Systems', 'Game'],
		technologies: ['C++'],
		status: 'archive',
		tier: 'archive',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/CLI-SlizePuzzle' }],
		sections: [{ title: 'Overview', content: 'An early C++ exercise in game state and search.' }],
		media: [
			{
				type: 'image',
				src: '/images/slide-puzzle/intro.png',
				alt: 'Slide puzzle intro screen',
				caption: 'Intro',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/slide-puzzle/solving.png',
				alt: 'Slide puzzle automatic solver in progress',
				caption: 'Automatic puzzle solving'
			},
			{
				type: 'image',
				src: '/images/slide-puzzle/solved.png',
				alt: 'Slide puzzle solved state',
				caption: 'Solved'
			},
			{
				type: 'video',
				src: '/images/slide-puzzle/demo.mp4',
				poster: '/images/slide-puzzle/intro.png',
				captionsSrc: '/design-assets/media/slide-puzzle.vtt',
				alt: 'Demo of the slide puzzle game and solver',
				caption: 'Game and solver demonstration',
				aspectRatio: '16 / 9'
			}
		]
	},
	{
		slug: 'tic-tac-toe',
		name: 'Tic-Tac-Toe',
		summary: 'A C++ terminal game with a computer opponent driven by minimax.',
		category: ['Systems', 'Game'],
		technologies: ['C++', 'Minimax'],
		status: 'archive',
		tier: 'archive',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/Tic-Tac-Toe' }],
		sections: [
			{ title: 'Overview', content: 'An early game project focused on state and decision trees.' }
		],
		media: [
			{
				type: 'image',
				src: '/images/ttt/Screenshot (25).png',
				alt: 'Tic-Tac-Toe home screen',
				caption: 'Home',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/ttt/Screenshot (28).png',
				alt: 'Tic-Tac-Toe player selection',
				caption: 'Choose player'
			},
			{
				type: 'image',
				src: '/images/ttt/Screenshot (30).png',
				alt: 'Tic-Tac-Toe game in progress',
				caption: 'Gameplay'
			},
			{
				type: 'image',
				src: '/images/ttt/Screenshot (31).png',
				alt: 'Tic-Tac-Toe loss screen',
				caption: 'Game over'
			}
		]
	},
	{
		slug: 'chess',
		name: 'Chess',
		summary: 'A custom chess game and engine with a native graphical board.',
		category: ['Systems', 'Game'],
		technologies: ['C', 'Graphics'],
		status: 'archive',
		tier: 'archive',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/chess' }],
		sections: [
			{ title: 'Overview', content: 'An early native graphics project exploring board-game rules.' }
		],
		media: [
			{
				type: 'image',
				src: '/images/chess/2.png',
				alt: 'Chess game board at start',
				caption: 'Game start',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/chess/1.png',
				alt: 'Chess engine source code',
				caption: 'Engine code'
			}
		]
	},
	{
		slug: 'checkers',
		name: 'Checkers',
		summary: 'A two-player checkers implementation in Python with Pygame.',
		category: ['Software', 'Game'],
		technologies: ['Python', 'Pygame'],
		status: 'archive',
		tier: 'archive',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/Checkers' }],
		sections: [
			{ title: 'Overview', content: 'An early Python game focused on board-state rules.' }
		],
		media: [
			{
				type: 'image',
				src: '/images/checkers/init.png',
				alt: 'Checkers game interface',
				caption: 'Game UI',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/checkers/linting2.png',
				alt: 'Checkers highlighting legal moves',
				caption: 'Legal moves'
			},
			{
				type: 'image',
				src: '/images/checkers/king.png',
				alt: 'Checkers king piece',
				caption: 'King piece'
			},
			{
				type: 'image',
				src: '/images/checkers/checkmate.png',
				alt: 'Checkers game won',
				caption: 'Completed game'
			}
		]
	},
	{
		slug: 'shooter',
		name: 'Shooter',
		summary: 'A small two-dimensional shooter built with Python and Pygame.',
		category: ['Software', 'Game'],
		technologies: ['Python', 'Pygame'],
		status: 'archive',
		tier: 'archive',
		links: [{ label: 'GitHub', href: 'https://github.com/glennfor/Shooter' }],
		sections: [
			{ title: 'Overview', content: 'An early game-loop and graphics programming exercise.' }
		],
		media: [
			{
				type: 'image',
				src: '/images/shooter/game.png',
				alt: 'Shooter gameplay screen',
				caption: 'Gameplay',
				isFeatured: true
			},
			{
				type: 'image',
				src: '/images/shooter/end.png',
				alt: 'Shooter end screen',
				caption: 'Game ended'
			},
			{
				type: 'image',
				src: '/images/shooter/code.png',
				alt: 'Shooter source code',
				caption: 'Source'
			}
		]
	}
];
