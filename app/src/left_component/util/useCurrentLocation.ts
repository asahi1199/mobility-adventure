import { useState, useEffect } from 'react';

// Define the types for the location state
interface LocationState {
  x: number; // x coordinate of the dot
  y: number; // y coordinate of the dot
  error: string | null;
}

// Custom Hook to get dummy x and y values and constantly update
export const useCurrentLocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>({
    x: 20, // Initial dummy x value
    y: 0,  // Initial dummy y value
    error: null,
  });

  useEffect(() => {
    let x = 20; // Starting value of x
    let y = 0;  // Starting value of y

    const intervalId = setInterval(() => {
      if (x > 0) {
        // Decrease x until it reaches 0
        x -= 1;
      } else if (y < 20) {
        // Once x reaches 0, start increasing y
        y += 1;
      }

      // Update the location with new x and y values
      setLocation({
        x,
        y,
        error: null,
      });
    }, 200); // Update every 200ms

    // Cleanup function to stop the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return location;
};
