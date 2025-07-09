import './App.css';
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Optional: Simple navbar */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#007bff' }}>
  <div className="container">
    <Link className="navbar-brand fw-bold d-flex align-items-center text-white" to="/" style={{ fontSize: '1.5rem' }}>
      ToyStore
      <span className="ms-2 text-white" style={{ fontSize: '1.1rem' }}>
        Apne pasand ka kharido!
      </span>
    </Link>
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/" style={{ fontSize: '1.3rem' }}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/products" style={{ fontSize: '1.3rem' }}>Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about" style={{ fontSize: '1.3rem' }}>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/contact" style={{ fontSize: '1.2rem' }}>Contact</Link>
      </li>
    </ul>
  </div>
</nav>



        {/* Routing section */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Optional: Footer */}
        <footer className="bg-dark text-white text-center p-3 mt-5">
          &copy; 2025 ToyStore. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
