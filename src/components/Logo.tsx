import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://tse3.mm.bing.net/th?id=OIP.82p6pSdkdICVfBw1ojV2xgAAAA&pid=Api&P=0&h=180" 
      alt="Mobius by Gaian" 
      className={className}
    />
  );
};

export default Logo;
