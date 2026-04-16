import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type CardProps = {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
  delay?: number;
};

export const Card = ({ children, className = '', tiltAngle = 0, delay = 0 }: CardProps) => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div 
      ref={ref}
      className={`cardboard-box ${isVisible ? 'card-visible' : 'card-hidden'} ${className}`} 
      style={{ 
        transform: tiltAngle && isVisible ? `rotate(${tiltAngle}deg)` : 'none',
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};
