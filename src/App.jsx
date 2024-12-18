// src/App.js
import React from 'react';
import './App.css'; // Optional: Add styles here if needed
import Header from './components/Header';
import Footer from './components/Footer';
import  Home from './Pages/Home';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Router>
    <Header />
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/contact" element={<Contactus />} />
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
