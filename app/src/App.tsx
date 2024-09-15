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


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/ride" element={<Ride />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

