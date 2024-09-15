import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface HPBarProps {
    name : string;
    life: number;  // HP値 (1-100)
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' ;  // カスタムカラー
}

const HPBar: React.FC<HPBarProps> = ({ name ,life, color = 'primary' }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 300, textAlign: 'center', margin: '0 auto' }}>
      <Typography variant="h6" gutterBottom>
        {name}: {life}
      </Typography>
      
      {/* LinearProgressはHPの値に応じてバーの幅を設定 */}
      <LinearProgress
        variant="determinate"
        value={life}
        color={color}
        sx={{
          height: 10,
          borderRadius: 5,
        }}
      />
    </Box>
  );
};

export default HPBar;