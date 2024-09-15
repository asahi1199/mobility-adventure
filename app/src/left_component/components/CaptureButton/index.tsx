// export default CaptureButton;
import React from "react";
import "./index1.css";

// Define props for CaptureButton
interface CaptureButtonProps {
  onCaptureComplete: () => void; // Expect a callback prop
}

const CaptureButton: React.FC<CaptureButtonProps> = ({ onCaptureComplete }) => {
  const handleClick = (): void => {
    onCaptureComplete(); // Call the function passed as a prop
  };

  return (
    <button className="container" onClick={handleClick}>
      この子をキャプチャする
    </button>
  );
};

export default CaptureButton;
