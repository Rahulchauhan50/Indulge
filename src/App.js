import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Slider from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setMobileMenuOpenfn = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <Router>
      <div>
        <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpenfn={setMobileMenuOpenfn} />
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpenfn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
