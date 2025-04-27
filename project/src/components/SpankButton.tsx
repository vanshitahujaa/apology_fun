import React from 'react';
import { Cat } from 'lucide-react';

interface SpankButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export function SpankButton({ onClick, isActive }: SpankButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300 transform hover:scale-105 hover:rotate-2
        ${isActive 
          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
          : 'bg-white border border-gray-200 text-gray-700 hover:border-amber-200 hover:bg-amber-50'
        }
      `}
      aria-label="Spank Vansh"
    >
      <Cat size={16} className="animate-subtle-bounce" />
      <span>Spank Vansh</span>
    </button>
  );
}