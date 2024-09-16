import React, { useState, useEffect } from 'react';

type Anchor = 'right';

interface DogProps {
  x: number;
  y: number;
  id: string;
}

const SleepingDog: React.FC<DogProps> = ({ x, y, id}) => {
  const [isPressed, setIsPressed] = useState(false); // State to track if the dog is pressed


  return (
    <img
      src={'Group_sleep.png'} // Toggle between the normal and pressed image
      alt={`Dog ${id}`}
      style={{
        width: '50px',
        height: '50px',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
        cursor: 'pointer', // Indicate clickable image
      }}
    />
  );
};

export default SleepingDog;
