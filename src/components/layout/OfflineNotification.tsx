import { useOffline } from '../../hooks/useOffline';

export default function OfflineNotification() {
  const isOffline = useOffline();

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-lg z-50" role="alert">
      <div className="flex items-center">
        <div className="py-1">
          <svg className="h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">You are currently offline</p>
          <p className="text-sm">Some features may be limited until you restore your connection.</p>
        </div>
      </div> 
    </div>
  );
}
