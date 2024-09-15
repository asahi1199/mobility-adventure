import React from 'react';
import './index.css'; // ボタンのスタイルを定義するCSSファイル

// コンポーネント定義
const CaptureButton: React.FC = () => {
  // ボタンがクリックされたときに呼び出される関数
  const handleClick = (): void => {
    window.location.href = 'https://qiita.com/Hashimoto-Noriaki/items/95d9fe027d169ce74218'; // リダイレクト先のURLを指定
  };

  return (
    <button className="container" onClick={handleClick}>
      この子をキャプチャする
    </button>
  );
};

export default CaptureButton;
