import React, { useState } from 'react';
import { MessageButton } from './MessageButton';
import { SpankButton } from './SpankButton';
import { ApologyMessage } from './ApologyMessage';
import { Heart } from 'lucide-react';

type Friend = 'default' | 'vada' | 'asukai' | 'vansh';

export function ApologyCard() {
  const [currentFriend, setCurrentFriend] = useState<Friend>('default');
  const [isSpanking, setIsSpanking] = useState(false);

  const handleSpankVansh = () => {
    setCurrentFriend('vansh');
    setIsSpanking(true);
    setTimeout(() => setIsSpanking(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-xl">
      {/* Header with subtle pattern */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <Heart
              key={i}
              size={24}
              className="absolute text-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
                transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
              }}
            />
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center relative z-10">
          I'm Sorry I've Been Silent
        </h1>
        <p className="text-white/80 text-center mt-2 relative z-10">
          Sometimes life gets in the way, but that's no excuse for not responding.
        </p>
      </div>

      {/* Message area */}
      <div className="p-6 min-h-[250px] flex flex-col justify-between">
        <ApologyMessage friend={currentFriend} isSpanking={isSpanking} />
        
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-700 mb-3 text-center">
            Choose a friend to apologize to:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <MessageButton
              friend="vada"
              onClick={() => setCurrentFriend('vada')}
              isActive={currentFriend === 'vada'}
            />
            <MessageButton
              friend="asukai"
              onClick={() => setCurrentFriend('asukai')}
              isActive={currentFriend === 'asukai'}
            />
            <SpankButton onClick={handleSpankVansh} isActive={currentFriend === 'vansh'} />
          </div>
        </div>
      </div>
    </div>
  );
}