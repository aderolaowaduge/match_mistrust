import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import MatchGame from './pages/MatchGame';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-of-mistrust" element={<MatchGame />} />
      </Routes>
    </Router>
  );
}

export default App;
