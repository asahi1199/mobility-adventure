export interface ChatMessage {
    id: number;
    message: string;
    isUser: boolean;
  }
  
  export const ChatMessage: ChatMessage[] = [
    { id: 1, message: "Hello, how are you?", isUser: false },
    { id: 2, message: "I'm good, thank you! How about you?", isUser: true },
    { id: 3, message: "I'm doing well, thanks for asking!", isUser: false },
    { id: 4, message: "That's great to hear.", isUser: true },
  ];
