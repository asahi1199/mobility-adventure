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

const ChatDrawer: React.FC = () => {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState<string>('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <Box mt={2}>
      {/* Display chat messages */}
      <List sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
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
      </List>

      {/* Input field for typing new messages */}
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatDrawer;
