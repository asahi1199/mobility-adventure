import React from 'react';
import logo from './logo.svg';
import './App.css';

import CroppableImage from './left_component/gesture_component';

function App() {
  return (
    <div className="App">
      <h1>Test Croppable Image</h1>
      <CroppableImage
        src="big_map.png"
        sensitivity={1}
      />
    </div>
  );
}

export default App;
