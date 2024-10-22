import React from 'react';

interface TranslationProgressProps {
  progress: number;
}

const TranslationProgress: React.FC<TranslationProgressProps> = ({ progress }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-indigo-700">Translating...</span>
        <span className="text-sm font-medium text-indigo-700">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TranslationProgress;