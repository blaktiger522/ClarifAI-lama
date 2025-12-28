import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accuracy: string;
  tags: string[];
  darkMode?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  accuracy, 
  tags, 
  darkMode = false 
}) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start space-x-3">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold text-sm mb-1`}>{title}</h4>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xs mb-2`}>{description}</p>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full font-medium">{accuracy}</span>
            {tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;