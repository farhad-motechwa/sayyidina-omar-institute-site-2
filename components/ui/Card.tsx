
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-amber-400/10 transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
