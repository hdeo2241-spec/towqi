
export interface Project {
  id: string;
  title: string;
  description: string;
  // Added 'Technical' to the allowed categories for projects
  category: 'Web' | 'Mobile' | 'AI' | 'Design' | 'Technical';
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Creative' | 'Business';
  level: number; // 0-100
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}