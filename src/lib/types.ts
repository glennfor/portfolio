export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export enum Category{
	Automation = "Automation",
	Robotics = "Robotics",
	Desktop = "Desktop",
	Mobile = "Mobile",
	System = "System",
	Game = "Game",
	Web = "Web",
	Cloud = "Cloud",
	IoT = "Internt of Things",
	Security = "Security",
	ML_AI = "ML and AI",
	Database="Database",
	WebScraping = "Web Scraping",
	CV = "Computer Vision",
	DS = "Data Science",
	CLI = "Command Line Application",
	Graphics2D = "2D graphics",
	Graphics3D = "3D graphics",
}

export type Asset = string | { light: string; dark: string };

export interface Item {
	slug: string;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface Skill extends Omit<Item, 'shortDescription'> {
	certifications?: Array<{
		by: string;
		certificate: string;
		date: Date;
	}>
	color: string;
	categories: Array<Category>;
}

export interface Tool extends Omit<Item, 'shortDescription'> {
	color: string;
	categories: Array<Category>;
}

export interface Project extends Item {
	links: Array<Link>;
	color: string;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill>;
	categories: Array<Category>;
}

export interface Experience extends  Omit<Project,  'shortDescription'> {
	company: string;
	location: string;
	contract: ContractType;
}



export interface Writing {
	featured: string;
	slug: string;
	title: string, 
	shortDescription: string;
	datePublished: Date;
	content: string;
	tags: Array<string>;
}

export interface PageParams {
	title: string;
}

export interface PageWithSearchParams<T> extends PageParams {
	items: Array<T>;
}

export interface HomeLink {
	platform: Platform;
	link: string;
}

export interface HomePageParams extends PageParams {
	name: string;
	lastName: string;
	description: string;
	links: Array<HomeLink>;
	skills?: Array<Skill>;
}




export type SearchPageParams = PageParams;

export type ProjectPageParams = PageWithSearchParams<Project>;

export type ExperiencePageParams = PageWithSearchParams<Experience>;

export type SkillsPageParams = PageWithSearchParams<Skill>;

export interface ResumePageParams extends PageParams {
	items: Array<Writing>;
}
