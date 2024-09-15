import * as React from 'react';
import { Box, Avatar, Typography, LinearProgress } from '@mui/material';
import DogCLASS from '../../dogtype'; // Import Dog type

// propsでDog情報を受け取るように修正
interface DetailDrawerProps {
  dog: DogCLASS;
}

const DetailDrawer: React.FC<DetailDrawerProps> = ({ dog }) => {
  return (
    <Box mt={2}>
      {/* Image */}
      <Box display="flex" justifyContent="center">
        <Avatar
          src={dog.filepath} // 動的に画像のパスを使用
          alt={dog.name}
          sx={{ width: 250, height: 180, borderRadius: 2 }}
          variant="square"
        />
      </Box>

      {/* Text Information */}
      <Typography variant="h6" gutterBottom mt={2}>
        {dog.name}（{dog.sex}、{dog.age}歳）
      </Typography>
      <Typography variant="body1">性格: {dog.character}</Typography>

      {/* Hunger Level */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography variant="body2" fontWeight="bold">満腹度</Typography>
        <Typography variant="body2" color="text.secondary">
          {dog.hunger < 30 ? 'おなかが減ってるよ😓' : '満腹だよ😊'}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={dog.hunger}
        sx={{ height: 10, borderRadius: 5, mt: 1, mb: 2 }}
        color={dog.hunger < 30 ? 'error' : 'success'}
      />

      {/* Stamina Level (体力 = life) */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" fontWeight="bold">体力</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={dog.life}
        sx={{ height: 10, borderRadius: 5, mt: 1, mb: 2 }}
        color="success"
      />

      {/* Stress Level */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" fontWeight="bold">ストレス度</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={dog.stress}
        sx={{ height: 10, borderRadius: 5, mt: 1 }}
        color={dog.stress > 50 ? 'warning' : 'success'}
      />
    </Box>
  );
};

export default DetailDrawer;
