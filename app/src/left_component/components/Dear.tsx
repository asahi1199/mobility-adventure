import React from 'react';

interface DogProps {
  x: number;
  y: number;
  id: string;
}

const Dog: React.FC<DogProps> = ({ x, y, id }) => {
  return (
    <img
      src="dog.png" // Replace this with your actual dog image URL
      alt={`Dog ${id}`}
      style={{
        width: '50px',
        height: '50px',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
      }}
    />
  );
};

export default Dog;
