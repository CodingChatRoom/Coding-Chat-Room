import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Data from './component/Data'; 
import Tools from './component/Tools';
import About from './component/About';
import Learn from './component/Learn';
import Creator from './component/Creator';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:topic" element={<Data />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/About" element={<About />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/Creator" element={<Creator />} />
      </Routes>
    </Router>
  );
}

export default App;
