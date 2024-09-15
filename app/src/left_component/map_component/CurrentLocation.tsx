import React, { useState } from 'react';

interface CurrentLocationProps {
  x: number;
  y: number;
  move: (dx: number, dy: number) => void; // Function to move the location
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({ x, y, move }) => {
  return (
    <div
      onClick={() => move(10, 10)} // Example movement on click
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        cursor: 'pointer',
        transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
      }}
    />
  );
};

export default CurrentLocation;
