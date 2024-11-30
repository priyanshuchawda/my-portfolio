import { motion } from 'framer-motion';
import { blogImages } from '../../data/blogImages';

interface Category {
  title: string;
}

interface Post {
  id: string;
  title: string;
  excerpt: string;
  imageKey: keyof typeof blogImages;
  publishedAt: string;
  categories: Category[];
  url: string;
}

const BLOG_POSTS: Post[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'Learn how to create scalable and type-safe web applications using React and TypeScript.',
    imageKey: 'react-typescript',
    publishedAt: '2024-01-15',
    categories: [{ title: 'React' }, { title: 'TypeScript' }],
    url: 'https://dev.to/priyanshuchawda/post-1'
  },
  {
    id: '2',
    title: 'The Power of Tailwind CSS',
    excerpt: 'Discover how Tailwind CSS can streamline your styling workflow and boost productivity.',
    imageKey: 'tailwind',
    publishedAt: '2024-01-10',
    categories: [{ title: 'CSS' }, { title: 'Web Development' }],
    url: 'https://dev.to/priyanshuchawda/post-2'
  },
  {
    id: '3',
    title: 'Getting Started with Three.js and React Three Fiber',
    excerpt: 'Create amazing 3D experiences on the web using Three.js and React Three Fiber.',
    imageKey: 'threejs',
    publishedAt: '2024-01-05',
    categories: [{ title: '3D' }, { title: 'WebGL' }],
    url: 'https://dev.to/priyanshuchawda/post-3'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={blogImages[post.imageKey]}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((category) => (
                        <span
                          key={category.title}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
