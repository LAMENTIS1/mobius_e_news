import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://mobius.gaian.com/logo.png" 
      alt="Mobius by Gaian" 
      className={className}
    />
  );
};

export default Logo;