import logo from './logo.svg';
import './App.css';
import HPBar from './right_component/HPBar';
import React, { useState } from 'react';
import { Slider, Box } from '@mui/material';


const App: React.FC = () => {
  const [life, setlife] = useState<number>(100);
  const [color, setColor] = useState<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'>('primary');

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setlife(newValue as number);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value as 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning');
  };

  return (
    <Box sx={{ width: 300, margin: '0 auto' }}>
      {/* HPバー表示 */}
      <HPBar name={'ストレス値'} life ={life} color={color} />

      {/* HPを変更するスライダー */}
      <Slider value={life} onChange={handleSliderChange} min={1} max={100} sx={{ mt: 2 }} />

      {/* カラーを変更するセレクトボックス */}
      <select value={color} onChange={handleColorChange} style={{ marginTop: '20px', width: '100%' }}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="error">Error</option>
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
      </select>
    </Box>
  );
};

export default App;