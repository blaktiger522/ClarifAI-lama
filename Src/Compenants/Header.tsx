import React from 'react';
import { Eye, Brain, Zap as ZapIcon, Camera as CameraIcon, FileText as FileTextIcon } from 'lucide-react';

interface HeaderProps {
  darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode = false }) => {
  return (
    <header className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4 py-6 shadow-2xl overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Design */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {/* Outer ring with animation */}
              <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-ping"></div>
              {/* Main logo container */}
              <div className="relative w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              {/* Small brain icon overlay */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Text Section */}
            <div>
              <div className="flex items-baseline space-x-2">
                <h1 className="text-white font-black text-3xl tracking-tight">ClarifAI</h1>
                <ZapIcon className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-green-300 text-xs font-bold tracking-wider uppercase">AI Vision</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-green-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-green-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-green-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Status and Actions */}
          <div className="flex items-center space-x-3">
            {/* Status badge */}
            <div className="hidden sm:flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white border-opacity-30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-white text-xs font-semibold">Online</span>
            </div>
            
            {/* Quick action buttons */}
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                <CameraIcon className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all">
                <FileTextIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;