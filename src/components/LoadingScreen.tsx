import React from 'react';
import Logo from './Logo';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="relative">
        <div className="absolute -inset-x-20 -inset-y-16">
          <div className="absolute inset-0 bg-purple-600/20 blur-[50px] animate-pulse"></div>
          <div className="absolute inset-0 bg-purple-500/10 blur-[70px] animate-pulse delay-150"></div>
        </div>
        <div className="relative flex flex-col items-center">
          <Logo className="h-16 w-auto text-purple-400 animate-float" />
          <div className="mt-8 flex space-x-2">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-150"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
