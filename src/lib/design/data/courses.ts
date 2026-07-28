import type { DesignCourse } from './types';

export const courses: Array<DesignCourse> = [
	{
		code: 'EGR 150',
		name: 'Foundations of Engineering',
		academicYear: 'Pre-college',
		term: 'Summer 2023',
		category: 'foundations',
		status: 'completed',
		summary: 'An intensive introduction to engineering design, analysis, prototyping, and teamwork.',
		topics: ['Engineering design', 'Prototyping', 'Teamwork'],
		skills: [
			{
				name: 'Arduino',
				detail: 'Prototyped early electromechanical systems and sensor-driven behaviors in team design work.'
			},
			{
				name: 'Onshape',
				detail: 'Drafted simple mechanical parts and assemblies for summer engineering design projects.'
			}
		]
	},
	{
		code: 'PHY 103',
		name: 'General Physics I',
		academicYear: 'First year',
		term: 'Fall 2023',
		category: 'foundations',
		status: 'completed',
		summary: 'Mechanics, energy, momentum, rotation, and the mathematical models behind physical systems.',
		topics: ['Mechanics', 'Dynamics', 'Energy'],
		skills: [
			{
				name: 'MATLAB',
				detail: 'Used numerical analysis and plotting to check mechanics models against problem sets and labs.'
			}
		]
	},
	{
		code: 'MAT 201',
		name: 'Multivariable Calculus',
		academicYear: 'First year',
		term: 'Fall 2023',
		category: 'foundations',
		status: 'completed',
		summary: 'Vector calculus, partial derivatives, multiple integrals, and optimization in several variables.',
		topics: ['Vector calculus', 'Optimization', 'Multivariable analysis']
	},
	{
		code: 'COS 126',
		name: 'Computer Science: An Interdisciplinary Approach',
		academicYear: 'First year',
		term: 'Fall 2023',
		category: 'cs',
		status: 'completed',
		summary: 'Programming, abstraction, data, and computational problem solving across scientific domains.',
		topics: ['Java', 'Programming', 'Data structures'],
		skills: [
			{
				name: 'Java',
				detail: 'Built programs, abstractions, and early algorithmic assignments that became my first CS foundation.'
			}
		]
	},
	{
		code: 'PHY 104',
		name: 'Electricity and Magnetism',
		academicYear: 'First year',
		term: 'Spring 2024',
		category: 'foundations',
		status: 'completed',
		summary: 'Electric and magnetic fields, circuits, induction, and Maxwell’s equations.',
		topics: ['Electromagnetism', 'Circuits', 'Fields'],
		skills: [
			{
				name: 'MATLAB',
				detail: 'Simulated field and circuit behavior and visualized EM problem solutions numerically.'
			}
		]
	},
	{
		code: 'MAT 202',
		name: 'Linear Algebra',
		academicYear: 'First year',
		term: 'Spring 2024',
		category: 'foundations',
		status: 'completed',
		summary: 'Vector spaces, linear transformations, eigenvalues, and matrix methods used across engineering.',
		topics: ['Linear algebra', 'Matrices', 'Eigenvalues'],
		skills: [
			{
				name: 'MATLAB',
				detail: 'Worked matrix factorizations, eigenvalues, and linear systems with computational linear algebra tools.'
			}
		]
	},
	{
		code: 'COS 226',
		name: 'Algorithms and Data Structures',
		academicYear: 'First year',
		term: 'Spring 2024',
		category: 'cs',
		status: 'completed',
		summary: 'Efficient algorithms and data structures for searching, sorting, graphs, and string processing.',
		topics: ['Algorithms', 'Data structures', 'Graphs'],
		leadershipSlug: 'princeton-cs-ta',
		skills: [
			{
				name: 'Java',
				detail:
					'Implemented sorting, searching, graph, and string-processing structures; later returned as a lab TA for the course.'
			}
		]
	},
	{
		code: 'ECE 206',
		name: 'Contemporary Logic Design',
		academicYear: 'Sophomore',
		term: 'Fall 2024',
		category: 'ece',
		status: 'completed',
		summary: 'Combinational and sequential digital systems built from logic through hardware description.',
		topics: ['Digital logic', 'Verilog', 'Finite-state machines'],
		skills: [
			{
				name: 'Proteus',
				detail: 'Simulated combinational and sequential digital systems while validating logic and timing behavior.'
			},
			{
				name: 'C',
				detail: 'Wrote supporting software and test harnesses around digital-design assignments and demos.'
			}
		]
	},
	{
		code: 'ECE 203',
		name: 'Electronic Circuit Design, Analysis and Implementation',
		academicYear: 'Sophomore',
		term: 'Fall 2024',
		category: 'ece',
		status: 'completed',
		summary: 'Analysis and hands-on design of analog electronic circuits and active devices.',
		topics: ['Analog circuits', 'Electronics', 'Circuit design'],
		skills: [
			{
				name: 'KiCad',
				detail: 'Designed and documented analog circuit boards and component layouts for lab implementations.'
			},
			{
				name: 'MATLAB',
				detail: 'Analyzed transfer functions, frequency response, and measured circuit behavior against models.'
			}
		]
	},
	{
		code: 'COS 217',
		name: 'Introduction to Programming Systems',
		academicYear: 'Sophomore',
		term: 'Fall 2024',
		category: 'cs',
		status: 'completed',
		summary: 'Systems programming in C, memory management, assembly, Unix tooling, and software interfaces.',
		topics: ['C', 'Assembly', 'Systems programming'],
		leadershipSlug: 'princeton-cs-ta',
		skills: [
			{
				name: 'C',
				detail:
					'Built systems programs with explicit memory management, modular interfaces, and low-level debugging; later TA’d the labs.'
			},
			{
				name: 'Linux',
				detail: 'Used Unix tooling, shell workflows, and process/memory debugging throughout the programming-systems stack.'
			},
			{
				name: 'Git',
				detail: 'Managed assignment workflows, diffs, and collaborative debugging with version control.'
			}
		]
	},
	{
		code: 'ECE 201',
		name: 'Information Signals',
		academicYear: 'Sophomore',
		term: 'Fall 2024',
		category: 'ece',
		status: 'completed',
		summary: 'Continuous and discrete signals, transforms, filtering, sampling, and communication fundamentals.',
		topics: ['Signals', 'Fourier analysis', 'Filtering'],
		skills: [
			{
				name: 'MATLAB',
				detail: 'Implemented filters, transforms, and sampling experiments for continuous and discrete signal analysis.'
			},
			{
				name: 'Python',
				detail: 'Prototyped signal-processing notebooks and visualization for homework and lab comparisons.'
			}
		]
	},
	{
		code: 'MAE 305',
		name: 'Mathematics in Engineering I',
		academicYear: 'Sophomore',
		term: 'Spring 2025',
		category: 'foundations',
		status: 'completed',
		summary: 'Differential equations, transform methods, and numerical tools for engineering models.',
		topics: ['Differential equations', 'Numerical methods', 'Transforms'],
		skills: [
			{
				name: 'MATLAB',
				detail: 'Solved ODEs, Laplace-domain models, and numerical engineering systems with computational methods.'
			}
		]
	},
	{
		code: 'COS 324',
		name: 'Introduction to Machine Learning',
		academicYear: 'Sophomore',
		term: 'Spring 2025',
		category: 'robotics',
		status: 'completed',
		summary: 'Supervised and unsupervised learning, probabilistic models, optimization, and evaluation.',
		topics: ['Machine learning', 'Optimization', 'Probabilistic models'],
		skills: [
			{
				name: 'Python',
				detail: 'Implemented supervised and unsupervised learning pipelines, evaluation metrics, and model experiments.'
			},
			{
				name: 'JAX',
				detail: 'Used autodiff and array programming for optimization-heavy machine-learning assignments.'
			},
			{
				name: 'XGBoost',
				detail: 'Benchmarked gradient-boosted models against simpler baselines for tabular prediction tasks.'
			}
		]
	},
	{
		code: 'ECE 302',
		name: 'Robotic and Autonomous Systems Lab',
		academicYear: 'Junior',
		term: 'Fall 2025',
		category: 'robotics',
		status: 'completed',
		summary: 'A project-driven robotics lab spanning sensing, estimation, control, and autonomous navigation.',
		topics: ['Robotics', 'Control', 'Autonomy'],
		projectSlug: 'carlab',
		isFeatured: true,
		skills: [
			{
				name: 'Python',
				detail:
					'Built the CarLab control stack—speech, planning, vision hooks, and action execution on the robot.'
			},
			{
				name: 'Raspberry Pi',
				detail: 'Ran onboard sensing, motor control, audio I/O, and LLM action planning on a Pi-driven omni car.'
			},
			{
				name: 'Git',
				detail: 'Collaborated on modular robot software with versioned hardware/software integration milestones.'
			}
		]
	},
	{
		code: 'COS 484',
		name: 'Natural Language Processing',
		academicYear: 'Junior',
		term: 'Fall 2025',
		category: 'robotics',
		status: 'completed',
		summary: 'Computational methods for understanding and generating human language with modern models.',
		topics: ['Natural language processing', 'Transformers', 'Language models'],
		skills: [
			{
				name: 'Python',
				detail: 'Implemented NLP models, evaluation pipelines, and experiments around modern language representations.'
			},
			{
				name: 'RAG',
				detail: 'Explored retrieval-augmented generation patterns for grounding language-model outputs in external context.'
			}
		]
	},
	{
		code: 'COS 375',
		aliases: ['ECE 375'],
		name: 'Computer Architecture and Organization',
		academicYear: 'Junior',
		term: 'Fall 2025',
		category: 'ece',
		status: 'completed',
		summary: 'Processor organization, instruction sets, pipelines, memory hierarchies, and performance.',
		topics: ['Computer architecture', 'Processors', 'Memory systems'],
		isFeatured: true,
		skills: [
			{
				name: 'C',
				detail: 'Wrote low-level experiments that connected ISA concepts, memory behavior, and performance measurement.'
			},
			{
				name: 'Proteus',
				detail: 'Used architecture simulation and component-level reasoning to validate processor and memory concepts.'
			}
		]
	},
	{
		code: 'ECE 346',
		aliases: ['COS 348', 'MAE 346'],
		name: 'Intelligent Robotic Systems',
		academicYear: 'Junior',
		term: 'Fall 2025',
		category: 'robotics',
		status: 'completed',
		summary: 'Perception, planning, learning, and control for robots operating in uncertain environments.',
		topics: ['Robot learning', 'Planning', 'Perception'],
		projectSlug: 'adas-safety-filter',
		isFeatured: true,
		skills: [
			{
				name: 'Python',
				detail:
					'Built perception, planning, and control experiments that fed into the ADAS safety-filter project.'
			},
			{
				name: 'ROS 2',
				detail: 'Worked with robot middleware patterns for sensing, messaging, and autonomous control loops.'
			},
			{
				name: 'F1TENTH',
				detail: 'Applied autonomous-vehicle concepts around safety, planning, and real-time control under uncertainty.'
			}
		]
	},
	{
		code: 'EGR 380',
		name: 'eLab: Creating Value in the Real World',
		academicYear: 'Junior',
		term: '2025–26 · Year-long',
		category: 'foundations',
		status: 'completed',
		summary: 'A venture-building studio for customer discovery, product development, and company execution.',
		topics: ['Entrepreneurship', 'Product development', 'Customer discovery'],
		skills: [
			{
				name: 'Figma',
				detail: 'Designed product flows and interface explorations while iterating on customer discovery feedback.'
			},
			{
				name: 'TypeScript',
				detail: 'Prototyped product surfaces and application logic as the venture moved from concept to build.'
			}
		]
	},
	{
		code: 'COS 418',
		name: 'Distributed Systems',
		academicYear: 'Junior',
		term: 'Spring 2026',
		category: 'cs',
		status: 'completed',
		summary: 'Fault-tolerant distributed services, replication, consistency, consensus, and concurrency.',
		topics: ['Distributed systems', 'Consensus', 'Fault tolerance'],
		isFeatured: true,
		skills: [
			{
				name: 'Go',
				detail: 'Implemented replicated services, RPC, and concurrency patterns for fault-tolerant system labs.'
			},
			{
				name: 'Linux',
				detail: 'Debugged networked processes, failure modes, and concurrent services in Unix environments.'
			},
			{
				name: 'Microservices',
				detail: 'Designed service boundaries and communication patterns around consensus and replication assignments.'
			}
		]
	},
	{
		code: 'ECE 476',
		name: 'Parallel Computing: Principles, Systems and Programming',
		academicYear: 'Junior',
		term: 'Spring 2026',
		category: 'ece',
		status: 'completed',
		summary: 'Parallel architectures and programming models for scalable, high-performance computation.',
		topics: ['Parallel computing', 'GPU programming', 'Performance'],
		skills: [
			{
				name: 'CUDA',
				detail:
					'Wrote GPU kernels and memory-aware parallel programs to accelerate compute-heavy workloads and measure speedups.'
			},
			{
				name: 'C++',
				detail: 'Built host/device parallel programs and performance experiments across shared- and distributed-memory models.'
			},
			{
				name: 'Python',
				detail: 'Used Python tooling to benchmark kernels, plot scaling results, and compare parallel strategies.'
			}
		]
	},
	{
		code: 'ECE 398',
		name: 'Junior Independent Work Seminar',
		academicYear: 'Junior',
		term: 'Spring 2026',
		category: 'ece',
		status: 'completed',
		summary: 'Independent engineering research developed through technical writing and presentation.',
		topics: ['Research', 'Technical writing', 'Independent work'],
		skills: [
			{
				name: 'Python',
				detail: 'Prototyped and evaluated independent-research experiments while preparing technical reports.'
			},
			{
				name: 'Git',
				detail: 'Tracked research code, revisions, and experimental artifacts across the independent-work cycle.'
			}
		]
	},
	{
		code: 'ECE 498',
		name: 'Senior Thesis I',
		academicYear: 'Senior',
		term: 'Fall 2026',
		category: 'ece',
		status: 'planned',
		summary: 'The first phase of a year-long independent thesis in electrical and computer engineering.',
		topics: ['Research', 'Thesis', 'Engineering design']
	},
	{
		code: 'ECE 462',
		aliases: ['COS 462'],
		name: 'Design of Very Large-Scale Integrated Systems',
		academicYear: 'Senior',
		term: 'Fall 2026',
		category: 'ece',
		status: 'planned',
		summary: 'Digital integrated-circuit design from logic and layout through timing and verification.',
		topics: ['VLSI', 'Integrated circuits', 'Hardware design']
	},
	{
		code: 'ECE 475',
		name: 'Computer Architecture',
		academicYear: 'Senior',
		term: 'Fall 2026',
		category: 'ece',
		status: 'planned',
		summary: 'Advanced processor and memory-system design with quantitative performance analysis.',
		topics: ['Computer architecture', 'Processors', 'Performance']
	},
	{
		code: 'ECE 488',
		name: 'Fundamentals of Image Processing',
		academicYear: 'Senior',
		term: 'Fall 2026',
		category: 'robotics',
		status: 'planned',
		summary: 'Digital image representation, enhancement, filtering, restoration, and analysis.',
		topics: ['Image processing', 'Computer vision', 'Signals']
	},
	{
		code: 'PHY 208',
		name: 'Principles of Quantum Mechanics',
		academicYear: 'Senior',
		term: 'Fall 2026',
		category: 'foundations',
		status: 'planned',
		summary: 'Wave functions, operators, quantum states, and foundational models of microscopic systems.',
		topics: ['Quantum mechanics', 'Wave functions', 'Linear operators']
	},
	{
		code: 'ECE 499',
		name: 'Senior Thesis II',
		academicYear: 'Senior',
		term: 'Spring 2027',
		category: 'ece',
		status: 'planned',
		summary: 'Completion, evaluation, and defense of the year-long independent engineering thesis.',
		topics: ['Research', 'Thesis', 'Technical communication']
	},
	{
		code: 'CEE 374',
		name: 'Autonomous Fabrication and Robotics',
		academicYear: 'Senior',
		term: 'Spring 2027',
		category: 'robotics',
		status: 'planned',
		summary: 'Robotic fabrication systems connecting computational design with autonomous construction.',
		topics: ['Robotic fabrication', 'Automation', 'Computational design']
	},
	{
		code: 'ECE 431',
		name: 'Solar Energy Conversion',
		academicYear: 'Senior',
		term: 'Spring 2027',
		category: 'ece',
		status: 'planned',
		summary: 'Physical principles, device technologies, and system considerations for photovoltaic energy.',
		topics: ['Solar energy', 'Semiconductors', 'Energy systems']
	},
	{
		code: 'ECE 473',
		name: 'Elements of Tokenized Finance',
		academicYear: 'Senior',
		term: 'Spring 2027',
		category: 'cs',
		status: 'planned',
		summary: 'Technical foundations of digital assets, blockchains, market design, and tokenized systems.',
		topics: ['Blockchains', 'Distributed ledgers', 'Financial systems']
	}
];
