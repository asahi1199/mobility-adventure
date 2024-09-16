import React from 'react';

interface CurrentLocationProps {
  x: number;
  y: number;
  move: (dx: number, dy: number) => void; // Function to move the location
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({ x, y, move }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        cursor: 'pointer',
        transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
      }}
    >
      {/* Directional fading cone */}
      <div
        style={{
          position: 'absolute',
          top: '15px', // Bring it closer to the dot
          left: '-13px', // Adjusted to center the cone
          width: '60px', // Reduced width
          height: '80px', // Reduced height for smaller cone
          background: 'linear-gradient(rgba(0, 0, 255, 0.3), rgba(255, 255, 255, 0))', // Fading gradient effect
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle shape
        }}
      />
      {/* Dot */}
      <div
        onClick={() => move(10, 10)} // Example movement on click
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          border: '2px solid white', // Adding a white border for emphasis like in the image
          position: 'relative', // Keep the dot on top of the cone
          zIndex: 1, // Ensure the dot is above the cone
        }}
      />
    </div>
  );
};

export default CurrentLocation;
