import React, { useEffect, useState } from 'react';
import Arrow from '../map_component/Arrow';

interface DogProps {
  id: string;
  x: number;
  y: number;
}

const Dog: React.FC<DogProps> = ({ id, x, y }) => {
  const [prevPosition, setPrevPosition] = useState({ x, y }); // Track previous position
  const [angle, setAngle] = useState(0); // Store the rotation angle for the arrow

  // Calculate the angle of movement based on the previous and current positions
  useEffect(() => {
    const dx = x - prevPosition.x;
    const dy = y - prevPosition.y;

    // Calculate the angle in degrees and add 90 to make it align with screen coordinates
    const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 180; // Add 90 degrees to correct orientation
    setAngle(newAngle);

    // Update the previous position
    setPrevPosition({ x, y });
  }, [x, y]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transition: 'left 0.2s, top 0.2s', // Smooth transition
      }}
    >
      {/* Arrow element to indicate the direction */}
      {/* <Arrow angle={angle} /> */}

      {/* Dog image */}
      <img
        src="dog.png"
        alt="Dog"
        style={{
          width: '50px', // Adjust the size of the dog image
          height: '50px',
        }}
      />
    </div>
  );
};

export default Dog;

// import React, { useEffect, useState } from 'react';

// interface DogProps {
//   id: string;
//   x: number;
//   y: number;
// }

// const Dog: React.FC<DogProps> = ({ id, x, y }) => {
//   const [prevPosition, setPrevPosition] = useState({ x, y }); // Track previous position
//   const [angle, setAngle] = useState(0); // Store the rotation angle for the arrow

//   // Calculate the angle of movement based on the previous and current positions
//   useEffect(() => {
//     const dx = x - prevPosition.x;
//     const dy = y - prevPosition.y;

//     // Calculate the angle in degrees
//     const newAngle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
//     setAngle(newAngle);

//     // Update the previous position
//     setPrevPosition({ x, y });
//   }, [x, y]);

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         left: `${x}px`,
//         top: `${y}px`,
//         transition: 'left 0.2s, top 0.2s', // Smooth transition
//       }}
//     >
//       {/* Arrow element to indicate the direction */}
//       <div
//         style={{
//           width: '0',
//           height: '0',
//           borderLeft: '10px solid transparent',
//           borderRight: '10px solid transparent',
//           borderBottom: '20px solid red', // The arrow part
//           transform: `rotate(${angle}deg)`, // Rotate based on movement direction
//           transformOrigin: 'center',
//         }}
//       />

//       {/* Optional: Dog image or representation */}

//       <img
//         src="dog.png"
//         alt="Dog"
//         style={{
//           width: '50px', // Adjust the size of the dog image
//           height: '50px',
//         }}
//       />
//     </div>
//   );
// };

// export default Dog;
