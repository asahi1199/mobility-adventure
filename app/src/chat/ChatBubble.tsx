import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          maxWidth: '60%',
          backgroundColor: isUser ? 'lightblue' : 'lightgreen',
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Paper>
    </Box>
  );
};

export default ChatBubble;