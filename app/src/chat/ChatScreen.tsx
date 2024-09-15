import React from 'react';
import { Box } from '@mui/material';
import ChatBubble from './ChatBubble';
import { chatMessages } from './mockData';

const ChatScreen: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        height: '80vh',
        overflowY: 'auto',
        backgroundColor: '#f5f5f5',
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {chatMessages.map((chat) => (
        <ChatBubble key={chat.id} message={chat.message} isUser={chat.isUser} />
      ))}
    </Box>
  );
};

export default ChatScreen;