import React from "react";
import "./index.css"; // ボタンのスタイルを定義するCSSファイル

// コンポーネント定義
const DuringCapture: React.FC = () => {
  return <button style={{ position: 'absolute' , top: "20px", left: "20px" }} className="container">キャプチャ中</button>;
};

export default DuringCapture;
