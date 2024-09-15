import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./right_component/Map";
import Drawer from "./left_component/Drawer";

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
          <Route path="/map" element={<Map />} />
          <Route path="/drawer" element={<Drawer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
