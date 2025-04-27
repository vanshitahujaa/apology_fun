import React from 'react';

interface CatAnimationProps {
  isSpanking: boolean;
}

export function CatAnimation({ isSpanking }: CatAnimationProps) {
  return (
    <div className="relative w-40 h-40">
      {/* Cat body */}
      <div className="absolute w-32 h-24 bg-amber-200 rounded-3xl top-12 left-4 transform-gpu perspective-500 rotate-x-10 shadow-lg"></div>
      
      {/* Cat head */}
      <div className="absolute w-20 h-16 bg-amber-200 rounded-full top-4 left-10 z-10 transform-gpu perspective-500">
        {/* Ears */}
        <div className="absolute w-6 h-8 bg-amber-300 -top-4 left-2 rounded-tl-full rounded-tr-full transform rotate-[-20deg]"></div>
        <div className="absolute w-6 h-8 bg-amber-300 -top-4 right-2 rounded-tl-full rounded-tr-full transform rotate-[20deg]"></div>
        
        {/* Eyes */}
        <div className="absolute w-3 h-5 bg-gray-800 top-6 left-5 rounded-full"></div>
        <div className="absolute w-3 h-5 bg-gray-800 top-6 right-5 rounded-full"></div>
        
        {/* Nose */}
        <div className="absolute w-3 h-2 bg-pink-400 top-10 left-8 rounded-full"></div>
      </div>
      
      {/* Cat tail */}
      <div 
        className={`absolute w-16 h-3 bg-amber-300 top-20 -right-2 rounded-full origin-left
          ${isSpanking ? 'animate-tail-wag' : 'transform rotate-[20deg]'}`}
      ></div>
      
      {/* Cat arm for spanking */}
      <div 
        className={`absolute w-12 h-3 bg-amber-200 top-16 left-8 rounded-full origin-left z-20
          ${isSpanking ? 'animate-spanking-arm' : 'transform rotate-[-30deg]'}`}
      ></div>
    </div>
  );
}