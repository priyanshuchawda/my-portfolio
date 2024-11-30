import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingState from '../shared/LoadingState';

interface Contribution {
  date: string;
  count: number;
}

const GitHubActivity = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGitHubActivity();
  }, []);

  const fetchGitHubActivity = async () => {
    try {
      const username = 'priyanshuchawda';
      const response = await fetch(`https://api.github.com/users/${username}/events/public`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub activity');
      }

      const data = await response.json();
      
      // Process the data to get contribution counts by date
      const contributionMap = new Map<string, number>();
      
      data.forEach((event: any) => {
        const date = event.created_at.split('T')[0];
        contributionMap.set(date, (contributionMap.get(date) || 0) + 1);
      });

      const sortedContributions = Array.from(contributionMap.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setContributions(sortedContributions);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingState text="Loading GitHub activity..." />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        GitHub Activity
      </h3>
      
      <div className="grid grid-cols-7 gap-2">
        {contributions.map((contribution, index) => (
          <motion.div
            key={contribution.date}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="relative group"
          >
            <div
              className={`w-full pb-[100%] rounded-sm ${
                contribution.count === 0
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : contribution.count < 3
                  ? 'bg-green-200 dark:bg-green-900'
                  : contribution.count < 5
                  ? 'bg-green-400 dark:bg-green-700'
                  : 'bg-green-600 dark:bg-green-500'
              }`}
            />
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {contribution.count} contributions on {contribution.date}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-end">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Less</span>
          <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm" />
          <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-sm" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivity;
