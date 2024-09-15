import React from 'react';

interface ArrowProps {
    angle: number;
}

// Arrow component that follows a curved path
const Arrow: React.FC<ArrowProps> = ({angle}) => {
  return (
    <div style={{ position: 'relative', width: '200px', height: '150px' }}>
      {/* Curved dashed line */}
      <svg
        width="200"
        height="150"
        viewBox="0 0 200 150"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Curved path for the arrow */}
        <path
          d="M 50 120 Q 100 50, 150 20"
          fill="transparent"
          stroke="#f7b500" // Arrow path color
          strokeWidth="4"
          strokeDasharray="5,5" // Dashed line
        />
        {/* Arrow head */}
        <polygon
          points="140,20 150,10 150,30"
          fill="#f7b500" // Same color as the arrow line
          style={{ transform: 'rotate(-40deg)', transformOrigin: 'center' }}
        />
      </svg>

      {/* Optional: Additional styling to enhance cuteness */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          left: '30px',
          color: '#f7b500',
          fontWeight: 'bold',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          transform: `rotate(${angle}deg)`, // Rotate the text along with the arrow
        }}
      >
        <img
          src="dog.png" // Add your deer-like icon image here (like the one shown)
          alt="deer-icon"
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <span>12 km/h</span>
      </div>
    </div>
  );
};

export default Arrow;
