import React, { useState } from 'react';
import '@/components/Heart.css';

interface HeartProps {
    fill: string;
    size: number;
    votes: number;
    onVote: () => void;
}


const Heart = ({ fill, size, votes, onVote } : HeartProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      onVote();
      setIsClicked(true);
    }
  };

  return (
    <svg
      onClick={handleClick}
      className={`heart ${isClicked ? 'clicked' : ''}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <span>{votes}</span>  
    </svg>
  );
};

export default Heart;
