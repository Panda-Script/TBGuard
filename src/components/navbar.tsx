import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Left side - Brand */}
        <Link to="/" className="brand-large">
          Tuberculosis Detection
        </Link>

        {/* Right side - Navigation Links */}
        <div className="nav-links">
          <Link 
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Data
          </Link>
          <Link
            to="/search"
            className={
              location.pathname === "/search" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </div>
      </div>
      <div className="gradient-bar"></div>
    </nav>
  );
}

export default NavBar;
