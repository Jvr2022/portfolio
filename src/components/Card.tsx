import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
  delay?: number;
};

export const Card = ({ children, className = '', tiltAngle = 0, delay = 0 }: CardProps) => {
  return (
    <div 
      className={`cardboard-box ${className}`} 
      style={{ 
        transform: tiltAngle ? `rotate(${tiltAngle}deg)` : 'none',
        animation: `dropIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s backwards`
      }}
    >
      {children}
    </div>
  );
};
