import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Ride from "./pages/Ride";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
