import React from 'react';
import { Box } from '@mui/material';
import ChatBubble from './ChatBubble';
import { ChatMessage } from './mockData';
import ChatInput from './ChatInput';
import { useState } from 'react';


const ChatScreen: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 1, message: "Hello, how are you?", isUser: false },
        { id: 2, message: "I'm good, thank you! How about you?", isUser: true },
      ]);
    
      const handleSendMessage = (newMessage: string) => {
        const newChat: ChatMessage = {
          id: messages.length + 1,
          message: newMessage,
          isUser: true,
        };
        setMessages([...messages, newChat]);
      };

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
      {ChatMessage.map((chat) => (
        <ChatBubble key={chat.id} message={chat.message} isUser={chat.isUser} />
      ))}
      {/* メッセージ入力エリア */}
      <ChatInput onSend={handleSendMessage} />
    </Box>
      
  );
};

export default ChatScreen;