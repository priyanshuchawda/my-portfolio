import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern React Portfolio with TypeScript',
    description: 'A comprehensive guide to creating a performant and beautiful portfolio website using React, TypeScript, and modern web technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
    url: '/blog/modern-react-portfolio'
  },
  {
    id: '2',
    title: 'Optimizing Web Performance with Vite',
    description: 'Learn how to leverage Vite\'s features to build lightning-fast web applications with optimal developer experience.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Vite', 'Performance', 'JavaScript'],
    url: '/blog/vite-optimization'
  },
  {
    id: '3',
    title: 'Creating Stunning 3D Animations with Three.js',
    description: 'A deep dive into creating immersive 3D experiences on the web using Three.js and React Three Fiber.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Three.js', '3D', 'Animation'],
    url: '/blog/threejs-animations'
  }
];

export function useBlogPosts() {
  const [posts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const filterPosts = (tag: string | null = null) => {
    if (!tag) return posts;
    return posts.filter(post => post.tags.includes(tag));
  };

  return { posts, loading, error, filterPosts };
}
