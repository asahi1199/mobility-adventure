import * as React from 'react';
import {
  Box, 
  TextField, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import  postToGenerativeModel  from '../../llmRequest';
import { useEffect } from 'react';
import { useRef } from 'react';



  const ChatDrawer: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState<string>('');
  // const [userMassage, setUserMessage] = React.useState<string>('');

  // Scrollを最後に常に移動する。
  // refの型をHTMLDivElementに設定 トップレベルで呼び出すこと
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSendMessage = async () => {
    async function reply(userMassage: string) {
      const result: string = await postToGenerativeModel({ user_prompt: userMassage });
      setMessages((prevMessages) => [...prevMessages, result]);
    }
  
    if (message.trim()) {
      const requestMassage = message;
      setMessage('');
      setMessages((prevMessages) => [...prevMessages, requestMassage]);
      await reply(requestMassage);
    }
  };

  return (
    <Box mt={2}>
      {/* Display chat messages */}
      <List sx={{ minHeight: '75vh',maxHeight : '75vh', overflowY: 'auto', mb: 2 }}>
        {messages.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No messages yet
          </Typography>
        ) : (
          messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg} />
            </ListItem>
          ))
        )}
        <div ref={messagesEndRef} />
      </List>

      {/* Input field for typing new messages */}
      <Box display="flex" alignItems="center" >
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if( e.key === 'Enter' && (e.ctrlKey || e.metaKey))
            {
              handleSendMessage();
            }
          }
          }
          />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
      
    </Box>
  );
};

export default ChatDrawer;
