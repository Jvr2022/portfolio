type TapeProps = {
  position?: 'top-center' | 'corner-tr' | 'corner-tl';
  className?: string;
};

export const Tape = ({ position = 'top-center', className = '' }: TapeProps) => {
  let positionClass = '';
  if (position === 'corner-tr') positionClass = 'corner-tr';
  if (position === 'corner-tl') positionClass = 'corner-tl';

  return (
    <div className={`cardboard-tape ${positionClass} ${className}`}></div>
  );
};
