import React from 'react';
import { MessageSquare } from 'lucide-react';

interface MessageButtonProps {
  friend: string;
  onClick: () => void;
  isActive: boolean;
}

export function MessageButton({ friend, onClick, isActive }: MessageButtonProps) {
  const capitalizedFriend = friend.charAt(0).toUpperCase() + friend.slice(1);
  
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300 transform hover:scale-105
        ${isActive 
          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
          : 'bg-white border border-gray-200 text-gray-700 hover:border-indigo-200 hover:bg-indigo-50'
        }
      `}
    >
      <MessageSquare size={16} />
      <span>Sorry {capitalizedFriend}</span>
    </button>
  );
}