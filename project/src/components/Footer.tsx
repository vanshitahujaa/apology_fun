import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-10 text-center text-gray-500 text-sm">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> for my friends
      </p>
    </footer>
  );
}