
import React from 'react';
import { Project, Experience, Skill, Testimonial, Service, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Web Landing Page',
    description: 'A clean and responsive web structure built using basic HTML and CSS principles, focusing on layout and aesthetics.',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['HTML', 'CSS', 'UI Design'],
    link: '#'
  },
  {
    id: '2',
    title: 'Visual Storytelling Project',
    description: 'Post-production work involving basic video editing techniques, color correction, and pacing using DaVinci Resolve.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    tags: ['DaVinci Resolve', 'Video Editing'],
    link: '#'
  },
  {
    id: '3',
    title: 'Office Documentation Suite',
    description: 'Professional reports, spreadsheets, and presentations created using MS Word, Excel, and PowerPoint.',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800',
    tags: ['MS Office', 'Data Entry'],
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'HSC in Science Stream',
    company: 'Secondary and Higher Secondary Education Board',
    duration: 'Completed',
    achievements: [
      'Focused on physical sciences, mathematics, and analytical reasoning.',
      'Developed strong foundational logic and problem-solving skills through technical coursework.'
    ]
  },
  {
    id: 'e2',
    role: 'SSC in Science Stream',
    company: 'Secondary and Higher Secondary Education Board',
    duration: 'Completed',
    achievements: [
      'Successfully completed secondary education with a major in Science subjects.',
      'Recognized for consistent academic performance and technical aptitude.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'MS Office Suite', category: 'Technical', level: 95, icon: 'layout' },
  { name: 'Fast Typing', category: 'Technical', level: 90, icon: 'bar-chart' },
  { name: 'Basic Computer Operations', category: 'Technical', level: 95, icon: 'cpu' },
  { name: 'DaVinci Resolve', category: 'Creative', level: 70, icon: 'zap' },
  { name: 'Basic HTML', category: 'Technical', level: 75, icon: 'code' },
  { name: 'Spoken English & Bangla', category: 'Business', level: 85, icon: 'users' },
  { name: 'Teamwork & Collaboration', category: 'Business', level: 90, icon: 'target' },
  { name: 'Effective Communication', category: 'Business', level: 85, icon: 'search' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Academic Supervisor',
    role: 'Professor',
    company: 'Education Department',
    content: 'Twaqi is a dedicated student with a strong grasp of technical concepts. His ability to organize data and present information clearly is exceptional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Project Partner',
    role: 'Co-worker',
    company: 'Creative Team',
    content: 'An incredibly reliable teammate who excels in communication and teamwork. His basic video editing skills were a huge asset to our presentations.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Professional Documentation',
    description: 'Expert-level proficiency in MS Word, Excel, and PowerPoint for all your reporting and data management needs.',
    icon: 'layout'
  },
  {
    id: 's2',
    title: 'Basic Video Editing',
    description: 'Clean and engaging video edits using DaVinci Resolve, perfect for social media or corporate presentations.',
    icon: 'zap'
  },
  {
    id: 's3',
    title: 'Computer Operations',
    description: 'Highly efficient computer use with fast typing speeds and fundamental technical troubleshooting.',
    icon: 'cpu'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Essentials of Effective Documentation',
    excerpt: 'How mastering MS Office can boost your professional productivity and clarity in reporting.',
    date: 'June 15, 2024',
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    title: 'Getting Started with Video Editing',
    excerpt: 'A beginners guide to why DaVinci Resolve is the industry standard for creative visual work.',
    date: 'May 08, 2024',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600'
  }
];
