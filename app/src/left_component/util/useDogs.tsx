import { useState, useEffect } from 'react';

// Define the types for dog locations
interface DogLocation {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

// Generate a random position within a given range
const getRandomPosition = (max: number) => Math.random() * max;

// Custom Hook to manage the location and movement of multiple dogs
export const useDogs = (initialDogs: Omit<DogLocation, 'targetX' | 'targetY'>[]) => {
  const [dogs, setDogs] = useState<DogLocation[]>(
    initialDogs.map((dog) => ({ ...dog, targetX: dog.x, targetY: dog.y }))
  );

  // Function to move a specific dog programmatically by id
  const moveDog = (id: string, newX: number, newY: number) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog) =>
        dog.id === id
          ? { ...dog, x: newX, y: newY, targetX: newX, targetY: newY }
          : dog
      )
    );
  };

  // Random movement logic for the dogs
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDogs((prevDogs) =>
        prevDogs.map((dog) => {
          const step = 2; // Smaller step for slower movement
          let { x, y, targetX, targetY } = dog;

          // If the dog has reached its target, set a new random target
          if (Math.abs(x - targetX) < step && Math.abs(y - targetY) < step) {
            targetX = getRandomPosition(500); // Assuming map width is 500px
            targetY = getRandomPosition(500); // Assuming map height is 500px
          }

          // Move x towards targetX
          if (x < targetX) x += step;
          if (x > targetX) x -= step;

          // Move y towards targetY
          if (y < targetY) y += step;
          if (y > targetY) y -= step;

          return { ...dog, x, y, targetX, targetY };
        })
      );
    }, 100); // Update every 100ms for smoother animation

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
    };
  }, []);

  return { dogs, moveDog };
};
