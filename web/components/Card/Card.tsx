import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 rounded-md w-full h-full p-4">{children}</div>
  );
};

export default Card;
