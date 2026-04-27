import "./styles.css";
import NavBar from "./components/navbar";
import Data from "./pages/data";
import Search from "./pages/search";
import About from "./pages/about";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
} 