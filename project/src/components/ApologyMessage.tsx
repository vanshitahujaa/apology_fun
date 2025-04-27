import React from 'react';
import { CatAnimation } from './CatAnimation';

interface ApologyMessageProps {
  friend: 'default' | 'vada' | 'asukai' | 'vansh';
  isSpanking: boolean;
}

export function ApologyMessage({ friend, isSpanking }: ApologyMessageProps) {
  const messages = {
    default: (
      <div className="text-center py-6 text-gray-600">
        <p className="mb-4 text-lg">
          I know I've been distant, and I want to make it right.
        </p>
        <p>
          Select a friend's name below to see my personal apology, or try the special Vansh button for a surprise!
        </p>
      </div>
    ),
    vada: (
      <div className="text-center py-6 animate-fade-in">
        <h3 className="text-xl font-bold text-indigo-600 mb-4">Dear Vada,</h3>
        <p className="mb-3">
          I'm truly sorry for disappearing on you. Your friendship means the world to me, and I've missed our conversations and laughter.
        </p>
        <p>
          I promise to be more present and responsive from now on. Your patience and understanding mean everything to me.
        </p>
      </div>
    ),
    asukai: (
      <div className="text-center py-6 animate-fade-in">
        <h3 className="text-xl font-bold text-pink-600 mb-4">Dear Asukai,</h3>
        <p className="mb-3">
          I deeply regret not being there when you reached out. Your messages brightened my days even when I didn't respond.
        </p>
        <p>
          I value our connection and will make a sincere effort to nurture our friendship going forward.
        </p>
      </div>
    ),
    vansh: (
      <div className="text-center py-2 animate-fade-in">
        <h3 className="text-xl font-bold text-amber-600 mb-4">Oh Vansh...</h3>
        <div className="flex justify-center mb-2">
          <CatAnimation isSpanking={isSpanking} />
        </div>
        <p className="mt-2">
          {isSpanking ? "That's what you get! 😼" : "This cat has something special for you..."}
        </p>
      </div>
    ),
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      {messages[friend]}
    </div>
  );
}