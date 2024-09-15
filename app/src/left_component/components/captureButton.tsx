import React from 'react';
import './CaptureButton.css'; // ボタンのスタイルを定義するCSSファイル

// コンポーネント定義
const captureButton: React.FC = () => {
  // ボタンがクリックされたときに呼び出される関数
  const handleClick = (): void => {
    window.location.href = 'https://example.com'; // リダイレクト先のURLを指定
  };

  return (
    <button className="container" onClick={handleClick}>
      この子をキャプチャする
    </button>
  );
};

export default captureButton;
