export interface SkillItem {
  name: string;
  level?: string; // e.g., "Basic", "Conceptual", "Learning"
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  iconName: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: 'Practice' | 'Learning' | 'Coursework';
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}