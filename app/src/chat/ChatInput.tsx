import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState<string>('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(''); // 送信後に入力フィールドをクリア
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderTop: '1px solid #ddd',
      }}
    >
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        placeholder="Type your message..."
        fullWidth
        minRows={1}
        maxRows={4}
        variant="outlined"
        sx={{ marginRight: '10px' }}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;