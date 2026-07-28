export type DesignLink = {
	label: string;
	href: string;
};

export type DesignAccent =
	| 'software'
	| 'ai'
	| 'robotics'
	| 'hardware'
	| 'research'
	| 'leadership';

export type DesignLogo = {
	src: string;
	alt: string;
};

export type DesignMedia =
	| {
			type: 'image';
			src: string;
			alt: string;
			caption?: string;
			aspectRatio?: string;
			isFeatured?: boolean;
	  }
	| {
			type: 'video';
			src: string;
			poster?: string;
			captionsSrc: string;
			alt: string;
			caption?: string;
			aspectRatio?: string;
			isFeatured?: boolean;
	  };

export type DesignProfile = {
	name: string;
	shortName: string;
	headline: string;
	introduction: string;
	location: string;
	email: string;
	personalEmail: string;
	education: {
		institution: string;
		degree: string;
		minors: Array<string>;
		graduation: string;
	};
	links: {
		github: string;
		linkedin: string;
		resume: string;
	};
};

export type DesignCourseCategory = 'foundations' | 'cs' | 'ece' | 'robotics';

export type DesignCourseSkill = {
	name: string;
	detail: string;
};

export type DesignCourse = {
	code: string;
	aliases?: Array<string>;
	name: string;
	academicYear: 'Pre-college' | 'First year' | 'Sophomore' | 'Junior' | 'Senior';
	term: string;
	category: DesignCourseCategory;
	status: 'completed' | 'planned';
	summary: string;
	topics?: Array<string>;
	skills?: Array<DesignCourseSkill>;
	projectSlug?: string;
	leadershipSlug?: string;
	isFeatured?: boolean;
};

export type DesignExperience = {
	slug: string;
	organization: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	summary: string;
	contributions: Array<string>;
	technologies: Array<string>;
	priority: 'primary' | 'secondary';
	logo?: DesignLogo;
	accent?: DesignAccent;
};

export type DesignProjectSection = {
	title: string;
	content: string;
};

export type DesignProject = {
	slug: string;
	name: string;
	summary: string;
	category: Array<string>;
	technologies: Array<string>;
	role?: string;
	period?: string;
	status: 'active' | 'completed' | 'research' | 'concept' | 'archive';
	tier: 'featured' | 'strong' | 'archive';
	links: Array<DesignLink>;
	sections: Array<DesignProjectSection>;
	media: Array<DesignMedia>;
	accent?: DesignAccent;
};

export type DesignLeadership = {
	slug: string;
	organization: string;
	role: string;
	period: string;
	kind: 'Leadership' | 'Teaching' | 'Research';
	summary: string;
	contributions: Array<string>;
	technologies: Array<string>;
	logo?: DesignLogo;
	accent?: DesignAccent;
};

export type DesignSkillGroup = {
	name: string;
	items: Array<string>;
};

export type DesignSkill = {
	slug: string;
	name: string;
	group: string;
	summary: string;
};
