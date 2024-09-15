import React from 'react';

interface DotProps {
  x: number;
  y: number;
}

const Dot: React.FC<DotProps> = ({ x, y }) => {
  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'left 0.2s, top 0.2s', // Smooth transition
      }}
    />
  );
};

export default Dot;
