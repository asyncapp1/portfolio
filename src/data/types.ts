export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface TechnicalSkill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  link?: string;
  position: string;
  duration: string;
  location: string;
  remote?: boolean;
  description: string[];
  technologies?: string;
}

export interface Project {
  title: string;
  link?: string;
  duration: string;
  technologies: string;
  description: string[];
  liveLink?: string;
}

export interface Extracurricular {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  youtube: string;
  education: Education[];
  coursework: string[];
  technicalSkills: TechnicalSkill[];
  experiences: Experience[];
  projects: Project[];
  extracurricular: Extracurricular[];
} 