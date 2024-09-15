import React, { useEffect, useState } from 'react';
import Arrow from '../map_component/Arrow';

type Anchor = 'right';
interface DogProps {
  id: string;
  x: number;
  y: number;
  f: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const Dog: React.FC<DogProps> = ({ x, y, id , f}) => {
  return (
    <img
      src="dog.png" // Replace this with your actual dog image URL
      alt={`Dog ${id}`}
      onClick={f('right', true)}
      style={{
        width:'50px',
        height:'50px',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'left 0.2s, top 0.2s', // Smooth transition
      }}
    />
  );
};

export default Dog;
