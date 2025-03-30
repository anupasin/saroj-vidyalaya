import React from 'react';

const LotusIcon = ({ className, width = 40, height = 40 }) => {
  return (
    <img 
      src="/images/lotus-icon.png" 
      alt="Lotus Icon" 
      width={width} 
      height={height} 
      className={className} 
    />
  );
};

export default LotusIcon;
