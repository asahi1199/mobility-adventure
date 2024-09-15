import React from "react";
import "./index2.css";

// Define props for FinishCapture
interface FinishCaptureProps {
  onFinishCapture: () => void; // Expect a callback prop
}

const FinishCapture: React.FC<FinishCaptureProps> = ({ onFinishCapture }) => {
  const handleClick = (): void => {
    onFinishCapture(); // Call the function passed as a prop
  };

  return (
    <button className="container" onClick={handleClick}>
      キャプチャを終了する
    </button>
  );
};

export default FinishCapture;
