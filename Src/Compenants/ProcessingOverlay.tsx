import React from 'react';

interface ProcessingOverlayProps {
  message?: string;
  darkMode?: boolean;
}

const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ 
  message = 'Processing Image...', 
  darkMode = false 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 text-center max-w-sm mx-4`}>
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className={`${darkMode ? 'text-white' : 'text-black'} font-semibold mb-2`}>{message}</p>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Please wait while we extract text from your image...</p>
      </div>
    </div>
  );
};

export default ProcessingOverlay;