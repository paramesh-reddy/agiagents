import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from '../src/pages/home'; // Import your homepage component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route for homepage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
