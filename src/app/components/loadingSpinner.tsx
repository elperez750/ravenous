import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray"></div>
    </div>
  );
};

export default LoadingSpinner;
