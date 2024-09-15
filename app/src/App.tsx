import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Map from "./right_component/Map";
// import Drawer from "./left_component/Drawer";
import Search from "./pages/Search";
import Ride from "./pages/Ride";

import CroppableImage from './left_component/gesture_component';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/profile">プロフィール</Link>
            </li>
          </ul>
        </nav> */}

        {/* 各ページへのルート設定 */}
        <Routes>
          {/* <Route path="/" element={<Map />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/ride" element={<Ride />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
