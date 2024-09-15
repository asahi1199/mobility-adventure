import React from "react";
import CroppableImage from "../gesture_component"

const Map = () => {
  return (
    <div className="App">
      <h1>Test Croppable Image</h1>
      <CroppableImage
        src="future_map.png"  // 画像ファイルのパスを指定
        sensitivity={1}    // 感度を指定
      />
    </div>
  );
};

export default Map;
