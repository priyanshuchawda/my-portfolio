export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
