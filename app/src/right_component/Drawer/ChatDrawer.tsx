import * as React from 'react';
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import postToGenerativeModel from '../../llmRequest';
import { useRef, useEffect } from 'react';
import './ChatDrawer.css';

const ChatDrawer: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState<string>('');
  const chatContainerRef = useRef<HTMLDivElement>(null); // Reference to chat container

  // Function to auto-scroll to the bottom when a new message is added
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    async function reply(userMessage: string) {
      const result: string = await postToGenerativeModel({
        user_prompt: userMessage,
      });
      setMessages((prevMessages) => [...prevMessages, result]);
    }

    if (message.trim()) {
      const requestMessage = message;
      setMessage('');
      setMessages((prevMessages) => [...prevMessages, requestMessage]);
      await reply(requestMessage);
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Chat messages container */}
      <Box
        ref={chatContainerRef}
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: '10px',
        }}
      >
        <List className="chat-list" sx={{ padding: 0 }}>
          {messages.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              No messages yet
            </Typography>
          ) : (
            messages.map((msg, index) => (
              <ListItem key={index} className="message-container">
                <ListItemText
                  primary={msg}
                  primaryTypographyProps={{fontSize: '3.7vh'}} 
                  className={index % 2 === 0 ? 'user-message' : 'bot-message'}
                />
              </ListItem>
            ))
          )}
        </List>
      </Box>

      {/* Input field for typing new messages */}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          padding: '10px',
          backgroundColor: 'white',
          boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow to visually separate input area from the chat
        }}
      >
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                handleSendMessage();
              }
            }}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatDrawer;
