import React, { useState, useEffect } from 'react';

type Anchor = 'right';

interface DogProps {
  x: number;
  y: number;
  id: string;
  f: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isDrawerOpen: boolean; // Receive the isDrawerOpen prop
}

const Dog: React.FC<DogProps> = ({ x, y, id, f, isDrawerOpen }) => {
  const [isPressed, setIsPressed] = useState(false); // State to track if the dog is pressed

  // Handle the click event
  const handleClick = (event: React.MouseEvent) => {
    setIsPressed(!isPressed); // Toggle the pressed state
    f('right', true)(event); // Call the provided function
  };

  // Reset the dog image when the drawer closes
  useEffect(() => {
    if (!isDrawerOpen) {
      setIsPressed(false); // Reset the pressed state when the drawer closes
    }
  }, [isDrawerOpen]); // This effect will trigger when the drawer state changes

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={isPressed ? 'dog_pressed.png' : 'dog.png'} // Toggle between the normal and pressed image
        alt={`Dog ${id}`}
        onClick={handleClick}
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
      {isPressed && (
        <img
          src="dog_animation.gif" // Replace with the path to your GIF
          alt="Dog Animation"
          style={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            left: `${x + 60}px`, // Position the GIF next to the dog (adjust this value as needed)
            top: `${y}px`,
            transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
          }}
        />
      )}
    </div>
  );
};

export default Dog;

// import React, { useState, useEffect } from 'react';

// type Anchor = 'right';

// interface DogProps {
//   x: number;
//   y: number;
//   id: string;
//   f: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
//   isDrawerOpen: boolean; // Receive the isDrawerOpen prop
// }

// const Dog: React.FC<DogProps> = ({ x, y, id, f, isDrawerOpen }) => {
//   const [isPressed, setIsPressed] = useState(false); // State to track if the dog is pressed

//   // Handle the click event
//   const handleClick = (event: React.MouseEvent) => {
//     setIsPressed(!isPressed); // Toggle the pressed state
//     f('right', true)(event); // Call the provided function
//   };

//   // Reset the dog image when the drawer closes
//   useEffect(() => {
//     if (!isDrawerOpen) {
//       setIsPressed(false); // Reset the pressed state when the drawer closes
//     }
//   }, [isDrawerOpen]); // This effect will trigger when the drawer state changes

//   return (
//     <img
//       src={isPressed ? 'dog_pressed.png' : 'dog.png'} // Toggle between the normal and pressed image
//       alt={`Dog ${id}`}
//       onClick={handleClick}
//       style={{
//         width: '50px',
//         height: '50px',
//         position: 'absolute',
//         left: `${x}px`,
//         top: `${y}px`,
//         transition: 'left 0.2s, top 0.2s', // Smooth transition for movement
//         cursor: 'pointer', // Indicate clickable image
//       }}
//     />
//   );
// };

// export default Dog;
