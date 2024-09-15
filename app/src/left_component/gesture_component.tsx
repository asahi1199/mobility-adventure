import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';

interface CroppableImageProps {
    src: string;
    sensitivity: number;
}

const CroppableImage: React.FC<CroppableImageProps> = ({ src, sensitivity }) => {
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
    const [centerX, setCenterX] = useState(0); // 初期位置のX軸
    const [centerY, setCenterY] = useState(0); // 初期位置のY軸

    // 画像サイズを取得して、中央位置を計算する
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        setImgSize({ width: naturalWidth, height: naturalHeight });

        // 画面の中央を計算して、画像の初期位置を中央に設定
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        setCenterX((windowWidth - naturalWidth) / 2);
        setCenterY((windowHeight - naturalHeight) / 2);
    };

    // react-springを使ってアニメーションを管理（初期位置を中央に設定）
    const [style, api] = useSpring(() => ({ x: centerX, y: centerY }));

    // ドラッグ用のジェスチャーフック
    const bind = useDrag((state) => {
        const { offset } = state;
        api.start({ x: offset[0] * sensitivity + centerX, y: offset[1] * sensitivity + centerY });
    });

    // dragstartイベントをハンドリングしてゴースト画像を隠す
    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault(); // ゴースト画像を無効化
        const img = new Image();
        img.src = ''; // 透明な画像として空のsrcをセット
        e.dataTransfer.setDragImage(img, 0, 0); // ゴースト画像を透明にする
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `100vw`,
                height: `100vh`,
                overflow: 'hidden',
                border: '1px solid black',
            }}
        >
            <animated.img
                {...bind()} // ドラッグジェスチャーを画像にバインド
                src={src}
                alt="Croppable"
                onLoad={handleImageLoad} // 画像がロードされたときにサイズを取得
                onDragStart={handleDragStart} // ゴースト画像を非表示にする処理を追加
                style={{
                    ...style, // springスタイルを適用
                    cursor: 'grab',
                    userSelect: 'none',
                    willChange: 'transform',
                    width: `${imgSize.width}px`,  // 画像の幅を設定
                    height: `${imgSize.height}px`, // 画像の高さを設定
                }}
            />
        </div>
    );
};

export default CroppableImage;
