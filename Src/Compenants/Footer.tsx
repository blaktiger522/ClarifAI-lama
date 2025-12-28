import React from 'react';
import { Home, Clock, Settings } from 'lucide-react';

interface FooterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ activeTab, onTabChange, darkMode = false }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-t px-6 py-3`}>
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all ${
                isActive 
                  ? 'text-purple-600' 
                  : darkMode 
                    ? 'text-gray-400 hover:text-gray-200' 
                    : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : ''}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-purple-600' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;