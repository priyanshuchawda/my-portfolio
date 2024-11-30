import { motion } from 'framer-motion';

interface LoadingStateProps {
  text?: string;
}

const LoadingState = ({ text = 'Loading...' }: LoadingStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className="w-12 h-12 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <p className="mt-4 text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
};

export default LoadingState;
