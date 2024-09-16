import React from "react";
import "./index.css"; // ボタンのスタイルを定義するCSSファイル
import { Button } from "@mui/material"; // MUIのボタンコンポーネントをインポート

// コンポーネント定義
// const DuringCapture: React.FC = () => {
//   return <button style={{ position: 'absolute' , top: "20px", left: "20px" }} className="container">キャプチャ中</button>;
// };

const DuringCapture: React.FC = () => {
  return (
    <Button sx={
      {
        position: 'absolute',
        top: "20px",
        left: "20px",
        backgroundColor: "blue",
        color: "white"
      }
    }>
      キャプチャ中
    </Button>
  )
}

export default DuringCapture;
