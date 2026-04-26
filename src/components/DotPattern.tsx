import React from 'react';

interface DotPatternProps {
  className?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute pointer-events-none opacity-[0.035] dark:opacity-[0.06] ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    />
  );
};

export default DotPattern;
