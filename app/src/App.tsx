import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatScreen from './chat/ChatScreen';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ChatScreen />
  </div>
  );
}

export default App;
